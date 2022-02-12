import React from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SidebtnWrap,
  SidebarRoute,
} from "./SidebarElements";

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon></CloseIcon>
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="about" onClick={toggle}>
            About
          </SidebarLink>
          <SidebarLink to="Discover" onClick={toggle}>
            Discover
          </SidebarLink>
          <SidebarLink to="Services" onClick={toggle}>
            Services
          </SidebarLink>
          <SidebarLink to="SignUp" onClick={toggle}>
            Sign Up
          </SidebarLink>
        </SidebarMenu>
        <SidebtnWrap>
          <SidebarRoute to="/SignIn">Sign In</SidebarRoute>
        </SidebtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
