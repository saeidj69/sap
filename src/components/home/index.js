import React from "react";
import { StyledContainer } from "./style";
import BannerComponent from "./banner"
import RecentMoviesComponent from "./recent-movies";
const HomeComponent =()=>{
return(
    <StyledContainer>
        <BannerComponent />
        <RecentMoviesComponent />
    </StyledContainer>
)
}

export default HomeComponent