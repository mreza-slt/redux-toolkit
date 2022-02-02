import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const { todos } = useSelector((state) => state.todos);

  return (
    <>
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
