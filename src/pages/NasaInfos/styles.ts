import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";
import { fadeIn, fadeOut } from "../../utils/animations"


export const PContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  min-height: 100vh;
  background-color: ${(props) => props.theme.secondary};
  margin: 0;
  padding: 0;

  @media only screen and (min-width: 48rem){
    align-items: flex-start;
  }
`;

export const CContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: space-around;
  max-height: auto;
  background-color: ${(props) => props.theme.secondary};
  padding: 1rem;
  width: 100%;
  animation: ${fadeIn} 1s ease;
  
  @media only screen and (min-width: 48rem){
    padding: 1rem 2rem;
  }
`;

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  height: auto;
  min-height: 100vh;
  padding: 0;
  background-color: ${(props) => props.theme.secondary};
  color: ${(props) => props.theme.primary};
  margin-bottom: 2rem;
`;
export const Card = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: flex-start;
  align-items: flex-start;
  font-family: "Orbitron", sans-serif;
  text-align: left;
  font-size: 1.2rem;
  color: ${(props) => props.theme.primary};
  background-color: ${(props) => props.theme.secondary};
  padding-bottom: 2rem;
  animation: ${fadeIn} 1s ease-in;

  @media only screen and (min-width: 64rem){
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-row-gap: 0.25rem;
    grid-column-gap: 2rem;
    align-items: start;
    grid-template-areas:
    "title explanationTitle"
    "image explanation-1"
    "date explanation-2"
    "copyright explanation-3"
    "backlink explanation-4";
    align-content: start;
  }
`;

export const PlaceholderCard = styled.div`
display: flex;
flex-direction: column;
width: 100%;
flex-grow: 1;
justify-content: center;
align-items: flex-start;
margin: 0;
padding: 0;
  text-align: left;
  color: ${(props) => props.theme.primary};
  background-color: ${(props) => props.theme.secondary};
  padding-bottom: 2rem;
animation: ${fadeOut} 2s ease-out;

  @media only screen and (min-width: 64rem){
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-row-gap: 0.25rem;
    grid-column-gap: 2rem;
    align-items: start;
    grid-template-areas:
    "first second";
    align-content: start;
  }
`;

export const ColumnPlaceholder = styled.div`
width: 100%;
height: auto;
`

export const FirstColumnPlaceholder=styled(ColumnPlaceholder)`
grid-area: first;
`
export const SecondColumnPlaceholder=styled(ColumnPlaceholder)`
grid-area: second;
`

export const Form = styled.form`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: auto;
  justify-content: space-between;
  align-items: center;
  padding-top: 4.25rem;
  background-color: ${(props) => props.theme.secondary};

  @media only screen and (min-width: 48rem){
    padding-top: 8rem;
  }
`;

export const Img = styled.img`
  display: flex;
  width: 100%;
  height: auto;
  min-height: 33%;
  margin: 1rem 0.5rem 0 0;
  padding: auto;
  border-radius: 0.75rem;
  grid-area: image;
  animation: ${fadeIn} 1s ease-in;
`;

export const BacklinkIcon = styled.img`
width: 1rem;
height: auto;
@media only screen and (min-width: 48rem){
  width: 1.25rem;
}
`

export const ArticlePlaceholder = styled.div`
display: flex;
height: 45vh;
width: 100%;
background-color: ${(props) => props.theme.primary};
opacity: 0.1; 
margin: 1rem 0.5rem 1rem 0;
justify-content: center;
align-items: center;
padding: auto;
border-radius: 0.75rem;

@media only screen and (min-width: 48rem){
  width: 100%;
  height: 37vh;
}
`;

export const TextPlaceholder = styled.div`
width: 100%;
min-height: 1.5rem;
background-color: ${(props) => props.theme.primary};
border-radius: 0.75rem;
margin: 1rem 0 0 0;
opacity: 0.1;
`;
export const H3 = styled.h3`
  text-align: left;
  color: ${(props) => props.theme.primary};
  letter-spacing: 1px;
  padding: 1rem 0 0 0;
  margin: 0;
  font-weight: 400;
  font-size: 1.25rem;
  `
  export const FirstColumnH3 = styled(H3)`
  grid-area: title;
  `;

export const P = styled.p`
  text-align: flex-start;
  color: ${(props) => props.theme.primary};
  text-align: left;
  font-size: 1rem;
  padding: 1rem 0 0 0;
  margin: 0;
  line-height: 1.5;
`;
export const FirstColumnP = styled(P)`
  grid-row-start: date;
  grid-row-end: backlink;
`;

export const SecondColumnP = styled(P)`
grid-row-start: explanation-1;
  grid-row-end: explanation-4;

@media only screen and (min-width: 64rem) {
  margin-top: -0.25rem;
};
`;


export const ShortText = styled(P)`
overflow: hidden;
text-overflow: ellipsis;
grid-area: date;
`;

export const CopyrightText = styled(ShortText)`
grid-area: copyright;
`;

export const Note = styled.p`
  text-align: flex-start;
  color: ${(props) => props.theme.primary};
  text-align: flex-start;
  font-size: 0.625rem;
  padding: 0.25rem 0 0 0;
  margin: 0;
  line-height: 1.5;
`;

export const A = styled.a`
  text-align: left;
  color: ${(props) => props.theme.tertiary};
  text-decoration: none;
  margin-bottom: 0;
  margin-top: 1.25rem;
  line-height: 1.5;
  grid-area: backlink;

  &:hover {
    color: ${(props) => props.theme.quartenary};
  };

  &:active {
    color: ${(props) => props.theme.quinary};
  };

  &:focus {
    border-bottom: 2px dotted ${(props) => props.theme.quartenary};
    outline: none;
  };
`;

export const EarthLink = styled(NavLink)`
display: flex;
justify-content: center;
align-items: center;
padding: 0;
height: auto;
width: fit-content;

&:focus {
    border: 2px dotted ${(props) => props.theme.quartenary};
    border-radius: 50%;
    outline: none;
  };
`

export const EarthIcon = styled.img`
  width: 5rem;
  height: auto;
  cursor: pointer;
  padding: 0;

  &:hover {
    opacity: 0.75;
  };
`;

export const Iframe = styled("iframe")`
 display: flex;
  width: 100%;
  height: auto;
  max-width: 100%;
  background-color: ${(props) => props.theme.quinary};
  margin: 1.25rem 0.5rem 0 0;
  padding: auto;
  border-radius: 0.75rem;
  grid-area: image;
`;

export const BackButton = styled.button`
background: transparent;
color: ${props => props.theme.primary};
outline: none;
border: none;
width: fit-content;
margin: 1rem 0 0 0;
padding: 0;
cursor: pointer;

&:hover, :focus {
   border-bottom: 2px dotted ${props => props.theme.tertiary};
}
`