import React from "react";

const Nav: React.FC = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>TAGU</li>
          <li className="float-right sticky">Sticky Right</li>
          <li>
            <a href="#">Item </a>
          </li>
          <li>
            <a href="#">Menu ▾</a>
            <ul>
              <li>
                <a href="#">Menu 1</a>
              </li>
              <li>
                <a href="#">Menu 2</a>
              </li>
            </ul>
          </li>
          <li className="float-right">Collapse</li>
        </ul>
      </nav>
    </header>
  );
};

export default Nav;
