import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
     const playingMovieData = useSelector((store) => store?.movies)
     return (
          playingMovieData?.nowPlayingMovies &&
          <div className="px-4 -mt-20 relative z-10">
               <MovieList title={'Now Playing'} moviesList={playingMovieData?.nowPlayingMovies}/>
               <MovieList title={'Popular'} moviesList={playingMovieData?.popularMovies}/>
               <MovieList title={'Trending'} moviesList={playingMovieData?.nowPlayingMovies}/>
               <MovieList title={'Upcoming'} moviesList={playingMovieData?.nowPlayingMovies}/>
               <MovieList title={'Romantic'} moviesList={playingMovieData?.nowPlayingMovies}/>
               <MovieList title={'Horror'} moviesList={playingMovieData?.nowPlayingMovies}/>
          </div>
     );
};

export default SecondaryContainer;
