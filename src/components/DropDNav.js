import React from "react";
import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export default function DropDNav() {
  const TopNav = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-end;
    width: 100%;
    height: 50px;
  `;

  const DropButton = styled.div`
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

  const Dropdown = styled.div`
  position: fixed;
  top: 90px;
  left: 15px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: auto;
  min-width: 78%;
  z-index: 5;
  cursor: pointer;
  }
`;

  const Dropcontent = styled.div`
  opacity: 0;
  position: absolute;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 92%;
  height: 80px;
  padding: 8px 30px 8px 80px;
  margin: -10px 10px auto auto;
  background-color: ${(props) => props.theme.primary};
  color: background-color: ${(props) => props.theme.secondary};
  border-radius: 12px;
  border: 2px solid ${(props) => props.theme.quinary};
  &:hover {
    opacity: 0.97;
  }
  &:active {
    opacity: 0.97;
  }
`;

  const Icon = styled.img`
    width: 24px;
    height: 24px;
    margin: 2px 6px 0px 6px;
  `;

  const NavItem = styled.div`
    text-decoration: none;
    background-color: ${(props) => props.theme.primary};
    color: ${(props) => props.theme.secondary};
    padding: 8px;
  `;

  const MenueIcon = styled.img`
    width: 30px;
    height: auto;
  `;

  return (
    <TopNav>
      <Dropdown>
        <DropButton>
          <MenueIcon src="images/menu.png" />
        </DropButton>
        <Dropcontent>
          <NavLink to="/">
            <NavItem>
              <Icon src="/images/globe.png" />
              Earth
            </NavItem>
          </NavLink>
          <NavLink to="/image-search">
            <NavItem>
              <Icon src="/images/telescope.png" />
              Space
            </NavItem>
          </NavLink>
          <NavLink to="/about">
            <NavItem>
              <Icon src="/images/alien.png" />
              About
            </NavItem>
          </NavLink>
        </Dropcontent>
      </Dropdown>
    </TopNav>
  );
}
