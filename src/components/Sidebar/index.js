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

const Sidebar = () => {
  return (
    <SidebarContainer>
      <Icon>
        <CloseIcon></CloseIcon>
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="about">About</SidebarLink>
          <SidebarLink to="Discover">Discover</SidebarLink>
          <SidebarLink to="Services">Services</SidebarLink>
          <SidebarLink to="SignUp">Sign Up</SidebarLink>
        </SidebarMenu>
        <SidebtnWrap>
          <SidebarRoute to="/SignIn">Sign In</SidebarRoute>
        </SidebtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
