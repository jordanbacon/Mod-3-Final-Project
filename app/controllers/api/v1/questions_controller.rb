class Api::V1::QuestionsController < ApplicationController

    def index
        @questions = Question.all
        render json: @questions, only: [:id, :description, :possible_answer, :correct_answer, :movie_id], include: :movie
    end

end
