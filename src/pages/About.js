import styled from "@emotion/styled";
import React from "react";

export default function About() {
  const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 100vw;
    min-height: 100vh;
    height: fit-content;
    background-color: ${(props) => props.theme.secondary};
    z-index: -1;
    padding-top: 65px;
  `;

  const ContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-width: 300px;
    width: 95%;
    height: 100%;
    margin-bottom: 50px;
    font-size: 1em;
  `;

  const Article = styled.div`
    display: flex;
    flex-direction: column;
    text-align: flex-start;
    width: 100%;
  `;

  const H3 = styled.h3`
    color: ${(props) => props.theme.primary};
    text-align: flex-start;
    letter-spacing: 2px;
  `;

  const P = styled.p`
    color: ${(props) => props.theme.primary};
    margin-bottom: 8px;
    padding: 3px;
  `;

  const AlienIcon = styled.img`
    width: 48px;
    height: 48px;
    margin: 30px 6px 30px 6px;
    align-self: center;
  `;

  const Icon = styled.img`
    width: 24px;
    height: 24px;
    margin: 2px 6px 0px 6px;
  `;

  const MenueIcon = styled.img`
    width: 48px;
    height: 12px;
    margin: 2px 6px 0px 6px;
  `;

  const Link = styled.a`
    color: ${(props) => props.theme.quinary};
    &:hover {
      color: ${(props) => props.theme.tertiary};
      padding: 6px 6px 6px 6px;
    }
  `;

  return (
    <PageContainer>
      <ContentContainer>
        <Article>
          <AlienIcon src="/images/alien.png" />
          <H3>Hello Adventurer! Nice to meet you!</H3>
          <P>Are you ready to discover space with me? Yes? Nice.</P>
          <P>
            Click on <Icon src="/images/telescope.png" /> and I will take you
            with me to space (image-search). You can discover NASAs beautiful
            Astronomy Picture of the Day and their database with daily pictures
            since 2015-01-01. A click on the globe{" "}
            <Icon src="/images/globe.png" />
            will bring you back to earth (landing page). If you want to come
            back, click me, your alien- friend. A Secret menu is hidden under
            the three blue dots <MenueIcon src="/images/menu.png" />, to beam us
            quick from page to page. Enjoy the Trip and come back soon my
            friend!
          </P>
          <P>
            You love a lighter background? Click
            <Icon src="/images/sun-moon-icon.png" /> and I will change the theme
            for you.
          </P>
          <P>Oh...and...do not forget to make a whish on the shooting star.</P>
        </Article>
        <Article>
          <H3>Credits:</H3>
          <P>
            Special Thanks to the{" "}
            <Link href="https://api.nasa.gov/" target="_blank">
              NASA
            </Link>{" "}
            for taking us to space!
          </P>
          <P>Thanks to the free Icon Sources:</P>
          <P>
            Globe: made by:{" "}
            <Link
              href="https://www.flaticon.com/authors/those-icons"
              title="Those
          Icons"
              target="_blank"
            >
              {" "}
              Those Icons:
            </Link>{" "}
          </P>
          <P>
            from:{" "}
            <Link
              href="https://www.flaticon.com/"
              title="Flaticon"
              target="_blank"
            >
              www.flaticon.com
            </Link>{" "}
            Telescope made by:{" "}
            <Link
              href="https://www.flaticon.com/authors/freepik"
              title="Freepik"
              target="_blank"
            >
              Freepik
            </Link>{" "}
            from{" "}
            <Link href="https://www.flaticon.com/" title="Flaticon">
              www.flaticon.com
            </Link>
          </P>
          <P>
            Planet (Logo):{" "}
            <Link
              title="planet vector png 3"
              href="https://pngimage.net/planet-vector-png-3/"
              target="_blank"
            >
              planet vector png 3
            </Link>
          </P>
          <P>
            Planet Earth on landingpage:{" "}
            <Link
              href="https://picsart.com/es_es/i/sticker-planet-267730243011211"
              target="_blank"
            >
              earth
            </Link>
          </P>
          <P>
            Alien made by:{" "}
            <Link
              href="https://www.flaticon.com/authors/freepik"
              title="Freepik"
              target="_blank"
            >
              Freepik
            </Link>{" "}
            from{" "}
            <Link
              href="https://www.flaticon.com/"
              title="Flaticon"
              target="_blank"
            >
              www.flaticon.com
            </Link>
          </P>
          <P>
            Icon Theme-Switch from:{" "}
            <Link
              title="eclipse"
              href="https://www.pngrepo.com/svg/223559/eclipse-moon"
              target="_blank"
            >
              eclipse
            </Link>
          </P>
        </Article>
      </ContentContainer>
    </PageContainer>
  );
}
