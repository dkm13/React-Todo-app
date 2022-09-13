import { useRef } from "react";
import classes from "./NewTodoForm.module.css";
import Card from "../ui/Card";

function NewTodoForm(props) {
  const titleInputRef = useRef();
  const descriptionInputRef = useRef();
  const dateInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    const enteredTitle = titleInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;
    const enteredDate = dateInputRef.current.value;

    const todoData = {
      title: enteredTitle,
      description: enteredDescription,
      date: enteredDate,
    };

    props.onAddTodo(todoData);
  }

  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="title">Todo Title</label>
          <input type="text" required id="title" ref={titleInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            required
            rows="5"
            ref={descriptionInputRef}
          ></textarea>
        </div>
        <div className={classes.control}>
          <label htmlFor="date">To be finished at:</label>
          <input type="date" required id="date" ref={dateInputRef} />
        </div>
        <div className={classes.actions}>
          <button>Add Todo</button>
        </div>
      </form>
    </Card>
  );
}

export default NewTodoForm;
