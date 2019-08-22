class Api::V1::MoviesController < ApplicationController

    def index
        @movies = Movie.all
        render json: @movies, only: [:id, :title], include: :questions
    end

    def show
        @movie = Movie.find(params[:id])
        render json: @movie, only: [:id, :title], include: :questions
    end

    def create
        movie = Movie.create(movie_params)
        render json: movie
      end
    
    def update
        @movie.update(movie_params)
        render json: @movie
    end
    
    def destroy
        movieId = @movie.id
        @movie.destroy
        render json: {message:"Movie deleted", movieId:movieId}
    end
  
    private
    
    def movie_params
        params.permit(:title, :username, :score)
    end
    
    def set_params
        @movie = Movie.find(params[:id])
    end  

end
