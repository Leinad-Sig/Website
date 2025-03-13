// Menu.jsx
import React, { useState } from "react";
import About from "./AboutMe";
import Contacts from "./Contacts";

const Menu = () => {
  const [terminalContent, setTerminalContent] = useState(
    ""
  );

  const handleOptionClick = (option) => {
    switch (option) {
      case "about":
        setTerminalContent(
          <About/>
        );
        break;
      case "projects":
        setTerminalContent(
          "user@portfolio:~$ ls projects\n\nProject A\nProject B\nProject C"
        );
        break;
      case "cv":
        setTerminalContent(
          "user@portfolio:~$ cat cv.txt\n\nYou can view my CV at: https://yourcvlink.com"
        );
        break;
      case "contacts":
        setTerminalContent(
          <Contacts/>
        );
        break;
      default:
        setTerminalContent("Daniel@phomepage:~$ Welcome!");
    }
  };

  return (
    <div style={{ textAlign: "left", color: "#FFFF00", fontFamily: "Source Code Pro, monospace" }}>
        <h2>Welcome!</h2>
        <hr style={{ border: "none", borderTop: "1px solid #444", margin: "20px 0" }} />
      <ul style={{ listStyleType: "none", padding: 0, marginBottom: "20px", fontSize: 20 }}>
        <li style={{ cursor: "pointer", marginBottom: "10px" }} onClick={() => handleOptionClick("about")}>
          About me
        </li>
        <li style={{ cursor: "pointer", marginBottom: "10px" }} onClick={() => handleOptionClick("projects")}>
          Projects
        </li>
        <li style={{ cursor: "pointer", marginBottom: "10px" }} onClick={() => handleOptionClick("cv")}>
          Experience
        </li>
        <li style={{ cursor: "pointer" }} onClick={() => handleOptionClick("contacts")}>
          How to contact me
        </li>
      </ul>
      <hr style={{ border: "none", borderTop: "1px solid #444", margin: "20px 0" }} />
      <div style={{ whiteSpace: "pre-wrap" }}>
        {terminalContent}
      </div>
    </div>
  );
};

export default Menu;
