import React from "react";
import GlobalStyles from "./utils/GlobalStyles";
import NasaInfos from "./pages/NasaInfos";
import Header from "./components/Header";
import Logo from "./components/Logo";
import { ThemeProvider } from "emotion-theming";
import styled from "@emotion/styled";
import themes from "./utils/themes";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";
import LandingPage from "./pages/Landing";
import About from "./pages/About";

const Container = styled.div`
  display: flex;
  height: 60px;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-left: 15px;
  position: fixed;
  top: 0px;
  left: 0px;
`;

const ThemeSwitch = styled.button`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  align-self: flex-end;
  width: 20%;
  height: 100%;
  border: none;
  color: ${(props) => props.theme.secondary};
  background-color: ${(props) => props.theme.quinary};
  padding-right: 25px;
  margin: 0px;
  font-size: 0.8em;
  outline: none;
  cursor: pointer;
  font-family: "Orbitron", sans-serif;
  &:hover {
    background-color: ${(props) => props.theme.tertiary};
    z-index: 1;
  }
`;

const ThemeImage = styled.img`
  display: flex;
  justify-content: center;
  align-items: center;
  width: auto;
  max-height: 38px;
`;

const TopNav = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-end;
  height: 50px;
`;

const DropButton = styled.button`
  display: inline-block;
  align-self: end;
  width: 40px;
  height: auto;
  border: none;
  outline: none;
  background: none;
  margin-left: 70px;
  cursor: pointer;
`;

const Dropdown = styled.div`
  position: fixed;
  top: 65px;
  right: 20px;
  display: inline-block;
  height: auto;
  width: auto;
  z-index: 2;
  cursor: pointer;
  &:hover {
    display: block;
  }
  &:active {
    display: block;
  }
`;

const Dropcontent = styled.div`
  opacity: 0;
  position: relative;
  display: block;
  flex-direction: column;
  width: 120px;
  padding: 8px;
  background-color: ${(props) => props.theme.primary};
  color: background-color: ${(props) => props.theme.secondary};
  border-radius: 12px;
  border: 2px solid ${(props) => props.theme.quinary};
  &:hover {
    opacity: 0.8;
  }
  &:active {
    opacity: 0.8;
  }
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

function App() {
  const [theme, setTheme] = React.useState(themes.default, themes.light);

  function handleClick() {
    if (theme === themes.default) {
      setTheme(themes.light);
    } else {
      setTheme(themes.default);
    }
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Router>
          <Container>
            <Header />
            <Logo />
            <ThemeSwitch onClick={handleClick}>
              <ThemeImage
                src="/images/sun-moon-icon.png
            "
              />
            </ThemeSwitch>
          </Container>
          <TopNav>
            <Dropdown>
              <DropButton>
                <MenueIcon src="images/menu.png" />
              </DropButton>
              <Dropcontent>
                <NavLink to="/">
                  <NavItem>Earth</NavItem>
                </NavLink>
                <NavLink to="/image-search">
                  <NavItem>space</NavItem>
                </NavLink>
                <NavLink to="/about">
                  <NavItem>about</NavItem>
                </NavLink>
              </Dropcontent>
            </Dropdown>
          </TopNav>
          <Switch>
            <Route exact path="/">
              <LandingPage />
            </Route>
            <Route exact path="/image-search">
              <NasaInfos />
            </Route>
            <Route exact path="/about">
              <About />
            </Route>
          </Switch>
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;
