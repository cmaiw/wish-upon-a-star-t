import React from 'react';
import { useNavigate } from 'react-router-dom';
import DateInput from "../../components/DateInput/DateInput";
import { SearchButton } from "../../components/SearchButton/SearchButton"
import { NasaDataProps } from '../NasaInfos/NasaInfos';
import { Form, PContainer, Hint, PlaceholderContainer, LoadingPlaceholderBlockBig, LoadingPlaceholderBlockSmall, GalleryContainer, SpaceImageWrapper, SpaceImage, DetailPageButton, RocketIcon, SpaceVideo } from './styles';



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