import React, { useEffect } from 'react';
import './css-files/Home.css';
import MovieListing from './MovieListing';
import { useDispatch } from 'react-redux';
import {fetchAsyncMovies} from './redux/movies/MovieSlice'
const Home = () => {
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(fetchAsyncMovies("Football"));
    }
    ,[dispatch]);
    return (
        <div id='home' className='home-div'>
            <MovieListing/>
        </div>
    );
};

export default Home;
