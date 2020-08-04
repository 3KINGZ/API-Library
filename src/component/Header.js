import React from "react";
import "./Header.css";
import Input from "./Input";

function Header() {
  return (
    <div className="header-container">
      <h1 id="top">API-Library</h1>
      <div className="content">
        <h2>Browse APIs</h2>
        <p>
          Looking for ideas for your next project browse through the api list
          for inspiration
        </p>
        <Input />
      </div>
    </div>
  );
}

export default Header;
