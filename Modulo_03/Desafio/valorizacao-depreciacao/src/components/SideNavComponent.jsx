import React from "react";
import { SideNav, SideNavItem, Icon } from "react-materialize";
export default function SideNavComponent(props) {
  return (
    <div>
      <style>
        {`
            #root > div > div {
              z-index: 99999 !important;
            }
          `}
      </style>
      <SideNav
        id="slide-out"
        options={{
          draggable: true,
        }}
        trigger={props.toogle}
      >
        <SideNavItem
          user={{
            background: "https://placeimg.com/640/480/tech",
            email: "carlos.cfcortez@gmail.com",
            // image: "static/media/react-materialize-logo.824c6ea3.svg",
            name: "Carlos Cortez",
          }}
          userView
        />
        <SideNavItem href="/" icon={<Icon>home</Icon>}>
          Home
        </SideNavItem>
        <SideNavItem subheader>Modulo 3</SideNavItem>
        <SideNavItem divider={true}></SideNavItem>

        <SideNavItem href="/desafio" icon={<Icon>calculate</Icon>}>
          Desafio
        </SideNavItem>
        {/* <SideNavItem href="#!second">Second Link</SideNavItem>
        <SideNavItem divider />

        <SideNavItem href="#!third" waves>
          Third Link With Waves
        </SideNavItem> */}
      </SideNav>
    </div>
  );
}
