import React, { useCallback, useState } from "react";
import Child from "./Child";
function UseCallback() {
  const [add, setAdd] = useState(0);
  const [count, setCount] = useState(0);
  const Learning = useCallback(() => {
    //....
  }, [count]);
  return (
    <>
      <h1>{add}</h1>
      <Child Learning={Learning} count={count} />
      <button
        onClick={() => {
          setAdd(add + 1);
        }}
      >
        add
      </button>
      <br />
      {count}
      <br />
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        count
      </button>
    </>
  );
}

export default UseCallback;
