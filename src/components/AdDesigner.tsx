import { useState } from "react";
import Ad from "./Ad";
import "./AdDesigner.css";

const AdDesigner = () => {
  const [flavor, setFlavor] = useState<string>("Chocolate");
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const [fontSize, setFontSize] = useState<number>(48);
  return (
    <div className="AdDesigner">
      <h2>Ad Designer</h2>
      <Ad flavor={flavor} fontSize={fontSize} darkMode={darkMode} />
      <h3>What to Support</h3>
      <div>
        <button
          onClick={() => {
            setFlavor("Chocolate");
          }}
          disabled={flavor === "Chocolate"}
        >
          Chocolate
        </button>
        <button
          onClick={() => {
            setFlavor("Vanilla");
          }}
          disabled={flavor === "Vanilla"}
        >
          Vanilla
        </button>
        <button
          onClick={() => {
            setFlavor("Strawberry");
          }}
          disabled={flavor === "Strawberry"}
        >
          Strawberry
        </button>
      </div>
      <h3>Color Theme</h3>
      <div>
        <button
          onClick={() => {
            setDarkMode(false);
          }}
          disabled={darkMode === false}
        >
          Light
        </button>
        <button
          onClick={() => {
            setDarkMode(true);
          }}
          disabled={darkMode === true}
        >
          Dark
        </button>
      </div>
      <div>
        <h3>Font Size</h3>
        <div className="fontSizer">
          <button
            onClick={() => {
              setFontSize((prevState) => prevState - 1);
            }}
          >
            Down
          </button>
          <p>{fontSize}</p>
          <button
            onClick={() => {
              setFontSize((prevState) => prevState + 1);
            }}
          >
            Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdDesigner;
