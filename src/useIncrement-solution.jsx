// useIncrement.jsx
import { useState } from "react";

function useIncrement(initialValue) {
  const [state, setState] = useState(initialValue);

  function increment() {
    setState(state + 1);
  }
  return [state, increment];
}

export default useIncrement;
