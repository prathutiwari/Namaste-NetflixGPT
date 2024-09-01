import React from 'react'
import { TMDB_IMAGE_HOST_PATH } from '../../utils/constants'

const MovieCard = ({ poster }) => {
     return (
          <div className='w-[200px] mx-3'>
               <img src={TMDB_IMAGE_HOST_PATH + poster} alt='poster' />
          </div>
     )
}

export default MovieCard