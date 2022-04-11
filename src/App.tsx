import React from "react";
import GlobalStyles from "./utils/GlobalStyles";
import NasaInfos from "./pages/NasaInfos/NasaInfos";
import Header from "./components/Header/Header";
import Logo from "./components/Header/Logo";
import { Theme, ThemeProvider } from "@emotion/react";
import themes from "./utils/themes";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/Landing/Landing";
import About from "./pages/About/About";
import { DropDNav, DropButton } from "./components/DropDNav/DropDNav";
import RandomGallery from "./pages/RandomGallery/RandomGallery"
import { Container, ThemeImage, ThemeSwitch } from "./components/shared/SharedContainers";

function App() {
  const [theme, setTheme] = React.useState<Theme>(themes.default);
  const [menueIsVisible, setMenueIsVisible] = React.useState<boolean>(false)

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
        <GlobalStyles backGroundColor={theme.secondary}/>
        <Router>
          <Container>
            <Header />
            <Logo />
            <ThemeSwitch onClick={handleClick} aria-label='switch-theme'>
              <ThemeImage
                alt='theme-switch-image-eclipse'
                src="/images/sun-moon-icon.png"
              />
            </ThemeSwitch>
          </Container>
          <DropButton id='DropNavBtn' onClick={handleDropBtnClick} />
          <DropDNav id='DropNav' menueIsVisible={menueIsVisible} onNavLinkClick={handleNavLinkClick}/>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/gallery" element={<RandomGallery />} />
            <Route path="/gallery/:startDate:endDate/" element={<RandomGallery />} />
            <Route path='/image-search' element={<NasaInfos />} />
            <Route path='/detail-page/:query/:entryDate' element={<NasaInfos />} />
            <Route path="/about" element={ <About />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;
