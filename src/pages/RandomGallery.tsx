import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from '@emotion/styled';
import DateInput from "../components/DateInput";
import { SearchButton } from "../components/SearchButton"
import {fadeIn, fadeOut } from "../utils/animations"
import { NasaDataProps } from './NasaInfos';

const PContainer = styled.div`
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

const Form = styled.form`
margin: 1rem 0;
display: flex;
flex-direction: row;
width: 100%;
justify-content: space-around;
align-items: flex-start;
padding: 1rem;
`

const GalleryContainer = styled.div`
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
const SpaceImageWrapper = styled.div`
width: 100%;
height: auto;
margin: 0;
padding: 0;
background: transparent;
outline: none;
border: none;
position: relative;
`

const SpaceImage = styled.img`
width: 100%;
height: auto;
padding-bottom: 0.25rem;
`
const SpaceVideo = styled.iframe`
width: 100%;
height: auto;
border: none;
padding-bottom: 0.25rem;
`

const DetailPageButton = styled.button<{isFetching: boolean}>`
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

const RocketIcon = styled.img`
width: 2rem;
height: auto;
padding: 0.25rem;
`
const Hint = styled.p`
text-align: flex-start;
  color: ${(props) => props.theme.primary};
  text-align: flex-start;
  font-size: 0.825rem;
  padding: 1rem;
  margin: -1.5rem 0 0.5rem 0;
`

const PlaceholderContainer = styled(GalleryContainer)`
animation: ${fadeOut} 3s ease-out;
`

const LoadingPlaceholderBlockBig = styled.div`
width: 100%;
height: 15rem;
margin: 0.25rem;
background-color: ${(props) => props.theme.primary};
opacity: 0.1;
`
const LoadingPlaceholderBlockSmall = styled.div`
width: 100%;
height: 10rem;
margin: 0.25rem;
background-color: ${(props) => props.theme.primary};
opacity: 0.1;
`

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
    const defaultEndDateMilliseconds = Date.now()
    const defaultEndDate = new Date(defaultEndDateMilliseconds).toISOString().slice(0, 10)
    const defaultStartDate = new Date(defaultEndDateMilliseconds - 1209600000).toISOString().slice(0, 10)
    const params = new URLSearchParams(window.location.search)
    const navigate = useNavigate()
    const [nasaInfos, setNasaInfos] = React.useState<NasaDataProps[]>([initialNasaDataState]);
    const [startDate, setStartDate] = React.useState<string>(defaultStartDate);
    const [endDate, setEndDate] = React.useState<string>(defaultEndDate);
    const [query, setQuery] = React.useState<string>(params.has('start_date') ? `&${params.toString()}` : `&start_date=${defaultStartDate}&end_date=${defaultEndDate}`);
    const [isFetching, setIsFetching] = React.useState<boolean>(false) 
    
    React.useEffect(() => {
      async function getNasaDatabyDate() {
        const REACT_APP_API_KEY = process.env.REACT_APP_API_KEY;
        const response = await fetch(
          `https://api.nasa.gov/planetary/apod?api_key=${REACT_APP_API_KEY}${query && query.replace('?', '&')}`
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
      }, [query, defaultEndDate, defaultStartDate]);
      const updateStartDate = (e) => {
        setStartDate(e.target.value);
      };
  
      const updateEndDate = (e) => {
        setEndDate(e.target.value);
      };
    
      const getDate = (e) => {
        e.preventDefault();
        setQuery(window.location.pathname.includes('start_date') ? `&${params.toString()}` :`&start_date=${startDate}&end_date=${endDate}`);
        setStartDate('');
        setEndDate('');
      };
  

    const handleClick = (query, date) => {
     navigate(`/detail-page/${!query ? `&start_date=${defaultStartDate}&end_date=${defaultEndDate}/${date}` : `${query}/${date}`}`);
      window.scroll(0,0)
    }

    return (
    <PContainer>
        <Form onSubmit={getDate}>
        <DateInput
          onChange={updateStartDate}
          type="date"
          placeholder="yyyy-mm-dd"
          value={startDate === defaultStartDate ? '' : startDate}
        /><DateInput onChange={updateEndDate}
        type="date"
        placeholder="yyyy-mm-dd"
        value={endDate === defaultEndDate ? '' : endDate}/>
        <SearchButton type="submit" aria-label='submit-date-range'>Search</SearchButton>
      </Form>
        <Hint>Please note: you can only search for date ranges between 2015-01-01 and today.</Hint>
         {isFetching && (
         <PlaceholderContainer>
           <LoadingPlaceholderBlockBig />
           <LoadingPlaceholderBlockBig />
           <LoadingPlaceholderBlockBig />
           <LoadingPlaceholderBlockSmall />
           <LoadingPlaceholderBlockBig />
           <LoadingPlaceholderBlockBig />
           <LoadingPlaceholderBlockSmall />
           <LoadingPlaceholderBlockBig />
           <LoadingPlaceholderBlockSmall />
           <LoadingPlaceholderBlockBig />
        </PlaceholderContainer>
        )}
        {!isFetching && 
        <GalleryContainer> {nasaInfos.length > 0 && nasaInfos.map((item) => item.media_type === 'image' 
         ? <SpaceImageWrapper key={item.date}>
             <SpaceImage src={item.url} alt={item.title} />
             <DetailPageButton 
                onClick={() => handleClick(query, item.date)}
                isFetching={isFetching}
                aria-label={`to-detail-page-${item.title}`}
              >
                 details: <RocketIcon src="/images/rocket.png" alt="rocket-icon" />
                 </DetailPageButton>
             </SpaceImageWrapper>
             : item.media_type === 'video'
             ? <SpaceImageWrapper key={item.date}>
                 <SpaceVideo src={item.url} title={item.title} sandbox="allow-scripts allow-same-origin allow-presentation"/><DetailPageButton onClick={() => handleClick(query, item.date)} isFetching={isFetching}>
                     details: <RocketIcon src="/images/rocket.png" alt="rocket-icon" />
                     </DetailPageButton>
                     </SpaceImageWrapper>
             : null
             )}
         </GalleryContainer>}
      </PContainer>)}