import styled from "@emotion/styled";
import React from "react";

export default function About() {
  const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 65px;
    width: 100vw;
    height: auto;
    background-color: ${(props) => props.theme.secondary};
    margin-top: 45px;
    z-index: -1;
  `;

  const ContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 340px;
    height: 100%;
    margin-bottom: 50px;
    font-size: 1em;
  `;

  const Article = styled.div`
    display: flex;
    flex-direction: column;
    text-align: flex-start;
  `;

  const H3 = styled.h3`
    color: ${(props) => props.theme.primary};
    text-align: center;
    letter-spacing: 2px;
  `;

  const P = styled.p`
    color: ${(props) => props.theme.primary};
    margin-bottom: 8px;
  `;

  const AlienIcon = styled.img`
    width: 48px;
    height: 48px;
    margin: 2px 6px 0px 6px;
    align-self: center;
  `;

  const Icon = styled.img`
    width: 24px;
    height: 24px;
    margin: 2px 6px 0px 6px;
  `;

  const Link = styled.a`
    color: ${(props) => props.theme.quinary};
    &:hover {
      color: ${(props) => props.theme.tertiary};
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
            will bring you back to earth (landingpage). If you want to come
            back, click me, your alien- friend.
          </P>
          <P>
            You love al lighter background? Click
            <Icon src="/images/sun-moon-icon.png" /> and I will change the theme
            for you.
          </P>
        </Article>
        <Article>
          <H3>Credits:</H3>
          <P>
            Special Thanks to the{" "}
            <Link href="https://api.nasa.gov/" target="_blank">
              NASA
            </Link>
            for taking us to space!
          </P>
          <P>Thanks to the free Icon Sources:</P>
          <P>
            Globe: made by:
            <Link
              href="https://www.flaticon.com/authors/those-icons"
              title="Those
          Icons"
              target="_blank"
            >
              Those Icons:
            </Link>{" "}
          </P>
          <P>
            from
            <Link
              href="https://www.flaticon.com/"
              title="Flaticon"
              target="_blank"
            >
              www.flaticon.com
            </Link>
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
            Planet Earth on landingpage:
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
