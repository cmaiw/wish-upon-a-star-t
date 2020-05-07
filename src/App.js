import React from "react";
import GlobalStyles from "./utils/GlobalStyles";
import NasaInfos from "./pages/NasaInfos";
import Header from "./components/Header";
import Logo from "./components/Logo";
import { ThemeProvider } from "emotion-theming";
import styled from "@emotion/styled";
import themes from "./utils/themes";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";

const Container = styled.div`
  display: flex;
  height: 68px;
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
  width: 21%;
  height: 100%;
  border: none;
  color: ${(props) => props.theme.secondary};
  background-color: ${(props) => props.theme.quinary};
  padding: 0px;
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
  max-height: 48px;
  opacity: 1;
`;

function App() {
  const [theme, setTheme] = React.useState(themes.default, themes.special);

  function handleClick() {
    if (theme === themes.default) {
      setTheme(themes.special);
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
          <Switch>
            <Route exact path="/">
              <LandingPage />
            </Route>
            <Route exact path="/image-search">
              <NasaInfos />
            </Route>
          </Switch>
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;
