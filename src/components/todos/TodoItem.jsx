import { useDispatch } from "react-redux";
import {
  removeAsyncTodos,
  toggleCompleteAsync,
} from "../features/todos/TodosSlice";

const TodoItem = ({ id, title, completed }) => {
  const dispatch = useDispatch();
  return (
    <li className={`list-group-item ${completed && "list-group-item-success"}`}>
      <div className="d-flex justify-content-between align-items-center">
        <span className="d-flex align-items-center">
          <input
            type="checkbox"
            className="mr-3"
            id={id}
            checked={completed}
            onChange={(e) =>
              dispatch(
                toggleCompleteAsync({
                  id: id,
                  completed: !completed,
                  title: title,
                })
              )
            }
          ></input>
          <label htmlFor={id}>{title}</label>
        </span>
        <button
          onClick={() => dispatch(removeAsyncTodos({ id }))}
          className="btn btn-danger "
        >
          Delete
        </button>
      </div>
    </li>
  );
};

export default TodoItem;
