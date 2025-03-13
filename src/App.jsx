// App.jsx
import React from "react";
import Star from "./Stars";
import Terminal from "./terminal";
import Menu from "./Menu";


function App() {
  return (
    <div >
      {/* Background component */}
      <Star />
      
      {/* Centered Terminal */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: 10, 
        }}
      >
        <Terminal>
         <Menu />

        </Terminal>
      </div>
    </div>
  );
}

export default App;