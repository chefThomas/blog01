import React, { useState } from "react";

const FruitStand = () => {
  const [apples, setApples] = useState(0);
  const [oranges, setOranges] = useState(0);

  function incrementApples() {
    setApples(apples + 1);
  }

  function incrementOranges() {
    setOranges(oranges + 1);
  }

  return (
    <div className="Fresh Produce">
      <h1>Fruit Stand</h1>
      <div className="apples">
        <button style={{ ...button, ...button.top }} onClick={incrementApples}>
          +
        </button>
        {apples} 🍎
      </div>
      <div className="oranges">
        <button style={button} onClick={incrementOranges}>
          +
        </button>
        {oranges} 🍊
      </div>
    </div>
  );
};

// Appease OCD, but just barely
const button = {
  marginRight: "10px",
  top: {
    marginBottom: "10px",
  },
};

export default FruitStand;
