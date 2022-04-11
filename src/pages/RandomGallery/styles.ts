import styled from '@emotion/styled';
import {fadeIn, fadeOut } from "../../utils/animations"

export const PContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: flex-start;
width: 100vw;
min-height: 100vh;
background-color: ${(props) => props.theme.secondary};
margin: 0;
padding: 3rem 0 0 0;

@media only screen and (min-width: 48rem){
  padding: 6rem 0 0 0;
}
`;

export const Form = styled.form`
margin: 1rem 0;
display: flex;
flex-direction: row;
width: 100%;
justify-content: space-around;
align-items: flex-start;
padding: 1rem;
`

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
export const SpaceImageWrapper = styled.div`
width: 100%;
height: auto;
margin: 0;
padding: 0;
background: transparent;
outline: none;
border: none;
position: relative;
`

export const SpaceImage = styled.img`
width: 100%;
height: auto;
padding-bottom: 0.25rem;
`
export const SpaceVideo = styled.iframe`
width: 100%;
height: auto;
border: none;
padding-bottom: 0.25rem;
`

export const DetailPageButton = styled.button<{isFetching: boolean}>`
display: ${props => props.isFetching ? 'none' : 'flex'};
animation: ${fadeIn} 4s ease-in;
justify-content: center;
align-items: center;;
position: absolute;
bottom: 0.25rem;
right: 0.25rem;
height: 2.5rem;
max-width: 100%;
border: none;
outline: none;
cursor: pointer;
background: transparent;
color: ${props => props.theme.tertiary};
font-family: "Orbitron", sans-serif;

&:hover, :focus {
 border-bottom: 2px solid ${props => props.theme.tertiary};
}
`

export const RocketIcon = styled.img`
width: 2rem;
height: auto;
padding: 0.25rem;
`
export const Hint = styled.p`
text-align: flex-start;
color: ${(props) => props.theme.primary};
text-align: flex-start;
font-size: 0.825rem;
padding: 1rem;
margin: -1.5rem 0 0.5rem 0;
`

export const PlaceholderContainer = styled(GalleryContainer)`
animation: ${fadeOut} 3s ease-out;
`

export const LoadingPlaceholderBlockBig = styled.div`
width: 100%;
height: 15rem;
margin: 0.25rem;
background-color: ${(props) => props.theme.primary};
opacity: 0.1;
`
export const LoadingPlaceholderBlockSmall = styled.div`
width: 100%;
height: 10rem;
margin: 0.25rem;
background-color: ${(props) => props.theme.primary};
opacity: 0.1;
`