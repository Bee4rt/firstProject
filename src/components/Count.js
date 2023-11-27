import React, { useState } from "react";

function Count() {
  const [count, setCount] = useState(0);

  function handelAdd() {
    setCount(count + 1);
  }
  function handelSub() {
    setCount(count - 1);
  }
  function handelRes() {
    setCount(0);
  }
  return (
    <div className="box">
      <h1 className="countTitle">Count</h1>
      <p className="num">{count}</p>
      <button className="add" onClick={handelAdd}>
        ADD
      </button>
      <button className="sub" onClick={handelSub}>
        SUB
      </button>
      <button className="res" onClick={handelRes}>
        Reset
      </button>
    </div>
  );
}

export default Count;
