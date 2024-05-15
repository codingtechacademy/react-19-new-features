import { dummyTodoList } from "../config/todos";

// eslint-disable-next-line react/prop-types
const ReactCompiler = ({ category }) => {
  const filteredTodoList = dummyTodoList.filter(
    (todo) => todo.category === category
  );

  return (
    <>
      <h1>React compiler</h1>
      <ul>
        {filteredTodoList.map((todo) => (
          <li key={todo.label}>{todo.label}</li>
        ))}
      </ul>
    </>
  );
};

export default ReactCompiler;
