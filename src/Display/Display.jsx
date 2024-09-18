import "../Display/Display.css";
export default function Display({ value }) {
  return (
    <div className="display">
      {value || "0"} {/* Выводим значение или "0", если поле пустое */}
    </div>
  );
}
