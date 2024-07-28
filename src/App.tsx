import React, { useState } from "react";
import "./App.css";

import { TodoList } from "./components/Todo/Todo";
import { NewTodo } from "./components/NewTodo/NewTodo";
import { Todo } from "./models/todo.model";

let TodoId = 0;
const App: React.FC = () => {
  const [Todos, setTodo] = useState<Todo[]>([]);

  const AddTodoHandler = (Todo: string) => {
    Todos.push({ id: TodoId++, title: Todo, status: false });
    setTodo(() => [...Todos, { id: TodoId++, title: Todo, status: false }]);
    localStorage.setItem("value", JSON.stringify(Todos));
  };

  return (
    <>
      <NewTodo onAddTodo={AddTodoHandler} />
      <TodoList
        Item={JSON.parse(localStorage.getItem("value")!) || Todos}
        setTodo={setTodo}
      />
    </>
  );
};

export default App;
