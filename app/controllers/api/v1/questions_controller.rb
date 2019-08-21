class Api::V1::QuestionsController < ApplicationController
    before_action :set_question, only: [:show,:update,:destroy]
  
    def index
        @questions = Question.all
        render json: @questions, only: [:id, :description, :possible_answer1, , :possible_answer2, :possible_answer3, :possible_answer4, :correct_answer, :movie_id], include: :movie
    end
  
    def create
      question = Question.create(question_params)
      render json: question, status: 201
    end
  
    def update
      @question.update(question_params)
      render json: @question, status: 200
    end
  
    def destroy
      questionId = @question.id
      @question.destroy
      render json: {message:"Question deleted", questionId:questionId}
    end
  
    def show
      render json: @question, status: 200
    end
  
    private
    def question_params
      params.permit(:movie_id, :description, :possible_answer1, :possible_answer2, :possible_answer3, :possible_answer4, :correct_answer)
    end
  
    def set_question
      @question = Question.find(params[:id])
    end
  end
  