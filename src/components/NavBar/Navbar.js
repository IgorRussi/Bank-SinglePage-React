import React from "react";
import { FaBars } from "react-icons/fa";

import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink,
} from "./NavbarElement";

export default function Navbar(toggle) {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">MyBank</NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars></FaBars>
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to="about">About</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="about">discover</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="about">services</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="about">Sign up</NavLinks>
            </NavItem>
          </NavMenu>
          <NavBtn>
            <NavBtnLink to="/signin">Sign In</NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  );
}
