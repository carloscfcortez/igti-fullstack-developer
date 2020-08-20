import React, { Fragment } from "react";
import { Navbar, Icon, NavItem, Button } from "react-materialize";
import SideNavComponent from "./SideNavComponent";
export default function NavHeaderComponent() {
  return (
    <Fragment>
      <Navbar
        alignLinks="right"
        className="blue accent-3"
        brand={
          <SideNavComponent
            toogle={
              <a style={{ cursor: "pointer" }} href node="button">
                <Icon>menu</Icon>
              </a>
            }
          />
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
      </Navbar>
    </Fragment>
  );
}
