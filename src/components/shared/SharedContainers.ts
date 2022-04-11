import styled from '@emotion/styled';
import { fadeIn } from '../../utils/animations';

export const GalleryContainer = styled.div`
column-count: 1;
column-gap: 0.25rem;
line-height: 0;
margin: 0 0 1rem 0;
padding: 0 1rem;
z-index: 0;
width:100%;
animation: ${fadeIn} 2s ease-in;

@media only screen and (min-width: 48rem){
 column-count: 2;
}

@media only screen and (min-width: 64rem){
 column-count: 3;
}
`

export const Container = styled.div`
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

export const ThemeSwitch = styled.button`
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

export const ThemeImage = styled.img`
  display: flex;
  justify-content: center;
  align-items: center;
  width: auto;
  max-height: 1.5rem;

  @media only screen and (min-width: 768px) {
    max-height: 2.25rem;
  }
`;