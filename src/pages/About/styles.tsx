import styled from "@emotion/styled";
import {shake} from "../../utils/animations";

export const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 100vw;
    min-height: 100vh;
    height: fit-content;
    background-color: ${(props) => props.theme.secondary};
    z-index: -1;
    padding-top: 4rem;
  `;

  export const ContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-width: 18.75rem;
    width: 95%;
    height: 100%;
    margin-bottom: 50px;
    font-size: 1em;
  `;

  export const Article = styled.div`
    display: flex;
    flex-direction: column;
    text-align: flex-start;
    width: 100%;
  `;

  export const H3 = styled.h3`
    color: ${(props) => props.theme.primary};
    text-align: flex-start;
    letter-spacing: 2px;
  `;

  export const P = styled.p`
    color: ${(props) => props.theme.primary};
    margin-bottom: 0.5rem;
    padding: 3px;
    line-height: 2;
  `;

  export const AlienIcon = styled.img`
    width: 4rem;
    height: 4rem;
    margin: 1rem 0.75rem;
    align-self: center;
    animation: ${shake} 5s; 
    animation-iteration-count:infinite;
    animation-direction: alternate-reverse;
  `;

  export const Icon = styled.img`
    width: 1.5rem;
    height: 1.5rem;
    margin: 2px 6px 0px 6px;
  `;

  export const MenueIcon = styled.img`
    width: 2.5rem;
    height: auto;
    margin: 2px 6px -17px 6px;
  `;

  export const Link = styled.a`
    color: ${(props) => props.theme.quinary};
    &:hover {
      color: ${(props) => props.theme.tertiary};
      padding: 0.25rem;
    }
  `;
