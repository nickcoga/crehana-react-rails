class CoursesController < ApplicationController
  def index
    render json: {course: Course.all}
  end
end
