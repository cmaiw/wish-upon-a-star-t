import React from "react";
import DateInput from "../../components/DateInput/DateInput";
import { SearchButton } from "../../components/SearchButton/SearchButton"
import { useNavigate, useParams } from "react-router-dom";
import { 
  A, 
  ArticlePlaceholder, 
  BackButton, BacklinkIcon, 
  Card, 
  CContainer, 
  CopyrightText, 
  EarthIcon, 
  EarthLink, 
  FirstColumnH3, 
  FirstColumnP, 
  FirstColumnPlaceholder, 
  Form, 
  Iframe, 
  Img, 
  Main, 
  Note, 
  P, 
  PContainer, 
  PlaceholderCard, 
  SecondColumnP, 
  SecondColumnPlaceholder, 
  ShortText, 
  TextPlaceholder 
} from "./styles";

export interface NasaDataProps {
date?: string
explanation?: string
media_type?: string
service_version?: string
title?: string
url?: string
hdurl?: string
copyright?: string
}
export default function NasaInfos() {
  const initialNasaDataState = {
    date: undefined,
    explanation: undefined,
    media_type: undefined,
    service_version: undefined,
    title: undefined,
    url: undefined,
    copyright: undefined
  }
  const today = new Date(Date.now()).toISOString().slice(0, 10)
  const [nasaInfos, setNasaInfos] = React.useState<NasaDataProps>(initialNasaDataState);
  const [date, setDate] = React.useState<string>(today);
  const [query, setQuery] = React.useState<string>("");
  // eslint-disable-next-line no-unused-vars
  const [isFetching, setIsFetching] = React.useState<boolean>(true);
  const {entryDate} = useParams();
  const navigate = useNavigate()

  React.useEffect(() => {
    async function getNasaDatabyDate() {
      const REACT_APP_API_KEY = process.env.REACT_APP_API_KEY;
      const response = await fetch(
        `https://api.nasa.gov/planetary/apod?api_key=${REACT_APP_API_KEY}&date=${query || entryDate || ''}`
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
  }, [query, entryDate]);

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
            <SearchButton type="submit" aria-label='submit-date'>Search</SearchButton>
          </Form>
          <Note>
            Please note, you can only search for a date between 2015-01-01 and
            today.
          </Note>
          {window.location.pathname.includes('detail-page') && 
          <BackButton onClick={()=> navigate(`/gallery/?${window.location.pathname.slice(14, -11)}`)} aria-label="button-go-back">
            <BacklinkIcon src="/images/fast-forward.png" alt="backlink"/>
            </BackButton>}
          <Main>
            {isFetching && (<><PlaceholderCard>
              <FirstColumnPlaceholder>
            <TextPlaceholder />
            <ArticlePlaceholder />
            <TextPlaceholder />
            <TextPlaceholder />
            <TextPlaceholder />
            <TextPlaceholder />
            </FirstColumnPlaceholder>
            <SecondColumnPlaceholder>
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
            <TextPlaceholder />
            </SecondColumnPlaceholder>
            </PlaceholderCard></>)}
            {!isFetching && nasaInfos &&(<>
              <Card>
                <FirstColumnH3>{nasaInfos.title}</FirstColumnH3>
                {!nasaInfos.title ? (nasaInfos.media_type === "video" ? <FirstColumnP>Astronomy Video of the Day:</FirstColumnP> : <FirstColumnP>Astronomy Picture of the Day:</FirstColumnP>) : null}
                {nasaInfos.media_type === "video" ? (
                  <Iframe src={nasaInfos.url} title={nasaInfos.title} sandbox='allow-scripts allow-same-origin allow-presentation'/>
                )
                :(<Img src={nasaInfos.url} alt={nasaInfos.title} />)}
                <ShortText>Date: {nasaInfos.date}</ShortText>
                {nasaInfos.copyright && <CopyrightText>© {nasaInfos.copyright}</CopyrightText>}
                {nasaInfos.explanation &&(<>
                <SecondColumnP>{nasaInfos.explanation}</SecondColumnP></>)}
                {nasaInfos.media_type === "video" ? (
                  <A href={nasaInfos.url} rel="noopener noreferrer" target="_blank" >
                    Open video in new Window!
                  </A>
                ) : (
                  <A href={nasaInfos.hdurl} rel="noopener noreferrer" target="_blank">
                    Open picture in new Window!
                  </A>)}
              </Card>
            <EarthLink to="/" aria-label={`${nasaInfos.title}-hd-url`} >
              <EarthIcon src="/images/globe.png" alt="earth-icon" />
            </EarthLink>
            <P>Back to planet Earth!</P></>)}
          </Main>
        </CContainer>
      </PContainer>
    </>
  );
}
