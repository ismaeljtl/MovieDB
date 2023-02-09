import { GetStaticPaths, GetStaticProps } from "next";
import Link from "next/link";
import React from "react";
import { IMovie } from "../../interfaces/NowPlayingMovies.interface";
import IData from "../../interfaces/Data";
import {
  geMovieDetails,
  getNowPlayingMovies,
  IGetNowPlayingMovieResponse,
  IMovieDetailsResponse,
} from "../../services/moviedb";
import { IMovieDetails } from "../../interfaces/MovieDetails.interface";
import Error from "../../components/Error";
import LoadingCardGrid from "../../components/LoadingCardGrid";
import MovieDetails from "../../components/MovieDetails";

interface IDetailsResponse {
  isOk: boolean;
  data: IMovieDetails | null;
  error: string | null;
}

const Details: React.FC<IDetailsResponse> = ({ data, error }) => {
  if (error) {
    return <Error errorMsg={error} />;
  }
  if (!data) {
    return <LoadingCardGrid numCards={9} />;
  }
  return <MovieDetails data={data} />;
};

export const getStaticProps: GetStaticProps = async (context) => {
  const id: any = context.params!.id;
  let response: IMovieDetailsResponse = await geMovieDetails(id);

  return { props: response, revalidate: 604800 };
};

export const getStaticPaths = async () => {
  let promiseArr = [];
  let moviesArr: IMovie[] = [];
  let response: IDetailsResponse;
  try {
    for (let i = 0; i < 8; i++) {
      promiseArr.push(getNowPlayingMovies(i + 1));
    }
    const resArr: IGetNowPlayingMovieResponse[] = await Promise.all(promiseArr);
    moviesArr = resArr.map((item) => item.data!.results).flat();
  } catch (error) {
    moviesArr = [];
  }

  const paths = moviesArr.map((movie: IMovie) => ({
    params: {
      id: movie.id.toString(),
    },
  }));

  // We'll pre-render only these paths at build time.
  // { fallback: blocking } will server-render pages
  // on-demand if the path doesn't exist.
  return { paths, fallback: "blocking" };
};

export default Details;
