class Api::V1::MoviesController < ApplicationController

    def index
        @movies = Movie.all
        render json: @movies, only: [:id, :title], include: :questions
    end

end
