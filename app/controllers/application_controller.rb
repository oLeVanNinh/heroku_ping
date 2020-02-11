class ApplicationController < ActionController::Base
  def index
    @sites = Site.all.reverse
    render component: 'Sites', props: { sites: @sites }
  end
end
