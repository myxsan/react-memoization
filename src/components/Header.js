import React from "react";

function Header({ number, data }) {
  console.log("Header re-rendered");
  return (
    <div>
      <h1>Header - {number}</h1>
      <code>{JSON.stringify(data)}</code>
    </div>
  );
}

export default React.memo(Header);
