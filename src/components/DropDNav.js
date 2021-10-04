import React from "react";
import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const DropButton = ({onClick}) => {
  
  const Button = styled.button`
  position: fixed;
  top: 5.325rem;
  left: 0.25rem;
    display: flex;
    align-self: flex-start;
    width: 2.5rem;
    height: auto;
    border: none;
    outline: none;
    background: none;
    margin-left: 1.5rem;
    cursor: pointer;
    z-index: 5;
  `;

  const MenueIcon = styled.img`
    width: 2rem;
    height: auto;
  `;

return( 
  <Button onClick={onClick}>
    <MenueIcon src="images/menu.png" />
  </Button>)
}

export const DropDNav = ({menueIsVisible, style, onNavLinkClick}) => {
  const TopNav = styled.nav`
    position: fixed;
    top: 5.625rem;
    left: 1.5rem;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    width: fit-content;
    padding: 0.5rem;
    margin: 0.625rem;
    background-color: ${(props) => props.theme.primary};
    color: ${(props) => props.theme.secondary};
    border-radius: 0.75rem;
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
    left: 0;
    color: ${(props) => props.theme.secondary};
      :hover{
        color: ${(props) => props.theme.tertiary};
      }
  `

const Icon = styled.img`
    width: 1.5rem;
    height: 1.5rem;
    margin-right: 0.5rem;
  `;

  const NavItem = styled.div`
  display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    padding: 0.25rem 0;
  `;

  return (
    <TopNav menueIsVisible={menueIsVisible} style={style}>
          <StyledNavLink to="/" onClick={onNavLinkClick}>
            <NavItem>
              <Icon src="/images/globe.png"/>
              Earth
            </NavItem>
          </StyledNavLink>
          <StyledNavLink to="/image-search" onClick={onNavLinkClick}>
            <NavItem>
              <Icon src="/images/telescope.png" />
              Space
            </NavItem>
          </StyledNavLink>
          <StyledNavLink to="/about" onClick={onNavLinkClick}>
            <NavItem>
              <Icon src="/images/alien.png" />
              About
            </NavItem>
          </StyledNavLink>
    </TopNav>
  );
}
