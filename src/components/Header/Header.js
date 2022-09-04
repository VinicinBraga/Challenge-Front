import React from "react";
import "./style.css";

function Header(props) {
  return (
    <div className="header-main">
      <div>
        <input
          className="header-input"
          type="text"
          placeholder="Buscar por algum produto..."
          onChange={(e) => props.setSearchTerm(e.target.value)}
        ></input>
      </div>
    </div>
  );
}

export default Header;
