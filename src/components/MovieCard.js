import React from 'react'
import { MOVIE_CARD_IMAGE } from '../utils/constant'

const MovieCard = ({posterPath}) => {
  if (!posterPath) return null;
  
  return (

    
    <div className='w-48 pr-2'>
      <img alt='MovieCard'
       src={MOVIE_CARD_IMAGE + posterPath} />
    </div>
  )
}

export default MovieCard