require 'net/http'
Log = Logger.new(STDOUT)
class HerokuPing
  def initialize(url)
    @url = url
  end


  def ping
    Log.info "Ping to #{@url}"
    response = request(@url)
    if response.nil?
      Log.error "Ping fail"
    elsif response.code =~ /^[1-3][0-9]{2}$/
      Log.info "Status code: #{response.code}"
    else
      headers = ''
      response.each_header { |k, v| headers << "\n #{k} = #{v}" }
      Log.error "Status code: #{response.code}"
      Log.error "Response headers: #{headers}"
      Log.error "Response body: \n #{response.body}" unless response.body.nil?
    end
  end

  def request(url, type=:head)
    uri = URI.parse(url)
    uri_path = uri.path.empty? ? '/' : uri.path
    http = Net::HTTP.new(uri.host, uri.port)
    handle_ssl(http, url)
    send_request(http, type, uri_path)
  rescue StandardError => e
    Log.error "Encountered #{e.class.name} exception"
    Log.error "Exception message: #{e.message}"
  end


  def handle_ssl(http, url)
    if url[/^https/]
      http.use_ssl = true
    end
  end

  def send_request(http, type, url_path)
    case type
    when :head
      http.head(url_path)
    when :get
      http.get(url_path)
    else
      raise ArgumentError, "Unsuported HTTP method"
    end
  end
end
