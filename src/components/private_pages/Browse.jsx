import React from 'react';
import HeaderPrivate from './HeaderPrivate';
import useNowPlayingMovies from '../../hooks/useNowPlayingMovies';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import usePopularMovies from '../../hooks/usePopularMovies';

const Browse = () => {

  useNowPlayingMovies();
  usePopularMovies();

  return (
    <div className='bg-[#141414] text-white'>
      <HeaderPrivate />
      <div>
        <MainContainer />
        <SecondaryContainer />
      </div>


      {/* 
        - secondary container
          - Movies list * N
            -card * N
      */}
    </div>
  )
}

export default Browse;