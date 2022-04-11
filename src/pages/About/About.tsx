import React from "react";
import { AlienIcon, Article, ContentContainer, H3, Icon, Link, MenueIcon, P, PageContainer } from './styles'

export default function About() {
  
  return (
    <PageContainer>
      <ContentContainer>
        <Article>
          <AlienIcon src="/images/alien.png" alt="alien-animated" />
          <H3>Hello Adventurer! Nice to meet you!</H3>
          <P>Are you ready to discover space with me? Yes? Nice.</P>
          <P>
            Click on <Icon src="/images/gallery.png" alt="gallery-icon"/> or <Icon src="/images/telescope.png" alt="telescope-icon"/> and I will take you
            with me to space (gallery or image-search). You can discover NASAs beautiful
            Astronomy Pictures of the Day and their database with daily pictures
            since 2015-01-01 in the gallery or detail page with image search. In the Gallery, a click on
            the little <Icon src="/images/rocket.png" alt="rocket-icon"/> in the bottom right corner of an image will take you to the detail page. A click on the globe{" "}
            <Icon src="/images/globe.png" alt="earth-icon"/>
            will bring you back to earth (landing page). If you want to come
            back, click me, your alien- friend. A Secret menu is hidden under
            the three yellow dots <MenueIcon src="/images/menux.png" alt="earth-icon" />, to beam us
            quick from page to page. Enjoy the Trip and come back soon my
            friend!
          </P>
          <P>
            You love a lighter background? Click
            <Icon src="/images/sun-moon-icon.png" alt="theme-switch-icon-eclipse"/> and I will change the theme
            for you.
          </P>
          <P>Oh...and...do not forget to make a whish on the shooting star.</P>
        </Article>
        <Article>
          <H3>Credits:</H3>
          <P>
            Special Thanks to the{" "}
            <Link 
              href="https://api.nasa.gov/" 
              target="_blank"
              rel="noopener noreferrer" >
              NASA
            </Link>{" "}
            for taking us to space!
          </P>
          <P>Thanks to the free Icon Sources:</P>
          <P>
            Globe: made by:{" "}
            <Link
              href="https://www.flaticon.com/authors/those-icons"
              title="Those Icons"
              target="_blank"
              rel="noopener noreferrer" 
            >
              Those Icons{" "}
            </Link>
            from:{" "}
            <Link
              href="https://www.flaticon.com/"
              title="Flaticon"
              target="_blank"
              rel="noopener noreferrer" 
            >
              www.flaticon.com{" "}
            </Link>
            </P>
          <P>
            Rocket: made by:{" "}
            <Link
              href="https://www.flaticon.com/authors/freepik"
              title="Freepik"
              target="_blank"
              rel="noopener noreferrer" 
            >
              Freepik{" "}
            </Link>
            from:{" "}
            <Link
              href="https://www.flaticon.com/"
              title="Flaticon"
              target="_blank"
              rel="noopener noreferrer" 
            >
              www.flaticon.com{" "}
            </Link>
            </P>
          <P>
            Gallery: made by:{" "}
            <Link
              href="https://www.flaticon.com/authors/kiranshastry"
              title="Kiranshastry"
              target="_blank"
              rel="noopener noreferrer" 
            >
              Kiranshastry{" "}
            </Link>
            from:{" "}
            <Link
              href="https://www.flaticon.com/"
              title="Flaticon"
              target="_blank"
              rel="noopener noreferrer" 
            >
              www.flaticon.com{" "}
            </Link>
            </P>
            <P>
            Telescope made by:{" "}
            <Link
              href="https://www.flaticon.com/authors/freepik"
              title="Freepik"
              target="_blank"
              rel="noopener noreferrer" 
            >
              Freepik{" "}
            </Link>{" "}
            from:{" "}
            <Link 
            href="https://www.flaticon.com/" 
            title="Flaticon"
            target="_blank"
            rel="noopener noreferrer" 
            >
              www.flaticon.com
            </Link>
          </P>
          <P>
            Planet made by: <Link 
            href="https://www.freepik.com" 
            title="Freepik" 
            target="_blank" 
            rel="noopener noreferrer"
            >Freepik</Link>
            from:{" "}
            <Link 
            href="https://www.flaticon.com/de/" 
            title="Flaticon"
            target="_blank" 
            rel="noopener noreferrer">www.flaticon.com</Link>
          </P>
          <P>
            Planet Earth on landingpage:{" "}
            <Link
              href="https://picsart.com/es_es/i/sticker-planet-267730243011211"
              target="_blank" 
              rel="noopener noreferrer"
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
              rel="noopener noreferrer"
            >
              Freepik
            </Link>{" "}
            from:{" "}
            <Link
              href="https://www.flaticon.com/"
              title="Flaticon"
              target="_blank" 
              rel="noopener noreferrer"
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
              rel="noopener noreferrer"
            >
              eclipse
            </Link>
          </P>
        </Article>
      </ContentContainer>
    </PageContainer>
  );
}
