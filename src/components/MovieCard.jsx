import React from 'react'
import './css-files/MovieCard.css'

const MovieCard = ({ data }) => {
  
  return (
    <div className="item"> 
      <img className='image' src={data.Poster} alt="poster" />
       <h1>{data.Title}</h1>
       <h3>{data.Year}</h3>
    </div>
  );
};

export default MovieCard;