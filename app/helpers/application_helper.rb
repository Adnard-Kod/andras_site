module ApplicationHelper
  def errors_for(object)
    render partial: "../views/shared/errors_for", locales: {object: object}
  end
end
