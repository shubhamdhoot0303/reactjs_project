import React, { memo } from "react";

function Child(Learning, count) {
  console.log("child function call");
  return <div></div>;
}

export default memo(Child);
