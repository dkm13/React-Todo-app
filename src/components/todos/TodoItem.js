import { useState } from "react";
import classes from "./TodoItem.module.css";
import Card from "../ui/Card";

function TodoItem(props) {
  const [isDone, setIsDone] = useState(false);

  function completeHandler() {
    setIsDone(!isDone);
  }

  // function deleteHandler(id) {
  //   fetch("https://reacttodos-e9167-default-rtdb.firebaseio.com/todos/" + id, {
  //     method: "DELETE",
  //     headers: {
  //       Authorization: "Basic " + btoa("<secretName>:<secretPass>"),
  //       Accept: "application/json",
  //       "Content-Type": "application/json",
  //     },
  //   });
  // }

  return (
    <li>
      <Card>
        <div>
          <h2>{props.title}</h2>
          <p>{props.description}</p>
          <h4>Finish date: {props.date}</h4>
          <h5 className={isDone ? classes.finished : classes.unfinished}>
            Status: {isDone ? "Completed" : "not Completed"}
          </h5>
          <div className={classes.btns}>
            <button className={classes.done} onClick={completeHandler}>
              {isDone ? "Undo" : "Done"}
            </button>
            {/* <button
              className={classes.delete}
              // onClick={() => deleteHandler(props.id)}
            >
              Delete
            </button> */}
          </div>
        </div>
      </Card>
    </li>
  );
}

export default TodoItem;
