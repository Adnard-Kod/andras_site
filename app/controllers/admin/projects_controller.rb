class Admin::ProjectsController < ApplicationController
  before_action :authenticate_admin!, only: [:new, :create, :edit, :update, :show, :destroy]
  before_action :set_project, only: [ :show, :edit, :update, :destroy ]

  def index
    @projects = Project.all
  end

  def new
    @project = Project.new
  end

  def create
    @project = Project.new(project_params)
    if @project.save
      redirect_to admin_projects_path
    else
      render :new
    end
  end

  def edit
  end

  def update
    @project.update(project_params)
    if @project.save
      redirect_to edit_admin_project_path(@project)
    else
      render :edit
    end
  end

  def show
  end

  def destroy
    @project.destroy
    redirect_to admin_projects_path
  end

  private

  def set_project
    @project = Project.find(params[:id])
  end

  def project_params
    params.require(:project).permit(:name, :site, :code, :img, :description)
  end

  def authenticate_admin!
    unless user_signed_in? && current_user.admin == true
      redirect_to root_path
    end
  end
end
