
import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";
import { StyledContainer } from './style';

import MovieCard from "./movie-card";
function MoviesCarousel({moviesInfo}) {
    return (
        <StyledContainer>
                  <Swiper
        slidesPerView={4.5}
        spaceBetween={15}
   
        pagination={{
          clickable: true,
        }}
     
        className="mySwiper"
      >
        {moviesInfo && moviesInfo.length>0?
        moviesInfo.map((item)=>(
            <SwiperSlide>
            <MovieCard moviesItem={item} />

            </SwiperSlide>

        ))
        :''}
     
 
      </Swiper>
        </StyledContainer>
    );
}

export default MoviesCarousel;