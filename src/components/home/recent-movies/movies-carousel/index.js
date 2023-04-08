
import React from "react";
import { useSelector } from "react-redux";
import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { StyledContainer } from './style';

import MovieCard from "./movie-card";
function MoviesCarousel({moviesInfo}) {
  const isLoading = useSelector((state) => state.loading.isLoading);
  const antIcon = (
    <LoadingOutlined
      style={{
        fontSize: 24,
        color:"var(--gray2)"
      }}
      spin
    />
  );
    return (
      <StyledContainer>
      {isLoading? <Spin indicator={antIcon} />:
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
            <SwiperSlide key={item.imdbID}>
            <MovieCard moviesItem={item}  />

            </SwiperSlide>

        ))
        :
        <p>
          There Is No Movie !
        </p>
        }
     
 
      </Swiper>
      }
        </StyledContainer>
    );
}

export default MoviesCarousel;