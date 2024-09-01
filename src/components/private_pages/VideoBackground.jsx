import React  from 'react'
import { useSelector } from 'react-redux'
import useMovieTrailer from '../../hooks/useMovieTrailer'

const VideoBackground = ({movieId}) => {
     const trailer = useSelector(store => store.movies.trailerVideo);
     useMovieTrailer(movieId);

     return (
          <div className='relative w-full h-screen'>
               <iframe
                    className='w-full aspect-video h-full'
                    src={"https://www.youtube.com/embed/" 
                         + trailer?.key 
                         // + '?controls=0&showinfo=0&rel=0&autoplay=1&loop=1&mute=1'
                    }
                    title="YouTube video player"
                    frameBorder={0}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
               >
               </iframe>
               <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/45 to-transparent z-[5]"></div>
          </div>
     )
}

export default VideoBackground;