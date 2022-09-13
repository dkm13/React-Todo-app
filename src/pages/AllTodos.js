import { useState, useEffect } from "react";
import TodoList from "../components/todos/TodoList";
import "../index.css";

function AllTodos() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedTodos, setLoadedTodos] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetch("https://reacttodos-e9167-default-rtdb.firebaseio.com/todos.json")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const todos = [];
        for (const key in data) {
          const todo = {
            id: key,
            ...data[key],
          };

          todos.push(todo);
        }

        // edit
        setIsLoading(false);
        setLoadedTodos(todos);
      });
  }, []);

  if (isLoading) {
    return (
      <div className="lds-ring">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    );
  }

  return (
    <div>
      <h1>All Todo page</h1>
      <TodoList todos={loadedTodos} />
    </div>
  );
}

export default AllTodos;
