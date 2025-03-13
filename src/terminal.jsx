import React from "react";
import "./App.css";

const Terminal = ({ children }) => {
  return (
    <div className="terminal">
      <div className="terminal-header">
        <div className="button red"></div>
        <div className="button yellow"></div>
        <div className="button green"></div>
      </div>
      <div className="terminal-body">
        {children}
        
      </div>
    </div>
  );
};

export default Terminal;