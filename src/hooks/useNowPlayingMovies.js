import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addNowPlayingMovies } from '../utils/moviesSlice';
import { API_OPTIONS } from '../constants';

const useNowPlayingMovies = () => {
  // Fetch data from TMDB API and update it to store
  const dispatch = useDispatch();

  const getnowPlayingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?page=1",
      API_OPTIONS
    );
    const json = await data?.json();
    dispatch(addNowPlayingMovies(json?.results));
  };

  useEffect(() => {
    getnowPlayingMovies();
  }, []);

};

export default useNowPlayingMovies;