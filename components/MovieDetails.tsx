import Link from "next/link";
import React from "react";
import { IMovieDetails } from "../interfaces/MovieDetails.interface";

interface Genre {
  id: number;
  name: string;
}

const MovieDetails: React.FC<{ data: IMovieDetails }> = ({ data }) => {
  return (
    <div className="px-2 md:px-0">
      <Link href="/" className="no-underline">
        ← Back to Movies
      </Link>
      <div
        className="mt-4 rounded-xl mb-4 bg-center bg-cover bg-no-repeat"
        style={{
          backgroundImage: `url(
            'https://image.tmdb.org/t/p/original/${data.backdrop_path}'
          )`,
        }}
      >
        <div className="bg-black bg-opacity-60 rounded-xl py-8 px-6">
          <div className="flex flex-col prose">
            <label className="text-white mb-60">
              {new Date(data.release_date).getFullYear()}
            </label>
            <h1 className="text-5xl capitalize text-white m-0">{data.title}</h1>
            <i className="mt-1 text-white text-lg">{data.tagline}</i>
            <div className="mt-4">
              <Link
                className="btn btn-primary"
                href={`https://imdb.com/title/${data.imdb_id}`}
                target="_blank"
              >
                More info
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="prose mt-8">
        <p className="mr-1 mb-0">
          ★ {data.vote_average} ({data.vote_count} votes)
        </p>
        <b>Genres: </b>
        {data.genres.map((genre: Genre, idx: number) => (
          <label key={genre.id}>
            {genre.name}
            {idx !== data.genres.length - 1 ? ", " : ""}
          </label>
        ))}
        <br />
        <p>{data.overview}</p>
      </div>
    </div>
  );
};

export default MovieDetails;

// className={`bg-[url('https://image.tmdb.org/t/p/original/${data.backdrop_path}')]`}
