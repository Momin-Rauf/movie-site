import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import apiMovie from "../../../api/apiMovie";
import Loader from '../../Loader';
export const fetchAsyncMovies= createAsyncThunk('movies/fetchAsyncMovies',async(searchData)=>{
            
            let key = '12dd7cfa';
            const response = await apiMovie.get(`?apiKey=${key}&s=${searchData}&type
            =movie`);
            return response.data;
});



export const fetchShowsMoviesDetails = createAsyncThunk('movies/fetchShowsMoviesDetails',async(id)=>{

    let key = '12dd7cfa';
    const response = await apiMovie.get(`?apiKey=${key}&i=${id}&Plot=full`);
    return response.data;
    
});

const initialState = {
    movies: [],
    details: [],
}

const MovieSlice = createSlice({
    name: 'movieSlice', // Corrected the reducer name
    initialState,
    reducers: {
        getMovie: (state, { payload }) => {
            state.movies = payload;
        },

    },
    extraReducers: {
        [fetchAsyncMovies.pending]: ()=>{
            console.log('loading');
            <Loader/>
            
        },
        [fetchAsyncMovies.fulfilled]: (state,{payload})=>{            
            return  {...state,movies: payload}
        },
        [fetchAsyncMovies.rejected]:()=>{
            Alert('Error while fetching data');
        },
        [fetchShowsMoviesDetails.fulfilled]:(state,{payload})=>{
            return {...state,details:payload}
        }
    }, 
    
        
    
});

export const { getMovie } = MovieSlice.actions;

export const getAll = (state) => state.movieSlice.movies; 

export const getDetails = (state) => state.movieSlice.details;

export default MovieSlice.reducer;
