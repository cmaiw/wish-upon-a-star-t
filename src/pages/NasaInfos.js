import React from "react";
import styled from "@emotion/styled";
import DateInput from "../components/DateInput";
import { NavLink } from "react-router-dom";

const PContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: auto;
  min-height: 100vh;
  background-color: ${(props) => props.theme.secondary};
  margin-left: auto;
  margin-right: auto;
  padding: auto;
`;

const CContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: space-around;
  max-width: 90%;
  max-height: auto;
  background-color: ${(props) => props.theme.secondary};
  margin-bottom: 2rem;
  margin-top: 1.5rempx;
`;

const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  max-width: 100vw;
  height: auto;
  min-height: 100vh;
  padding: 0;
  background-color: ${(props) => props.theme.secondary};
  color: ${(props) => props.theme.primary};
`;
const Card = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 100%;
  justify-content: flex-start;
  align-items: flex-start;
  font-family: "Orbitron", sans-serif;
  text-align: left;
  font-size: 1.2rem;
  color: ${(props) => props.theme.primary};
  background-color: ${(props) => props.theme.secondary};
  padding-bottom: 2rem;
`;

const PlaceholderCard = styled.div`
display: flex;
flex-direction: column;
height: 100vh;
width: 90vw;
justify-content: flex-start;
align-items: flex-start;
margin: 0;
padding: 0;
font-family: "Orbitron", sans-serif;
  text-align: left;
  font-size: 1.2rem;
  color: ${(props) => props.theme.primary};
  background-color: ${(props) => props.theme.secondary};
  padding-bottom: 2rem;

`

const Form = styled.form`
  display: flex;
  flex-direction: row;
  min-width: 100%;
  height: auto;
  justify-content: space-between;
  align-items: center;
  padding-top: 5rem;
  background-color: ${(props) => props.theme.secondary};
`;

const Img = styled.img`
  display: flex;
  width: auto;
  height: auto;
  min-height: 35vh;
  max-height: 55vh;
  width: auto;
  max-width: 100%;
  border: 5px solid ${(props) => props.theme.quinary};
  background-color: ${(props) => props.theme.quinary};
  margin: 1rem 0.5rem 0 0;
  padding: auto;
  border-radius: 0.75rem;
  @media only screen and (min-width: 48rem){
    width: 75%;
    min-height: 45vh;
  }
`;

const ImagePlaceholder = styled.div`
  display: flex;
  min-height: 35vh;
  width: 100%;
  background-color: ${(props) => props.theme.primary};
  opacity: 0.1; 
  margin: 1rem 0.5rem 1rem 0;
  justify-content: center;
  align-items: center;
  padding: auto;
  border-radius: 0.75rem;

  @media only screen and (min-width: 48rem){
    width: 75%;
    min-height: 45vh;
  }
`;


const SearchButton = styled.button`
  display: flex;
  align-self: flex-start;
  justify-content: center;
  align-items: center;
  width: fit-content;
  height: 2rem;
  background-color: ${(props) => props.theme.primary};
  color: ${(props) => props.theme.secondary};
  border-radius: 0.75rem;
  border: 2px solid ${(props) => props.theme.quinary};
  padding: auto;
  margin-top: 2.5rem;
  margin-left: 0.5rem;
  font-size: 0.6em;
  outline: none;
  cursor: pointer;
  font-family: "Orbitron", sans-serif;
  &:hover {
    color: ${(props) => props.theme.quartenary};
  }
`
const TextPlaceholder = styled.div`
width: 100%;
min-height: 1.5rem;
background-color: ${(props) => props.theme.primary};
border-radius: 0.75rem;
margin: 0.5rem 0;
opacity: 0.1;
`
const H3 = styled.h3`
  text-align: start;
  color: ${(props) => props.theme.primary};
  letter-spacing: 1px;
  padding: 1rem 0 0 0;
  margin: 0;
  line-height: 1.5;
`;

const P = styled.p`
  text-align: flex-start;
  color: ${(props) => props.theme.primary};
  text-align: flex-start;
  font-size: 1rem;
  padding: 1rem 0 0 0;
  margin: 0;
  line-height: 1.5;
`;

const Note = styled.p`
  text-align: flex-start;
  color: ${(props) => props.theme.primary};
  text-align: flex-start;
  font-size: 0.75rem;
  padding: 1rem 0 0 0;
  margin: 0;
  line-height: 1.5;
`;

const A = styled.a`
  text-align: left;
  color: ${(props) => props.theme.tertiary};
  text-decoration: none;
  margin-bottom: 0;
  margin-top: 1.25rem;
  line-height: 1.5;
  &:hover {
    color: ${(props) => props.theme.quartenary};
    border: 2px solid ${(props) => props.theme.quartenary};
  }
  &:active: {
    color: ${(props) => props.theme.quinary};
  }
`;

const EarthIcon = styled.img`
  width: 5rem;
  height: 6rem;
  opacity: 0.5;
  padding-bottom: 1.25rem;
  cursor: pointer;
  &:hover {
    opacity: 0.95;
  }
`;

const Iframe = styled("iframe")`
display: flex;
  width: 100%;
  min-height: 15.625rem;
  max-width: 100%;
  height: auto;
  border: 0.25rem solid ${(props) => props.theme.quinary};
  background-color: ${(props) => props.theme.quinary};
  padding: 0;
  border-radius: 0.75rem;
`;

export default function NasaInfos() {
  const [nasaInfos, setNasaInfos] = React.useState([]);
  const [date, setDate] = React.useState("");
  const [query, setQuery] = React.useState("");
  // eslint-disable-next-line no-unused-vars
  const [isFetching, setIsFetching] = React.useState(true)

  
  
  React.useEffect(() => {
    async function getNasaDatabyDate() {
      const REACT_APP_API_KEY = process.env.REACT_APP_API_KEY;
      const response = await fetch(
        `https://api.nasa.gov/planetary/apod?api_key=${REACT_APP_API_KEY}&date=${query}`
      );
      const data = await response.json();
      return data;
    }

    async function refreshNasa() {
      setIsFetching(true);
      const nasaData = await getNasaDatabyDate();
      setNasaInfos(nasaData);
      setIsFetching(false);
    }
    refreshNasa();
  }, [query]);

  const updateDate = (e) => {
    setDate(e.target.value);
  };

  const getDate = (e) => {
    e.preventDefault();
    setQuery(date);
    setDate("");
  };
  return (
    <>
      <PContainer>
        <CContainer>
          <Form onSubmit={getDate}>
            <DateInput
              onChange={updateDate}
              type="date"
              placeholder="Search by date: yyyy-mm-dd."
              value={date}
            ></DateInput>
            <SearchButton type="submit">Search</SearchButton>
          </Form>
          <Note>
            Please note, you can only search for a date between 2015-01-01 and
            today.
          </Note>
          <Main>
            {isFetching && (<PlaceholderCard>
            <TextPlaceholder />
            <TextPlaceholder />
            <TextPlaceholder />
            <ImagePlaceholder />
            <TextPlaceholder />
            <TextPlaceholder />
            <TextPlaceholder />
            <TextPlaceholder />
            <TextPlaceholder />
            <TextPlaceholder />
            <TextPlaceholder />
            <TextPlaceholder />
            <TextPlaceholder />
            <TextPlaceholder />
            <TextPlaceholder />
            <TextPlaceholder />
          </PlaceholderCard>)}
            {!isFetching && nasaInfos &&(<>
              <Card>
                <H3>{nasaInfos.title}</H3>
                <P>{nasaInfos.media_type === "video" ? "Astronomy Video of the Day:" : "Astronomy Picture of the Day:"}</P>
                {nasaInfos.media_type === "video" ? (
                  <Iframe src={nasaInfos.url}></Iframe>
                )
                :(<Img src={nasaInfos.hdurl} />)}
                <P>Date: {nasaInfos.date}</P>
                {nasaInfos.copyright && <P>© {nasaInfos.copyright}</P>}
                {nasaInfos.explanation &&(<><H3>Explanation:</H3>
                <P>{nasaInfos.explanation}</P></>)}
                {nasaInfos.media_type === "video" ? (
                  <A href={nasaInfos.url} target="_blank">
                    Open picture in new Window!
                  </A>
                ) : (
                  <A href={nasaInfos.hdurl} target="_blank">
                    Open picture in new Window!
                  </A>)}
              </Card>
            <NavLink to="/">
              <EarthIcon src="/images/globe.png" />
            </NavLink>
            <P>Back to planet Earth!</P></>)}
          </Main>
        </CContainer>
      </PContainer>
    </>
  );
}
