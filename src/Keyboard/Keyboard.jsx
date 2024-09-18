// Buttons.js
import React from "react";
import "../Keyboard/Keyboard.css";

export default function Buttons({ onClick, onClear, onEqual }) {
  return (
    <section className="buttons">
      <button onClick={() => onClick("1")}>1</button>
      <button onClick={() => onClick("2")}>2</button>
      <button onClick={() => onClick("3")}>3</button>
      <button onClick={() => onClick("+")}>+</button>
      <button onClick={() => onClick("4")}>4</button>
      <button onClick={() => onClick("5")}>5</button>
      <button onClick={() => onClick("6")}>6</button>
      <button onClick={() => onClick("-")}>-</button>
      <button onClick={() => onClick("7")}>7</button>
      <button onClick={() => onClick("8")}>8</button>
      <button onClick={() => onClick("9")}>9</button>
      <button onClick={() => onClick("*")}>*</button>
      <button onClick={() => onClick("0")}>0</button>
      <button onClick={() => onClick("/")}>/</button>
      <button onClick={onEqual}>=</button>
      <button onClick={onClear}>C</button>
    </section>
  );
}
