import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({ title, moviesList }) => {
     
     return (
          <>
               <h2 className='font-bold text-2xl mb-3 mx-3'>{title}</h2>
               <div className='flex overflow-x-scroll scrollBarNone'>
                    <div className='flex'>
                         {
                              moviesList.map((movieData) => <MovieCard key={movieData.id} poster={movieData?.poster_path} />)
                         }
                    </div>
               </div>
          </>

     )
}

export default MovieList