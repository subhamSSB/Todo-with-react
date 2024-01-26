import { useEffect, useState } from "react";
import "./App.css";
import { TodoContextProvider } from "./contexts/todoContext";
import TodoForm from "./components/TodoForm";
import TodoItem from "./components/TodoItem";

function App() {
  const [todos, setTodos] = useState([]);

 

  useEffect(() => {
    // JSON.stringify(localStorage.setItem("todos", JSON.stringify(todos)));

    const todolist = JSON.parse(localStorage.getItem("todos"));
    console.log(todolist)
  
    if (todolist && todolist.length > 0) {
      setTodos(todolist);
    }
  }, []);
  useEffect(() => {
    JSON.stringify(localStorage.setItem("todos", JSON.stringify(todos)));
  }, [todos]);


  const addTodos = (todo) => {
    console.log(todos);
    setTodos((prevTodo) => [...prevTodo , { id: Date.now(), ...todo }]);
  };

  const upDateTodos = (id, todo) => {
    setTodos((prevTodo) =>
      prevTodo.map((eachTodo) => (eachTodo.id === id ? todo : eachTodo))
    );
  };

  const deleteTodo = (id) => {
    setTodos((prevTodo) => prevTodo.filter((prevTodo) => prevTodo.id !== id));
  };

  const toggleTodo = (id) => {
    setTodos((prevTodo) =>
      prevTodo.map((eachTodo) =>
        eachTodo.id === id
          ? { ...eachTodo, completed: !eachTodo.completed }
          : eachTodo
      )
    );
  };
  return (
    <TodoContextProvider
      value={{ todos, addTodos,setTodos, upDateTodos, deleteTodo, toggleTodo }}
    >
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            Manage Your Todos
          </h1>
          <div className="mb-4">
            {/* Todo form goes here */ console.log(todos)}
            <TodoForm />
          </div>
          <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
            {todos.map((todos) => {
              return (
                <div className=" w-full" key={todos.id}>
                  <TodoItem  todo={todos} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </TodoContextProvider>
  );
}

export default App;
