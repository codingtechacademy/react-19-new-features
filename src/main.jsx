import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import "./index.css";
import Actions from "./routes/Actions";
import ReactCompiler from "./routes/ReactCompiler";
import MetaData from "./routes/MetaData";
import ForwardRefDemo from "./routes/ForwardRefDemo";
import UseHook from "./routes/UseHook";
import UseFormStatus from "./routes/UseFormStatus";
import UseFormState from "./routes/UseFormState";
import UseOptimistic from "./routes/UseOptimistic";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/react-compiler",
    element: <ReactCompiler category="Travail" />,
  },
  {
    path: "/actions",
    element: <Actions />,
  },
  {
    path: "/meta-data",
    element: <MetaData />,
  },
  {
    path: "forward-ref-demo",
    element: <ForwardRefDemo />,
  },
  {
    path: "use-hook",
    element: <UseHook />,
  },
  {
    path: "use-form-status",
    element: <UseFormStatus />,
  },
  {
    path: "use-form-state",
    element: <UseFormState />,
  },
  {
    path: "use-optimistic",
    element: <UseOptimistic />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
