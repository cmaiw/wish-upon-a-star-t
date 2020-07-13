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
  max-width: 80%;
  max-height: auto;
  background-color: ${(props) => props.theme.secondary};
`;

const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-width: 98%;
  height: auto;
  padding: 0;
  background-color: ${(props) => props.theme.secondary};
  color: ${(props) => props.theme.primary};
`;
const Card = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 900px;
  min-width: 98%;
  justify-content: center;
  align-items: center;
  font-family: "Orbitron", sans-serif;
  font-size: 1.2rem;
  color: ${(props) => props.theme.primary};
  background-color: ${(props) => props.theme.secondary};
  padding-bottom: 30px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: row;
  min-width: 98%;
  height: auto;
  justify-content: space-between;
  align-items: center;
  padding: 80px 20px 00px 20px;
  background-color: ${(props) => props.theme.secondary};
`;

const Img = styled.img`
  display: flex;
  width: 98%;
  min-height: 250px;
  border: 5px solid ${(props) => props.theme.quinary};
  background-color; ${(props) => props.theme.quinary};
  margin: auto;
  padding: auto;
  border-radius: 12px;
`;

const SearchButton = styled.button`
  display: flex;
  align-self: flex-start;
  justify-content: center;
  align-items: center;
  width: 20%;
  height: 36px;
  background-color: ${(props) => props.theme.primary};
  color: ${(props) => props.theme.secondary};
  border-radius: 12px;
  border: 2px solid ${(props) => props.theme.quinary};
  padding: auto;
  margin-top: 40px;
  margin-left: 10px;
  font-size: 0.6em;
  outline: none;
  cursor: pointer;
  font-family: "Orbitron", sans-serif;
  &:hover {
    color: ${(props) => props.theme.quartenary};
  }
`;

const H3 = styled.h2`
  color: ${(props) => props.theme.primary};
  text-align: center;
  letter-spacing: 2px;
`;

const H4 = styled.h3`
  text-align: center;
  color: ${(props) => props.theme.primary};
  letter-spacing: 1px;
`;

const P = styled.p`
  text-align: flex-start;
  color: ${(props) => props.theme.primary};
  text-align: flex-start;
`;

const Note = styled.p`
  text-align: flex-start;
  color: ${(props) => props.theme.primary};
  text-align: flex-start;
  padding-left: 20px;
  font-size: 12px;
  padding-top: 0px;
`;

const A = styled.a`
  text-align: center;
  color: ${(props) => props.theme.tertiary};
  text-decoration: none;
  margin-bottom: 30px;
  &:hover {
    color: ${(props) => props.theme.quartenary};
    border: 2px solid ${(props) => props.theme.quartenary};
  }
  &:active: {
    color: ${(props) => props.theme.quinary};
  }
`;

const EarthIcon = styled.img`
  width: 80px;
  height: 95px;
  opacity: 0.5;
  padding-bottom: 20px;
  cursor: pointer;
  &:hover {
    opacity: 0.95;
  }
`;

const Iframe = styled("iframe")`
display: flex;
  max-width: 98%;
  height: auto;
  border: 5px solid ${(props) => props.theme.quinary};
  background-color; ${(props) => props.theme.quinary};
  margin: auto;
  padding: 0px;
  border-radius: 12px;
`;

export default function NasaInfos() {
  const [nasaInfos, setNasaInfos] = React.useState([]);
  const [date, setDate] = React.useState("");
  const [query, setQuery] = React.useState("");

  async function getNasaDatabyDate() {
    const REACT_APP_API_KEY = process.env.REACT_APP_API_KEY;
    const response = await fetch(
      `https://api.nasa.gov/planetary/apod?api_key=${REACT_APP_API_KEY}&date=${query}`
    );
    const data = await response.json();
    return data;
  }

  async function refreshNasa() {
    const nasaData = await getNasaDatabyDate();
    setNasaInfos(nasaData);
  }

  React.useEffect(() => {
    refreshNasa();
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
            {nasaInfos && (
              <Card>
                <H4>{nasaInfos.title}</H4>
                <P>Astronomy Picture of the Day: </P>
                <H4>{nasaInfos.title}</H4>
                <P>Astronomy Picture of the Day: </P>
                {nasaInfos.media_type === "video" ? (
                  <Iframe src={nasaInfos.url}></Iframe>
                ) : (
                  <Img src={nasaInfos.hdurl} />
                )}
                <P>Date: {nasaInfos.date}</P>
                <P>© {nasaInfos.copyright}</P>
                <H3>Explanation:</H3>
                <P>{nasaInfos.explanation}</P>
                {nasaInfos.media_type === "video" ? (
                  <A href={nasaInfos.url} target="_blank">
                    Open picture in new Window!
                  </A>
                ) : (
                  <A href={nasaInfos.hdurl} target="_blank">
                    Open picture in new Window!
                  </A>
                )}
              </Card>
            )}
            <NavLink to="/">
              <EarthIcon src="/images/globe.png" />
            </NavLink>
            <P>Back to planet Earth!</P>
          </Main>
        </CContainer>
      </PContainer>
    </>
  );
}
