import React, { useState, useMemo } from "react";

function Usememo() {
  const [add, setAdd] = useState(0);
  const [sub, setSub] = useState(100);
  const multiple = () => {
    console.log("multiply function");
    return add * 10;
  };
  const multi = useMemo(multiple, [add]);

  return (
    <>
      <p>{multi}</p>

      <button
        onClick={() => {
          setAdd(add + 1);
        }}
      >
        add
      </button>

      <button
        onClick={() => {
          setSub(sub - 1);
        }}
      >
        sub
      </button>
    </>
  );
}

export default Usememo;
