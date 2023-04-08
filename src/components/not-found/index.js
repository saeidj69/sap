import React from 'react';
import { useNavigate } from "react-router-dom";

import {Button} from "../uiKit"
import { StyledContainer } from './style';
import notFoundImage from "../../assets/images/notFound.jpg"
function NotFound(props) {
  const navigate=useNavigate()

  const navigateHome=()=>{
    debugger
    navigate('/')
  }

    return (
        <StyledContainer>
            <img src={notFoundImage} />
            <Button type="primary" onClick={navigateHome}>
                Back Home
            </Button>
        </StyledContainer>
    );
}

export default NotFound;