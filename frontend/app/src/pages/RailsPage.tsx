import React, { useState, useEffect } from "react";
import { TodoList } from "../components/TodoList";
import { TodoForm } from "../components/TodoForm";
import { getTodos } from "../lib/api/todos";
import { Todo } from "../interfaces/index";

const RailsPage: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  /* TODOを取得*/
  const handleGetTodos = async () => {
    try {
      const res = await getTodos();
      console.log(res);

      if (res?.status === 200) {
        setTodos(res.data.todos);
      } else {
        console.log(res.data.message);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    handleGetTodos();
  }, []);
  return (
    <>
      <h1>TODOアプリ</h1>
      <p>RailsAPIを用いたTODOアプリです。</p>
      <TodoForm todos={todos} setTodos={setTodos} />
      <TodoList todos={todos} setTodos={setTodos} />
    </>
  );
};

export default RailsPage;
