import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAsyncTodos } from "../features/todos/TodosSlice";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const { todos, loading, error } = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAsyncTodos());
  }, []);

  return (
    <>
      {loading && <p>loading...</p>}
      {error && <p>{error}</p>}
      {todos ? (
        <ul className="list-group">
          {todos.map((todo) => (
            <TodoItem
              key={todo.id}
              id={todo.id}
              title={todo.title}
              completed={todo.completed}
            />
          ))}
        </ul>
      ) : (
        <h1 className="text-align-center">Please Add Todo</h1>
      )}
    </>
  );
};

export default TodoList;
