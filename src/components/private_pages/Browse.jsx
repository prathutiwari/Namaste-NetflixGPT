import React from 'react';
import HeaderPrivate from './HeaderPrivate';
import useNowPlayingMovies from '../../hooks/useNowPlayingMovies';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import usePopularMovies from '../../hooks/usePopularMovies';
import GptSearch from './GptSearch';
import { useSelector } from 'react-redux';

const Browse = () => {

  const showGPT = useSelector((store) => store.gptSearch.showGPTSearch);
  console.log(showGPT)

  useNowPlayingMovies();
  usePopularMovies();

  return (
    <div className='bg-[#141414] text-white'>
      <HeaderPrivate />
      <div>
        { showGPT ? <GptSearch/> : <><MainContainer /><SecondaryContainer /></>}      
      </div>
    </div>
  )
}

export default Browse;