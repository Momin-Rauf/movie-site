import React, { useState } from 'react'
import './css-files/Search.css'

import { useDispatch } from 'react-redux';
import { fetchAsyncMovies } from './redux/movies/MovieSlice';
const Search = () => {
    const dispatchMovies = useDispatch();       
    const [value,setValue] = useState();

  return (
    <div class='search' >
        <div class='label-div' ><label htmlFor="input">Search</label>
        <input type="text" onChange={(event)=>{setValue(event.target.value);console.log(event.target.value)}} value={value} />
        <button type='submit' onClick={(event)=>{
            event.preventDefault();
            dispatchMovies(fetchAsyncMovies(value));
        }} >🔍</button>
         </div>
         
    </div>
  )
}

export default Search;