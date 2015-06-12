class HomeController < ApplicationController
  def index
    if user_signed_in? && current_user.admin == true
      redirect_to admin_projects_path
    else
      @projects = Project.all
    end
  end
end