import React, {useState,useEffect} from 'react';
import {StyledContainer} from "./style"
import {getRecentMoviesApi} from "../../../api/recent-movies"
import MoviesCarousel from './movies-carousel';
function RecentMoviesComponent({moviesInfo}) {
    const [moviesData,setMoviesData]=useState([]);

    const getRecentMovies=async()=>{
        
        let moviesType='all';
        const res=await getRecentMoviesApi(moviesType)
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