import "./App.css";
import AddTodo from "./components/AddTodo";
import Todo from "./components/Todo";

function App() {
  return (
    <>
      <div>
        <h1 className="text-3xl font-bold underline text-white">
          Todo with Redux
        </h1>
        <AddTodo />
        <Todo />
      </div>
    </>
  );
}

export default App;
