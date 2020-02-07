desc "This task ping to keep traffic to domain is store on heroku"
task :ping => :environment do
  puts "Start ping"

  sites = Site.all
  sites.each do |site|
    p "Starting ping to #{site.url}"
    p Net::Ping::External.new.ping(site.url)
    p "End"
  end

  puts "Done"
end
