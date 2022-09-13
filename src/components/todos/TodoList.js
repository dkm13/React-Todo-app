import classes from "./TodoList.module.css";
import TodoItem from "./TodoItem";

function TodoList(props) {
  return (
    <ul className={classes.list}>
      {props.todos.map((todo) => (
        <TodoItem
          key={todo.id}
          id={todo.id}
          title={todo.title}
          description={todo.description}
          date={todo.date}
        />
      ))}
      {/* <TodoItem />
      <TodoItem />
    <TodoItem /> */}
    </ul>
  );
}

export default TodoList;
