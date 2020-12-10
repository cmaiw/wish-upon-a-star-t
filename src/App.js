import React from "react";
import GlobalStyles from "./utils/GlobalStyles";
import NasaInfos from "./pages/NasaInfos";
import Header from "./components/Header";
import Logo from "./components/Logo";
import { ThemeProvider } from "emotion-theming";
import styled from "@emotion/styled";
import themes from "./utils/themes";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LandingPage from "./pages/Landing";
import About from "./pages/About";
import { DropDNav, DropButton } from "./components/DropDNav";

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
  justify-content: center;
  align-items: center;
  align-self: flex-end;
  width: fit-content;
  height: 100%;
  border: none;
  color: ${(props) => props.theme.secondary};
  background-color: ${(props) => props.theme.quinary};
  padding-right: 10px;
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

function App() {
  const [theme, setTheme] = React.useState(themes.default, themes.light);
  const [menueIsVisible, setMenueIsVisible] = React.useState(false)

  const handleClick = () => {
    if (theme === themes.default) {
      setTheme(themes.light);
    } else {
      setTheme(themes.default);
    }
  }

  const handleDropBtnClick = () => menueIsVisible ? setMenueIsVisible(false) : setMenueIsVisible(true)

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
          <DropButton id='DropNavBtn' onClick={handleDropBtnClick}/>
          <DropDNav id='DropNav' style={{ display: menueIsVisible ? "block" : "none" }}/>
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
