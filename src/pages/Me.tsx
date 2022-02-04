import React, { useState } from "react";

export interface MyProps {}

const Me = (props: MyProps): JSX.Element => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>counter at: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Add</button>
    </div>
  );
};

export default Me;
