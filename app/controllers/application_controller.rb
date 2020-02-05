class ApplicationController < ActionController::Base
  def index
    @sites = Site.all
    render component: 'Sites', props: { sites: @sites }
  end
end
