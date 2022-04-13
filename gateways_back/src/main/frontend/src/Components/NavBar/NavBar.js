import React from "react";
import { Nav } from "./NavBarComponents/Nav";
import { NavContainer } from "./NavBarComponents/NavContainer";
import gateway from "../../Pictures/GateWay.svg";
import { NavBrand } from "./NavBarComponents/NavBrand";
import { NavLogo } from "./NavBarComponents/NavLogo";
import { NavLogoContainer } from "./NavBarComponents/NavLogoContainer";
import { NavButton } from "./NavBarComponents/NavButton";
import { NavButtonsContainer } from "./NavBarComponents/NavButtonsContainer";

const NavBar = (props) => {
  return (
    <>
      <Nav>
        <NavContainer>
          <NavLogoContainer to="/">
            <NavBrand src={gateway} alt="GC-Banner"/>
            <NavLogo>Gateways Controll</NavLogo>
          </NavLogoContainer>
          <NavButtonsContainer>
            <NavButton onClick={props.OnAboutClick}>About</NavButton>
            <NavButton onClick={() => {
              props.OnAddGatewayClick();
              }}>New Gateway</NavButton>
          </NavButtonsContainer>
        </NavContainer>
      </Nav>
    </>
  );
};

export default NavBar;
