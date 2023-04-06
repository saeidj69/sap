import React from "react";
import { useSelector } from "react-redux";
import { StyledContainer } from "./style";
import Navbar from "./navbar";
function MainPage({ children }) {
  const isLoading = useSelector((state) => state.loading.isLoading);

  return (
    <StyledContainer>
      <div className="main">

      <Navbar />
      <>
        {isLoading ? <p>loading....</p> : children}
      </>
      </div>

    </StyledContainer>
  );
}

export default MainPage;
