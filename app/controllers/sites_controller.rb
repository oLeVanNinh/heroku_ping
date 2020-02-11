class SitesController < ApplicationController
  before_action :find_site_record, only: [:update, :destroy]

  def create
    site = Site.new(site_params)

    return render json: {site: site } if site.save
  end

  def update
  end

  def destroy
    if @site && @site.destroy
      render json: { message: 'success' }, status: 200
    else
      render json: { message: 'Not found' }, status: 404
    end
  end

  private

  def find_site_record
    @site = Site.find_by(id: params[:id])
  end

  def site_params
    params.require(:site).permit(:url)
  end
end
