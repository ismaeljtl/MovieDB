import { IMovieDetails } from "../interfaces/MovieDetails.interface";
import { INowPlayingMovie } from "../interfaces/NowPlayingMovies.interface";

export interface IGetNowPlayingMovieResponse {
  isOk: boolean;
  data: INowPlayingMovie | null;
  error: string | null;
}

export interface IMovieDetailsResponse {
  isOk: boolean;
  data: IMovieDetails | null;
  error: string | null;
}

export const getNowPlayingMovies = async (
  page = 1
): Promise<IGetNowPlayingMovieResponse> => {
  try {
    if (!process.env.NEXT_PUBLIC_API_URL || !process.env.NEXT_PUBLIC_API_KEY)
      return {
        isOk: false,
        data: null,
        error: "API URL or API Key not configured.",
      };
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/movie/now_playing?page=${page}&api_key=${process.env.NEXT_PUBLIC_API_KEY}`
    );
    const data = await res.json();
    return {
      isOk: true,
      data: data,
      error: null,
    };
  } catch (error) {
    return {
      isOk: false,
      data: null,
      error:
        "There has been an error when trying to get the data. Please, try again.",
    };
  }
};

export const geMovieDetails = async (
  movieId: number
): Promise<IMovieDetailsResponse> => {
  try {
    if (!process.env.NEXT_PUBLIC_API_URL || !process.env.NEXT_PUBLIC_API_KEY)
      return {
        isOk: false,
        data: null,
        error: "API URL or API Key not configured.",
      };
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/movie/${movieId}?api_key=${process.env.NEXT_PUBLIC_API_KEY}`
    );
    const data = await res.json();
    if (data.success === false) {
      return {
        isOk: false,
        data: null,
        error:
          "There has been an error when trying to get the data. Please, try again.",
      };
    }
    return {
      isOk: true,
      data: data,
      error: null,
    };
  } catch (error) {
    return {
      isOk: false,
      data: null,
      error:
        "There has been an error when trying to get the data. Please, try again.",
    };
  }
};
