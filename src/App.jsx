import { useState } from "react";
import "./App.css";
import Display from "./Display/Display";
import Buttons from "./Keyboard/Keyboard";
function App() {
  const [textInput, setTextInput] = useState("");
  const handleClick = (value) => {
    if (textInput != "Ошибка") setTextInput((prev) => prev + value);
    else setTextInput(value);
  };

  return (
    <>
      <Display value={textInput} />
      <Buttons
        onClick={handleClick}
        onClear={() => {
          setTextInput("");
        }}
        onEqual={() => {
          try {
            setTextInput(eval(textInput).toString());
          } catch (error) {
            setTextInput("Ошибка");
          }
        }}
      />
    </>
  );
}

export default App;
