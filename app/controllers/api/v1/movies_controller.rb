class Api::V1::MoviesController < ApplicationController

    def index
        @movies = Movie.all
        render json: @movies, only: [:id, :title], include: :questions
    end

    def show
        @movie = Movie.find(params[:id])
        render json: @movie, only: [:id, :title], include: :questions
    end

end
