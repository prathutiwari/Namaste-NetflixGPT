import React from 'react'
import { useSelector } from 'react-redux'
import VideoTitle from './VideoTitle'
import VideoBackground from './VideoBackground'

const MainContainer = () => {
     const movies = useSelector(store => store.movies?.nowPlayingMovies);
     if (movies == null) return;
     const mainMovie = movies[1];

     return (
          <div className='relative'>
               <VideoTitle title={mainMovie?.original_title} description={mainMovie?.overview}/>
               <VideoBackground movieId={mainMovie?.id}/>
          </div>
     )
}

export default MainContainer