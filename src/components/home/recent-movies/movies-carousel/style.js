import styled from "styled-components";

export const StyledContainer=styled.div`
margin-top:2rem;
.swiper {
  width: 100%;
  height: 100%;
  padding-left:0.3rem;
}

.swiper-slide {
  text-align: left;
   font-size:14px;

  /* Center slide text vertically */
  display: flex;
  justify-content: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

`