import "./App.css";
import { Provider } from "react-redux";
import { store } from "./components/features/store";
import "bootstrap/dist/css/bootstrap.min.css";
import AddTodoForm from "./components/todos/AddTodoForm";
import TodoList from "./components/todos/TodoList";
import TotalCompleteItems from "./components/todos/TotalComplete";

function App() {
  return (
    <Provider store={store}>
      <div className="App container">
        {/* <Counter/> */}
        <AddTodoForm />
        <TodoList />
        <TotalCompleteItems />
      </div>
    </Provider>
  );
}

export default App;
