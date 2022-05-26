import React, { useEffect, useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setCounter((prevCount) => prevCount + 1);
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <h3> Simple server rendered counter App</h3>
      <h2>{counter}</h2>
    </div>
  );
}

export default App;
