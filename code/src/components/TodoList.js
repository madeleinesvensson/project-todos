import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { todos } from "../reducers/todos";
import { CheckAllButton, DeleteButton } from "./Buttons";

export const TodoList = () => {
  const items = useSelector((store) => store.todos.items);
  const dispatch = useDispatch();
  const onToggleTodo = (id) => {
    dispatch(todos.actions.toggleTodo(id));
  };
  const onDeleteTodo = (id) => {
    dispatch(todos.actions.deleteTodo(id));
  };

  const onClickClearAll = () => {
    dispatch(todos.actions.clearAllTasks());
  };
  const onDeleteAll = () => {
    dispatch(todos.actions.deleteAll());
  };

  return (
    <>
      <section className={items.length <= 0 ? "clear-board" : "todo-wrapper"}>
        {items.length > 0 && <h3>To do</h3>}
        <div className="scroll">
          {items
            .filter((item) => item.isComplete === false)
            .map((item) => (
              <div key={item.id} className="small-task-wrapper">
                <div className="check-text">
                  <div>
                    <input
                      className="checkbox"
                      type="checkbox"
                      checked={item.isComplete}
                      onChange={() => onToggleTodo(item.id)}
                    />
                  </div>
                  <div className="task-wrapper">
                    <p className="task-date">{item.timePosted}</p>
                    <p
                      className={item.isComplete ? "task-completed" : "task-p"}
                    >
                      {item.text}
                    </p>
                  </div>
                </div>
                <DeleteButton onClick={() => onDeleteTodo(item.id)}>
                  Delete
                </DeleteButton>
              </div>
            ))}
        </div>
        {items.length >= 1 && (
          <div className="button-aligment">
            <CheckAllButton onClick={onClickClearAll}>Check all</CheckAllButton>
            <CheckAllButton onClick={onDeleteAll}>Delete all</CheckAllButton>
          </div>
        )}
      </section>
    </>
  );
};
