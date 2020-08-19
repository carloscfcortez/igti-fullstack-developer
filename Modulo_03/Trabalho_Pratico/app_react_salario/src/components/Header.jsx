import React from "react";

function HeaderComponent() {
  return (
    <nav>
      <div className="nav-wrapper blue accent-3">
        <ul id="nav-mobile" className="left hide-on-med-and-down">
          <li>
            <a href>
              <i className="material-icons left">smartphone</i>Calculadora de
              Salário
            </a>
          </li>
        </ul>
        {/* <a href className="brand-logo">
          Calculadora Salário
        </a> */}
        {/* <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <a href="sass.html">Sass</a>
          </li>
          <li>
            <a href="badges.html">Components</a>
          </li>
          <li>
            <a href="collapsible.html">JavaScript</a>
          </li>
        </ul> */}
      </div>
    </nav>
  );
}

export default HeaderComponent;
