import { FC, useEffect, useState } from "react";
import LoadingCardGrid from "../components/LoadingCardGrid";
import { IMovie } from "../interfaces/NowPlayingMovies.interface";
import CardGrid from "../components/CardGrid";
import Error from "../components/Error";
import {
  getNowPlayingMovies,
  IGetNowPlayingMovieResponse,
} from "../services/moviedb";

interface IHomeResponse {
  isOk: boolean;
  data: IMovie[] | null;
  error: string | null;
}

const Home: React.FC<IHomeResponse> = ({ data, error }) => {
  return (
    <>
      {error && <Error errorMsg={error} />}
      {!data && <LoadingCardGrid numCards={9} />}
      {data && <CardGrid data={data} />}
    </>
  );
};

export async function getStaticProps() {
  let promiseArr = [];
  let response: IHomeResponse;
  try {
    for (let i = 0; i < 8; i++) {
      promiseArr.push(getNowPlayingMovies(i + 1));
    }
    const resArr: IGetNowPlayingMovieResponse[] = await Promise.all(promiseArr);
    const moviesArr: IMovie[] = resArr.map((item) => item.data!.results).flat();
    response = { isOk: true, data: moviesArr, error: null };
  } catch (error) {
    response = {
      isOk: false,
      data: null,
      error: "There was a problem getting the data. Please, try again later",
    };
  }

  return {
    props: response,
    revalidate: 604800,
  };
}

export default Home;
