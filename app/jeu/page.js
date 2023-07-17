"use client";

import { useState } from "react";

const jeu = () => {
  const [number, setNumber] = useState(0);

  const increment = () => {
    setNumber(number + 1);
  };

  const decrement = () => {
    setNumber(number - 1);
  };

  return (
    <>
      <div>{number}</div>
      <button onClick={() => increment()}>+</button>
      <button onClick={() => decrement()}>-</button>
    </>
  );
};

export default jeu;
