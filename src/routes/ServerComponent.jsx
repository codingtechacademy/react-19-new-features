"use server";

import { dummyTodoList } from "../config/todos";

async function fetchTodos() {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return dummyTodoList;
}

const ServerComponent = async () => {
  const todoList = await fetchTodos();

  return (
    <>
      <h1>Server Component</h1>
      <ul>
        {todoList.map((todo) => (
          <li key={todo.label}>{todo.label}</li>
        ))}
      </ul>
    </>
  );
};

export default ServerComponent;
