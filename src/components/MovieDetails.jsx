import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { fetchShowsMoviesDetails, getDetails } from './redux/movies/MovieSlice';
import './css-files/MovieDetails.css';
const MovieDetails = () => {
  const {imdbID} = useParams();
  const dispatch = useDispatch();
  const details = useSelector(getDetails);
  useEffect(()=>{
    dispatch(fetchShowsMoviesDetails(imdbID));
    console.log(imdbID);
  },[dispatch,imdbID]);
  console.log(details);
  const img = details.Poster;
  return (
    <div className='main' >
      <div className='poster' >
        <img src={img} alt="image" />
        <div className='title-div' ><h1>{details.Title}</h1>
        <span>Genre:{details.Genre}</span>
        <div>Rating:{details.imdbRating}</div></div>
        <div className='title-div' ><span>Country:{details.Country}</span>
        <span>Language:{details.Language}</span>
        <span>Year of release:{details.Year}</span>
        </div>
        </div>
        <div className='div2' >
        <span className='spans' >Plot: {details.Plot}</span>
        <span className='spans' >Cast:{details.Actors}</span>
        <span className='spans' >Director {details.Director}</span>
        </div>
      
  
    </div>
  )
}

export default MovieDetails