import React, { useState } from "react";

const MyComp = () => {
  const [number, setNumber] = useState(0);
  return (
    <>
      <button onClick={() => setNumber(number + 1)}>Increase</button>
      <div>{number}</div>
    </>
  );
};

export default MyComp;
