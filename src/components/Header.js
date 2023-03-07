import React from "react";

function Header({ increment }) {
  console.log("Header re-rendered");
  return (
    <div>
      <h1>Header</h1>
      <br />
      <button onClick={() => increment()}>Click</button>
    </div>
  );
}

export default React.memo(Header);
