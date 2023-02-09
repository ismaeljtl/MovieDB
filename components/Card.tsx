import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IMovie } from "../interfaces/NowPlayingMovies.interface";

const Card: React.FC<{ movie: IMovie }> = ({ movie }) => {
  return (
    <Link
      href={`/details/${movie.id}`}
      key={movie.id}
      className="card bg-base-100 shadow-xl"
    >
      <figure className="relative pb-[150%]">
        <Image
          className="w-full h-full object-cover"
          src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
          alt={movie.title}
          fill
        />
      </figure>
      <div className="card-body p-4">
        <div className="flex justify-between">
          <small>{new Date(movie.release_date).getFullYear()}</small>
          <small>
            <label className="mr-1">★</label>
            {movie.vote_average}
          </small>
        </div>
        <h2 className="card-title">{movie.title}</h2>
      </div>
    </Link>
  );
};

export default Card;
