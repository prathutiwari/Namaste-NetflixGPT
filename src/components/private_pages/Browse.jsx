import React from 'react';
import HeaderPrivate from './HeaderPrivate';
import useNowPlayingMovies from '../../../src/hooks/useNowPlayingMovies';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';

const Browse = () => {

  useNowPlayingMovies();

  return (
    <div>
      <HeaderPrivate />
      <div>
        <MainContainer />
        <SecondaryContainer />
      </div>


      {/* 
        - main Container
          - Video Background
          - Video title
        - secondary container
          - Movies list * N
            -card * N
      */}
    </div>
  )
}

export default Browse;