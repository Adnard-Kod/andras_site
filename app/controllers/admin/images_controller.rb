class Admin::ImagesController < ApplicationController
  before_action :set_project, only: [:upload]
  before_action :authenticate_user!

  def upload
    image = Image.new(image_params)
    image.project_id = @project.id
    image.save
    binding.pry
    redirect_to edit_admin_project_path(@project)
  end

  private

  def set_project
    @project = Project.find(params[:id])
  end

  def image_params
    params.require(:image).permit(:picture)
  end
end
