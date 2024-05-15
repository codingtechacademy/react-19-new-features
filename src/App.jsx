import "./App.css";
import reactLogo from "./assets/react.svg";

function App() {
  return (
    <>
      <div>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>React 19 nouveautés</h1>
      <div className="card">
        <a href="/react-compiler">React compiler</a>
        <a href="/actions">React actions</a>
        <a href="/meta-data">React meta-data</a>
        <a href="/forward-ref-demo">React forwardref demo</a>
        <a href="/use-hook">React use hook</a>
        <a href="/use-form-status">React useFormStatus hook</a>
        <a href="/use-form-state">React useFormState hook</a>
        <a href="/use-optimistic">React useOptimistic hook</a>
      </div>
    </>
  );
}

export default App;
