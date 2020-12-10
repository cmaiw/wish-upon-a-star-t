import React from "react";
import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const DropButton = ({onClick}) => {
  
  const Button = styled.button`
  position: fixed;
  top: 85px;
  left: 5px;
    display: flex;
    align-self: flex-start;
    width: 40px;
    height: auto;
    border: none;
    outline: none;
    background: none;
    margin-left: 24px;
    cursor: pointer;
    z-index: 5;
  `;

  const MenueIcon = styled.img`
    width: 30px;
    height: auto;
  `;

return( 
  <Button onClick={onClick}>
    <MenueIcon src="images/menu.png" />
  </Button>)
}

export const DropDNav = ({menueIsVisible, style}) => {
  const TopNav = styled.nav`
    position: fixed;
    top: 90px;
    left: 25px;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    width: 135px;
    padding: 15px 30px 8px 80px;
    margin: 10px 10px auto auto;
    background-color: ${(props) => props.theme.primary};
    color: ${(props) => props.theme.secondary};
    border-radius: 12px;
    border: 2px solid ${(props) => props.theme.quinary};
    z-index: 10;
  `;

  const StyledNavLink = styled(NavLink)`
    display: flex;
    flex-direction: row;
    text-decoration: none;
    position: relative;
    width: 100%;
    top: 0;
    left: -75px;
    color: ${(props) => props.theme.secondary};
      :hover{
        color: ${(props) => props.theme.tertiary};
      }
  `

const Icon = styled.img`
    width: 24px;
    height: 24px;
    margin: 0px 20px 0px 10px;
  `;

  const NavItem = styled.div`
  display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    margin-bottom: 10px;
  `;

  return (
    <TopNav menueIsVisible={menueIsVisible} style={style}>
          <StyledNavLink to="/">
            <NavItem>
              <Icon src="/images/globe.png" />
              Earth
            </NavItem>
          </StyledNavLink>
          <StyledNavLink to="/image-search">
            <NavItem>
              <Icon src="/images/telescope.png" />
              Space
            </NavItem>
          </StyledNavLink>
          <StyledNavLink to="/about">
            <NavItem>
              <Icon src="/images/alien.png" />
              About
            </NavItem>
          </StyledNavLink>
    </TopNav>
  );
}
