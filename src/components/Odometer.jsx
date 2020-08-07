import React, { useEffect, useState } from "react";

export default function Odometer({ value }) {
  const [counter, setCounter] = useState(0);
  useEffect(() => {
    if (counter < value) setTimeout(() => setCounter(counter + 1), 15);
  }, [counter, value]);
  return <div>{counter}</div>;
}
