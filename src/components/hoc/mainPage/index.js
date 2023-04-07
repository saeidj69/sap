import React from "react";
import { useSelector } from "react-redux";
import { StyledContainer } from "./style";
import Navbar from "./navbar";
function MainPage({ children }) {
  //const isLoading = useSelector((state) => state.loading.isLoading);
  const isLoading = false;

  return (
    <StyledContainer>
    

      <Navbar />
      <>
        {isLoading ? <p>loading....</p> : children}
      </>
  

    </StyledContainer>
  );
}

export default MainPage;
