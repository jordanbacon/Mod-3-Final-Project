class Api::V1::MoviesController < ApplicationController
    before_action :set_params, only: [:show,:update,:destroy]
  
    def index
      @movies = Movie.all
      render json: @movies, only: [:id, :title], include: :questions
  end
  
    def create
      movie = Movie.create(movie_params)
      render json: movie, status: 201
    end
  
    def update
      @movie.update(movie_params)
      render json: @movie, status: 200
    end
  
    def destroy
      movieId = @movie.id
      @movie.destroy
      render json: {message:"Movie deleted", movieId:movieId}
    end
  
    def show
      render json: @movie, status: 200
    end
  
    private
    def movie_params
      params.permit(:title, :username, :score)
    end
  
    def set_params
      @movie = Movie.find(params[:id])
    end
  end
  