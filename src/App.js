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
import RandomGallery from "./pages/RandomGallery"

const Container = styled.div`
  display: flex;
  height: 3.75rem;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-left: 1rem;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 20;
`;

const ThemeSwitch = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: flex-start;
  width: fit-content;
  height: 58%;
  border: none;
  color: ${(props) => props.theme.secondary};
  background-color: transparent;
  padding: 0 0.5rem 0 0.625rem;
  margin: 1rem 0 0 0;
  font-size: 0.8em;
  border-radius: 45% 0 0 45%;
  outline: none;
  cursor: pointer;
  background-color: ${(props) => props.theme.tertiary};
  
  &:hover {
    background-color: ${(props) => props.theme.quartenary};
  }

  &:focus {
    border: 2px dotted ${(props) => props.theme.secondary};
    outline: none;
  }

  @media only screen and (min-width: 768px) {
    height: 90%;
    border-radius: 50% 0 0 50%;
    padding: 0 0.5rem 0 1rem;
  }
`;

const ThemeImage = styled.img`
  display: flex;
  justify-content: center;
  align-items: center;
  width: auto;
  max-height: 1.5rem;

  @media only screen and (min-width: 768px) {
    max-height: 2.25rem;
  }
`;

function App() {
  const [theme, setTheme] = React.useState(themes.default);
  const [menueIsVisible, setMenueIsVisible] = React.useState(false)

  const handleClick = () => {
    if (theme === themes.default) {
      setTheme(themes.light);
    } else {
      setTheme(themes.default);
    }
  }

  const handleDropBtnClick = () => menueIsVisible ? setMenueIsVisible(false) : setMenueIsVisible(true)
  const handleNavLinkClick = () => setMenueIsVisible(false)

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
          <DropDNav id='DropNav' style={{ display: menueIsVisible ? "block" : "none" }} onNavLinkClick={handleNavLinkClick}/>
          <Switch>
            <Route exact path="/">
              <LandingPage />
            </Route>
            <Route exact path="/gallery">
             <RandomGallery />
            </Route>
            <Route exact path="/gallery/:startDate:endDate/">
             <RandomGallery />
            </Route>
            <Route exact path='/image-search' >
              <NasaInfos />
            </Route>
            <Route exact path='/detail-page/:query/:entryDate'>
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
