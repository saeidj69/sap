import React, {useState,useEffect} from 'react';
import {StyledContainer} from "./style"
import {getRecentMoviesApi} from "../../../api/recent-movies"
import MoviesCarousel from './movies-carousel';
function RecentMoviesComponent(props) {
    const [moviesData,setMoviesData]=useState([]);

    const getRecentMovies=async()=>{
        debugger
        const res=await getRecentMoviesApi()
        setMoviesData(res.Search)
    }

    useEffect(()=>{
        getRecentMovies()
    },[])
    return (
        <StyledContainer>
            <h1>
                Recent Movies
            </h1>
            <MoviesCarousel moviesInfo={moviesData} />
        </StyledContainer>
    );
}

export default RecentMoviesComponent;