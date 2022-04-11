import React from "react";
import DateInput from "../../components/DateInput/DateInput";
import { SearchButton } from "../../components/SearchButton/SearchButton";
import { useNavigate, useParams } from "react-router-dom";
import {
  A,
  BackButton,
  BacklinkIcon,
  Card,
  CContainer,
  CopyrightText,
  EarthIcon,
  EarthLink,
  ErrorOverlay,
  FirstColumnH3,
  FirstColumnP,
  Form,
  Iframe,
  Img,
  Main,
  Note,
  P,
  PContainer,
  SecondColumnP,
  ShortText,
} from "./styles";
import { SkeletonNasaInfos } from "../../components/Skeleton/Skeleton";

export interface NasaDataProps {
  date?: string;
  explanation?: string;
  media_type?: string;
  service_version?: string;
  title?: string;
  url?: string;
  hdurl?: string;
  copyright?: string;
  code: null | string;
  msg: null | string;
}
export default function NasaInfos() {
  const initialNasaDataState = {
    date: undefined,
    explanation: undefined,
    media_type: undefined,
    service_version: undefined,
    title: undefined,
    url: undefined,
    copyright: undefined,
    code: null,
    msg: null,
  };
  const today = new Date(Date.now()).toISOString().slice(0, 10);
  const [nasaInfos, setNasaInfos] =
    React.useState<NasaDataProps>(initialNasaDataState);
  const [date, setDate] = React.useState<string>(today);
  const [query, setQuery] = React.useState<string>("");
  // eslint-disable-next-line no-unused-vars
  const [isFetching, setIsFetching] = React.useState<boolean>(true);
  const [isError, setIsError] = React.useState<boolean>(false);
  const [errorMessage, setErrorMessage] = React.useState<string | null>(null);
  const { entryDate } = useParams();
  const navigate = useNavigate();

  React.useEffect(() => {
    const REACT_APP_API_KEY = process.env.REACT_APP_API_KEY;
    const url = `https://api.nasa.gov/planetary/apod?api_key=${REACT_APP_API_KEY}&date=${
      query || entryDate || ""
    }`;
    async function fetchDataByDate(url: string) {
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
      const nasaData = await fetchDataByDate(url);
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
      <PContainer data-testid='apod-infos-container'>
        <CContainer data-testid='info-card-container'>
          {isError ? (
            <>
              <ErrorOverlay>
                {errorMessage}{" "}
                <SearchButton onClick={() => window.location.reload()}>
                  Refreshe page
                </SearchButton>
              </ErrorOverlay>
            </>
          ) : (
            <>
              <Form onSubmit={getDate}>
                <DateInput
                  onChange={updateDate}
                  type='date'
                  placeholder='yyyy-mm-dd'
                  value={date}
                  data-testid='date-input'
                ></DateInput>
                <SearchButton
                  type='submit'
                  aria-label='submit-date'
                  data-testid='search-button'
                >
                  Search
                </SearchButton>
              </Form>
              <Note>
                Please note, you can only search for a date between June 16,
                1995 and today.
              </Note>
              {window.location.pathname.includes("detail-page") && (
                <BackButton
                  onClick={() =>
                    navigate(
                      `/gallery/?${window.location.pathname.slice(14, -11)}`
                    )
                  }
                  aria-label='button-go-back'
                  data-testid='back-button'
                >
                  <BacklinkIcon
                    src='/images/fast-forward.png'
                    alt='backlink'
                    data-testid='backlink-icon'
                  />
                </BackButton>
              )}
              <Main>
                {isFetching && <SkeletonNasaInfos />}
                {!isFetching && nasaInfos && (
                  <>
                    <Card data-testis='apod-info-card'>
                      <FirstColumnH3 data-testid='heading-h3'>
                        {nasaInfos.title}
                      </FirstColumnH3>
                      {!nasaInfos.title ? (
                        nasaInfos.media_type === "video" ? (
                          <FirstColumnP data-testid='video-subtitle'>
                            Astronomy Video of the Day:
                          </FirstColumnP>
                        ) : (
                          <FirstColumnP data-testid='picture-subtitle'>
                            Astronomy Picture of the Day:
                          </FirstColumnP>
                        )
                      ) : null}
                      {nasaInfos.media_type === "video" ? (
                        <Iframe
                          src={nasaInfos.url}
                          title={nasaInfos.title}
                          sandbox='allow-scripts allow-same-origin allow-presentation'
                          data-testid='iframe'
                        />
                      ) : (
                        <Img
                          src={nasaInfos.url}
                          alt={nasaInfos.title}
                          data-testid='apod-image'
                        />
                      )}
                      <ShortText data-testid='date'>
                        Date: {nasaInfos.date}
                      </ShortText>
                      {nasaInfos.copyright && (
                        <CopyrightText data-testid='copyright'>
                          © {nasaInfos.copyright}
                        </CopyrightText>
                      )}
                      {nasaInfos.explanation && (
                        <>
                          <SecondColumnP data-testid='explanation'>
                            {nasaInfos.explanation}
                          </SecondColumnP>
                        </>
                      )}
                      {nasaInfos.media_type === "video" ? (
                        <A
                          href={nasaInfos.url}
                          rel='noopener noreferrer'
                          target='_blank'
                          data-testid='external-video-link'
                        >
                          Open video in new Window!
                        </A>
                      ) : (
                        <A
                          href={nasaInfos.hdurl}
                          rel='noopener noreferrer'
                          target='_blank'
                          data-testid='external-picture-link'
                        >
                          Open picture in new Window!
                        </A>
                      )}
                    </Card>
                    <EarthLink
                      to='/'
                      aria-label={`${nasaInfos.title}-hd-url`}
                      data-testid='earth-link'
                    >
                      <EarthIcon
                        src='/images/globe.png'
                        alt='earth-icon'
                        data-tetstid='earth-icon'
                      />
                    </EarthLink>
                    <P>Back to planet Earth!</P>
                  </>
                )}
              </Main>
            </>
          )}
        </CContainer>
      </PContainer>
    </>
  );
}
