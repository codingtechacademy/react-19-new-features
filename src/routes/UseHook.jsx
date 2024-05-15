import { Suspense, use } from "react";
import { dummyTodoList } from "../config/todos";

async function fetchTodos() {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return dummyTodoList;
}

const TodoList = () => {
  const todoList = use(fetchTodos());

  return (
    <ul>
      {todoList.map((todo) => (
        <li key={todo.label}>{todo.label}</li>
      ))}
    </ul>
  );
};

const UseHook = () => {
  return (
    <>
      <h1>Use hook demo</h1>
      <Suspense fallback={<div>Chargement des todos...</div>}>
        <TodoList />
      </Suspense>
    </>
  );
};

export default UseHook;
