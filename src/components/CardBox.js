import React, { useState } from "react";

function CardBox({ result, children }) {
  const [show, setShow] = useState("true");
  return (
    <div className={show ? "" : "hidden"}>
      <div className={`box ${result}`}>{children}</div>
      <button onClick={() => setShow(!show)} className="trigger">
        Close
      </button>
    </div>
  );
}

export default CardBox;
