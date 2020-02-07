class SitesController < ApplicationController
  def create
    site = Site.new(site_params)

    return render json: {site: site } if site.save
  end

  def update
  end

  def destroy
  end

  private

  def site_params
    params.require(:site).permit(:url)
  end
end
