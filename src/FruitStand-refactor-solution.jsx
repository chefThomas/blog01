// reformatted FruitStand.jsx
import React from "react";
import useIncrement from "./useIncrement-solution";
const FruitStand = () => {
  const [apples, setApples] = useIncrement(0);
  const [oranges, setOranges] = useIncrement(0);

  return (
    <div className="Fresh Produce">
      <h1>Fruit Stand</h1>
      <div className="apples">
        <button style={{ ...button.top, ...button }} onClick={setApples}>
          +
        </button>
        {apples} 🍎
      </div>
      <div className="oranges">
        <button style={button} onClick={setOranges}>
          +
        </button>
        {oranges} 🍊
      </div>
    </div>
  );
};

const button = {
  marginRight: "10px",
  top: {
    marginBottom: "20px",
  },
};

export default FruitStand;
