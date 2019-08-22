class Api::V1::QuestionsController < ApplicationController

    def index
        @questions = Question.all
        render json: @questions, only: [:id, :description, :possible_answer, :correct_answer, :movie_id], include: :movie
    end

    def show
        render json: @question
    end
    
    def create
        question = Question.create(question_params)
        render json: question
    end
    
    def update
        @question.update(question_params)
        render json: @question
    end
    
    def destroy
        questionId = @question.id
        @question.destroy
        render json: {message:"Question deleted", questionId:questionId}
    end
    
    private
    def question_params
        params.permit(:movie_id, :description, :possible_answer1, :possible_answer2, :possible_answer3, :possible_answer4, :correct_answer)
    end
    
    def set_question
        @question = Question.find(params[:id])
    end  

end
