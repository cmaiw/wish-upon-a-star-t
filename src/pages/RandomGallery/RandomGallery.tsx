import React from "react";
import { useNavigate } from "react-router-dom";
import DateInput from "../../components/DateInput/DateInput";
import { SearchButton } from "../../components/SearchButton/SearchButton";
import { NasaDataProps } from "../NasaInfos/NasaInfos";
import { ErrorOverlay } from "../NasaInfos/styles";
import {
  Form,
  PContainer,
  Hint,
  SpaceImageWrapper,
  SpaceImage,
  DetailPageButton,
  RocketIcon,
  SpaceVideo,
} from "./styles";
import { GalleryContainer } from "../../components/shared/SharedContainers";
import { GallerySkeleton } from "../../components/Skeleton/Skeleton";

export default function NasaInfos() {
  const initialNasaDataState = {
    date: undefined,
    explanation: undefined,
    media_type: undefined,
    service_version: undefined,
    title: undefined,
    url: undefined,
    copyright: undefined,
    msg: null,
    code: null,
  };
  const defaultEndDateMilliseconds = Date.now();
  const defaultEndDate = new Date(defaultEndDateMilliseconds)
    .toISOString()
    .slice(0, 10);
  const defaultStartDate = new Date(defaultEndDateMilliseconds - 1209600000)
    .toISOString()
    .slice(0, 10);
  const params = new URLSearchParams(window.location.search);
  const navigate = useNavigate();
  const [nasaInfos, setNasaInfos] = React.useState<NasaDataProps[]>([
    initialNasaDataState,
  ]);
  const [startDate, setStartDate] = React.useState<string>(defaultStartDate);
  const [endDate, setEndDate] = React.useState<string>(defaultEndDate);
  const [query, setQuery] = React.useState<string>(
    params.has("start_date")
      ? `&${params.toString()}`
      : `&start_date=${defaultStartDate}&end_date=${defaultEndDate}`
  );
  const [isFetching, setIsFetching] = React.useState<boolean>(false);
  const [isError, setIsError] = React.useState<boolean>(false);
  const [errorMessage, setErrorMessage] = React.useState<string | null>(null);

  React.useEffect(() => {
    const REACT_APP_API_KEY = process.env.REACT_APP_API_KEY;
    const url = `https://api.nasa.gov/planetary/apod?api_key=${REACT_APP_API_KEY}${
      query && query.replace("?", "&")
    }`;

    async function fetchDataByDateRange(url: string) {
      try {
        const response = await fetch(url, {
          method: "GET",
          mode: "cors",
        });
        const data = await response.json();
        if (!data.msg && !data.code) {
          return data;
        }
        if (data.msg || data.code) {
          setErrorMessage(`Error Code: ${data.code}- ${data.msg}`);
          setIsError(true);
        }
      } catch (error) {
        setErrorMessage(
          "You mast have passed a black hole, all data is gone. Please try again later!"
        );
        setIsError(true);
      }
    }

    async function refreshNasa() {
      setIsFetching(true);
      const nasaData = await fetchDataByDateRange(url);
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
    setQuery(
      window.location.pathname.includes("start_date")
        ? `&${params.toString()}`
        : `&start_date=${startDate}&end_date=${endDate}`
    );
    setStartDate("");
    setEndDate("");
  };

  const handleClick = (query, date) => {
    navigate(
      `/detail-page/${
        !query
          ? `&start_date=${defaultStartDate}&end_date=${defaultEndDate}/${date}`
          : `${query}/${date}`
      }`
    );
    window.scroll(0, 0);
  };

  return (
    <PContainer data-testid='gallery-page-container'>
      {isError ? (
        <ErrorOverlay>
          {errorMessage}{" "}
          <SearchButton onClick={() => window.location.reload()}>
            Refreshe page
          </SearchButton>
        </ErrorOverlay>
      ) : (
        <>
          <Form onSubmit={getDate} data-testid='form'>
            <DateInput
              onChange={updateStartDate}
              type='date'
              placeholder='yyyy-mm-dd'
              value={startDate === defaultStartDate ? "" : startDate}
              data-testid='date-input-start'
            />
            <DateInput
              onChange={updateEndDate}
              type='date'
              placeholder='yyyy-mm-dd'
              value={endDate === defaultEndDate ? "" : endDate}
              data-testid='date-input-end'
            />
            <SearchButton
              type='submit'
              aria-label='submit-date-range'
              data-testid='saubmit-daterange-button'
            >
              Search
            </SearchButton>
          </Form>
          <Hint data-testid='hint'>
            Please note: you can only search for date ranges between June 16,
            1995 and today.
          </Hint>
          {isFetching && <GallerySkeleton />}
          {!isFetching && (
            <GalleryContainer data-testid='gallery-container'>
              {" "}
              {nasaInfos.length > 0 &&
                nasaInfos.map((item) =>
                  item.media_type === "image" ? (
                    <SpaceImageWrapper
                      key={item.date}
                      data-testid='space-image-wrapper'
                    >
                      <SpaceImage
                        src={item.url}
                        alt={item.title}
                        data-testid='space-image'
                      />
                      <DetailPageButton
                        onClick={() => handleClick(query, item.date)}
                        isFetching={isFetching}
                        aria-label={`to-detail-page-${item.title}`}
                        data-testid='detail-button'
                      >
                        details:{" "}
                        <RocketIcon
                          src='/images/rocket.png'
                          alt='rocket-icon'
                          data-testid='rocket-icon'
                        />
                      </DetailPageButton>
                    </SpaceImageWrapper>
                  ) : item.media_type === "video" ? (
                    <SpaceImageWrapper
                      key={item.date}
                      data-testid='space-video-wrapper'
                    >
                      <SpaceVideo
                        src={item.url}
                        title={item.title}
                        sandbox='allow-scripts allow-same-origin allow-presentation'
                        data-testid='iframe'
                      />
                      <DetailPageButton
                        onClick={() => handleClick(query, item.date)}
                        isFetching={isFetching}
                      >
                        details:{" "}
                        <RocketIcon
                          src='/images/rocket.png'
                          alt='rocket-icon'
                          data-testid='rocket-icon'
                        />
                      </DetailPageButton>
                    </SpaceImageWrapper>
                  ) : null
                )}
            </GalleryContainer>
          )}
        </>
      )}
    </PContainer>
  );
}
