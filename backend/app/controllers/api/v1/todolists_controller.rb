class Api::V1::TodolistsController < ApplicationController
  def index
    render json: { status: 200, todos: Todolist.all }
  end

  def create
    todolist = Todolist.new(todolist_params)

    if todolist.save
      render json: { status: 200, todolist: todolist }
    else
      render json: { status: 500, message: "Todoの作成に失敗しました" }
    end
  end

  def destroy
    todolist = Todolist.find(params[:id])

    if todolist.destroy
      render json: { status: 200, todolist: todolist }
    else
      render json: { status: 500, message: "Todoの削除に失敗しました" }
    end
  end

  private

    def todolist_params
      params.require(:todolist).permit(:title)
    end
end
