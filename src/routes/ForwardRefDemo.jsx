import { useRef, useState } from "react";

// eslint-disable-next-line react/prop-types
const Input = ({ ref }) => {
  return (
    <div className="form-control">
      <label>Nom</label>
      <input type="text" ref={ref} />
    </div>
  );
};

const ForwardRefDemo = () => {
  const [value, setValue] = useState("");
  const ref = useRef(null);

  function displayValueHandler() {
    setValue(ref?.current?.value ?? "");
  }

  return (
    <>
      <Input ref={ref} />
      <p>{value}</p>
      <button onClick={displayValueHandler}>Afficher la valeur</button>
    </>
  );
};

export default ForwardRefDemo;
