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
  margin: 0 auto;
  padding: auto;

  @media only screen and (min-width: 48rem){
    align-items: flex-start;
  }
`;

const CContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: space-around;
  max-height: auto;
  background-color: ${(props) => props.theme.secondary};
  margin: 1rem;

  @media only screen and (min-width: 48rem){
    margin: 0 2rem;
  }
`;

const Main = styled.main`
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

const Form = styled.form`
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

const Img = styled.img`
  display: flex;
  width: 100%;
  height: auto;
  background-color: ${(props) => props.theme.quinary};
  margin: 1rem 0.5rem 0 0;
  padding: auto;
  border-radius: 0.75rem;
  grid-area: image;
`;

const ArticlePlaceholder = styled.div`
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
  height: 55vh;
}
`;

const ImagePlaceholder = styled(ArticlePlaceholder)`
  grid-area: image;
`;

const ExplanationPlaceholder = styled(ArticlePlaceholder)`
grid-area: explanation-1;
`

const SearchButton = styled.button`
  display: flex;
  align-self: flex-start;
  justify-content: center;
  align-items: center;
  width: fit-content;
  height: 2.5rem;
  background-color: ${(props) => props.theme.primary};
  color: ${(props) => props.theme.secondary};
  border: none;
  border-radius: 0.75rem;
  padding: auto;
  margin-top: 2.5rem;
  margin-left: 0.5rem;
  font-size: 0.825rem;
  outline: none;
  cursor: pointer;
  font-family: "Orbitron", sans-serif;

  &:hover {
    background-color: ${(props) => props.theme.quartenary};
  }

  &:focus {
    border: 2px solid ${(props) => props.theme.tertiary};
    border-radius: 0.75rem;
  }
`
const TextPlaceholder = styled.div`
width: 100%;
min-height: 1.5rem;
background-color: ${(props) => props.theme.primary};
border-radius: 0.75rem;
margin: 1rem 0 0 0;
opacity: 0.1;
`;
const FirstColumnHeadlinePlaceholder = styled(TextPlaceholder)`
grid-area: title;
`;
const SecondColumnHeadlinePlaceholder = styled(TextPlaceholder)`
grid-area: explanationTitle;
`;
const FirstColumnCopyrightPlaceholder = styled(TextPlaceholder)`
grid-area: copyright;
`;
const FirstColumnDatePlaceholder = styled(TextPlaceholder)`
grid-area: date;
`;
const SecondColumnTextPlaceholder = styled(TextPlaceholder)`
grid-area: explanation-3;
`;
const SecondColumnExplanationPlaceholder = styled(TextPlaceholder)`
grid-area: explanation-2;
`;
const H3 = styled.h3`
  text-align: left;
  color: ${(props) => props.theme.primary};
  letter-spacing: 1px;
  padding: 1rem 0 0 0;
  margin: 0;
  font-weight: 400;
  font-size: 1.25rem;
  `
  const FirstColumnH3 = styled(H3)`
  grid-area: title;
  `;
  const SecondColumnH3 = styled(H3)`
  grid-area: explanationTitle;
  `;

const P = styled.p`
  text-align: flex-start;
  color: ${(props) => props.theme.primary};
  text-align: left;
  font-size: 1rem;
  padding: 1rem 0 0 0;
  margin: 0;
  line-height: 1.5;
`;
const FirstColumnP = styled(P)`
  grid-row-start: date;
  grid-row-end: backlink;
`;

const SecondColumnP = styled(P)`
grid-row-start: explanation-1;
  grid-row-end: explanation-4;

@media only screen and (min-width: 64rem) {
  margin-top: -0.25rem;
};
`;


const ShortText = styled(P)`
overflow: hidden;
text-overflow: ellipsis;
grid-area: date;
`;

const CopyrightText = styled(ShortText)`
grid-area: copyright;
`;

const Note = styled.p`
  text-align: flex-start;
  color: ${(props) => props.theme.primary};
  text-align: flex-start;
  font-size: 0.625rem;
  padding: 0.25rem 0 0 0;
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

const EarthLink = styled(NavLink)`
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

&:focus {
    border: 2px dotted ${(props) => props.theme.quartenary};
    border-radius: 50%;
    outline: none;
  };
`

const EarthIcon = styled.img`
  width: 5rem;
  height: auto;
  cursor: pointer;
  padding: 0;

  &:hover {
    opacity: 0.75;
  };
`;

const Iframe = styled("iframe")`
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
              placeholder="yyyy-mm-dd"
              value={date}
            ></DateInput>
            <SearchButton type="submit">Search</SearchButton>
          </Form>
          <Note>
            Please note, you can only search for a date between 2015-01-01 and
            today.
          </Note>
          <Main>
            {isFetching && (<><PlaceholderCard>
            <FirstColumnHeadlinePlaceholder />
            <ImagePlaceholder />
            <FirstColumnDatePlaceholder />
            <FirstColumnCopyrightPlaceholder />
            <SecondColumnHeadlinePlaceholder />
            <ExplanationPlaceholder />
            <SecondColumnExplanationPlaceholder />
            <SecondColumnTextPlaceholder />

          </PlaceholderCard></>)}
            {!isFetching && nasaInfos &&(<>
              <Card>
                <FirstColumnH3>{nasaInfos.title}</FirstColumnH3>
                {!nasaInfos.title ? (nasaInfos.media_type === "video" ? <FirstColumnP>Astronomy Video of the Day:</FirstColumnP> : <FirstColumnP>Astronomy Picture of the Day:</FirstColumnP>) : null}
                {nasaInfos.media_type === "video" ? (
                  <Iframe src={nasaInfos.url}></Iframe>
                )
                :(<Img src={nasaInfos.hdurl} />)}
                <ShortText>Date: {nasaInfos.date}</ShortText>
                {nasaInfos.copyright && <CopyrightText>© {nasaInfos.copyright}</CopyrightText>}
                {nasaInfos.explanation &&(<><SecondColumnH3>Explanation:</SecondColumnH3>
                <SecondColumnP>{nasaInfos.explanation}</SecondColumnP></>)}
                {nasaInfos.media_type === "video" ? (
                  <A href={nasaInfos.url} target="_blank">
                    Open picture in new Window!
                  </A>
                ) : (
                  <A href={nasaInfos.hdurl} target="_blank">
                    Open picture in new Window!
                  </A>)}
              </Card>
            <EarthLink to="/">
              <EarthIcon src="/images/globe.png" />
            </EarthLink>
            <P>Back to planet Earth!</P></>)}
          </Main>
        </CContainer>
      </PContainer>
    </>
  );
}
