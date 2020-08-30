import React, { useEffect, useState } from "react";

export default function Odometer({ value }) {
  const [counter, setCounter] = useState(0);
  useEffect(() => {
    let id = null;
    if (counter < value) {
      id = setTimeout(() => setCounter(counter + 1), 15);
    }
    return () => {
      clearTimeout(id);
    };
  }, [counter, value]);
  return <div>{counter}</div>;
}
