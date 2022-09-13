import { useNavigate } from "react-router-dom";
import NewTodoForm from "../components/todos/NewTodoForm";

function NewTodo() {
  const navigate = useNavigate();

  function addTodoHandler(todoData) {
    fetch("https://reacttodos-e9167-default-rtdb.firebaseio.com/todos.json", {
      method: "POST",
      body: JSON.stringify(todoData),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(() => {
      navigate("/", { replace: true });
    });
  }

  return (
    <section>
      <h1>Add new todo</h1>
      <NewTodoForm onAddTodo={addTodoHandler} />
    </section>
  );
}

export default NewTodo;
