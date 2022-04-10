import React from "react";
import { Nav } from "./NavBarComponents/Nav";
import { NavContainer } from "./NavBarComponents/NavContainer";
import gateway from "../../Pictures/GateWay.svg";
import { NavBrand } from "./NavBarComponents/NavBrand";
import { NavLogo } from "./NavBarComponents/NavLogo";
import { NavLogoContainer } from "./NavBarComponents/NavLogoContainer";

const NavBar = () => {
  return (
    <>
      <Nav>
        <NavContainer>
          <NavLogoContainer to="/">
            <NavBrand src={gateway} />
            <NavLogo>Gateways Controll</NavLogo>
          </NavLogoContainer>
        </NavContainer>
      </Nav>
    </>
  );
};

export default NavBar;
