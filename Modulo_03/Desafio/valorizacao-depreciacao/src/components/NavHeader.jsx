import React from "react";
import { Navbar, Icon, NavItem } from "react-materialize";
export default function NavHeader() {
  return (
    <Navbar
      alignLinks="right"
      className="blue accent-3"
      brand={
        <div style={{ paddingLeft: 10 }}>
          <Icon>account_balance</Icon>
          <span>React - Juros Compostos</span>
        </div>
      }
      id="mobile-nav"
      menuIcon={<Icon>menu</Icon>}
      options={{
        draggable: true,
        edge: "left",
        inDuration: 250,
        onCloseEnd: null,
        onCloseStart: null,
        onOpenEnd: null,
        onOpenStart: null,
        outDuration: 200,
        preventScrolling: true,
      }}
    >
      <NavItem href="https://github.com/carloscfcortez">Github</NavItem>
      {/* <NavItem href="components.html">Components</NavItem> */}
    </Navbar>
  );
}
