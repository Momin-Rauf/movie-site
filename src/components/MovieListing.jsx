// MovieListing.js
import React from 'react';
import { sliderSetting } from './sliderSetting';
import { useSelector } from 'react-redux';
import { getAll} from './redux/movies/MovieSlice';
import MovieCard from './MovieCard';
import './css-files/MovieListing.css';
import { Link } from 'react-router-dom';
import "slick-carousel/slick/slick.css";

import Search from './Search';
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';

const MovieListing = () => {
  const data = useSelector(getAll);
  const movies = [];
  const series = [];
  if(data.Response === 'True'){
    data.Search.map((movie)=>{
      if(movie.Type==="series"){
        series.push(movie);
      }
      else{
        movies.push(movie);
      }
    });
  }
  
  
  
  console.log(series);
  console.log(movies)
 
  let renderMovies='';
  if (data.Response === 'True') {
    renderMovies = movies.map((movie) => (
      <Link to={`/movie/${movie.imdbID}`} ><MovieCard key={movie.imdbID} data={movie} /></Link>
    ));
  }

  let renderShows = '';
   if(data.Response === 'True'){
    renderShows = series.map((show, index) => (
      <Link to={`/movie/${show.imdbID}`} ><MovieCard key={show.imdbID} data={show} /></Link>
    ))};
  


  return (
    <>
      <Search movies = {renderMovies} shows={renderShows} />
      <div className="movie-show">
        <div class="movies"> 
          <Slider {...sliderSetting} > 
          {renderMovies}
          </Slider>
          <div class='show' ><Slider {...sliderSetting} >  
          {renderShows}
          </Slider></div>
        </div>
      </div>
    </>
  );
};

export default MovieListing;
