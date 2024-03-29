import React from "react";
import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

  const Button = styled.button`
  position: fixed;
  top: 5.25rem;
  left: -2.25rem;
    display: flex;
    align-self: flex-start;
    width: 2.5rem;
    height: auto;
    border: none;
    outline: none;
    background: none;
    margin-left: 3rem;
    cursor: pointer;
    z-index: 5;
    padding: 0;

    &:focus {
      border-bottom: 2px dotted ${(props) => props.theme.quartenary};
    }

    @media only screen and (min-width: 540px){
      left: -1.5rem;
      width: 2.5rem;
    }

    @media only screen and (min-width: 768px){
      top: 7.25rem;
      left: -0.75rem;
      width: 2.5rem;
    }

    @media only screen and (min-width: 1024px){
      left: -0.5rem;
    }
  `;

  const MenueIcon = styled.img`
    margin-top: 0.25rem;
    width: 2rem;
    height: auto;

    @media only screen and (min-width: 768px){
      width: 3rem;
    }
  `;
export const DropButton = ({onClick, id}:{onClick: () => void, id?: string}) => {
  

return( 
  <Button onClick={onClick} id={id} aria-label='drop-down-navigation-open-close'>
    <MenueIcon src="/images/menux.png" alt='navigation-logo-planet'/>
  </Button>)
}


  const TopNav = styled.nav<{
    menueIsVisible: boolean
    }>`
    position: fixed;
    top: 6.5rem;
    left: 0;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    width: fit-content;
    padding: 1rem;
    margin: 0.625rem;
    background-color: ${(props) => props.theme.primary};
    color: ${(props) => props.theme.secondary};
    border-radius: 0.75rem;
    z-index: 10;
    display: ${props => props.menueIsVisible ? 'block' : 'none'};

    @media only screen and (min-width: 33.75rem){
      top: 6.5rem;
      left: 0.325rem;
    }

    @media only screen and (min-width: 48rem){
      top: 9.25rem;
      left: 1.5rem;
    }
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

    &:hover {
        color: ${(props) => props.theme.tertiary};
      }

    &:focus {
    border-bottom: 2px dotted ${(props) => props.theme.secondary};
    outline: none;
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
    padding: 0.5rem 0;
  `;

export const DropDNav = ({id, onNavLinkClick, menueIsVisible}:{id?: string, onNavLinkClick: () => void, menueIsVisible: boolean}) => {
  return (
    <TopNav menueIsVisible={menueIsVisible} id={id}>
          <StyledNavLink to="/" onClick={onNavLinkClick}>
            <NavItem>
              <Icon src="/images/globe.png" alt="icon-globe" />
              Earth
            </NavItem>
          </StyledNavLink>
          <StyledNavLink to="/gallery" onClick={onNavLinkClick}>
            <NavItem>
              <Icon src="/images/gallery.png" alt="icon-gallery"/>
              Gallery
            </NavItem>
          </StyledNavLink>
          <StyledNavLink to="/image-search" onClick={onNavLinkClick}>
            <NavItem>
              <Icon src="/images/telescope.png" alt="icon-telescope"/>
              Space
            </NavItem>
          </StyledNavLink>
          <StyledNavLink to="/about" onClick={onNavLinkClick}>
            <NavItem>
              <Icon src="/images/alien.png" alt="icon-alien"/>
              About
            </NavItem>
          </StyledNavLink>
    </TopNav>
  );
}
