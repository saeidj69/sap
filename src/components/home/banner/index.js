import React from 'react';
import { StyledContainer } from './style';
import jokerimg from "../../../assets/images/joker.png"

function BannerComponent(props) {
    return (
        <StyledContainer>
            <div className='main'>
                <div>

                <p>

                trendeing
                </p>
                <h1>
                    JOKER
                </h1>
                </div>
          <span>
            24 Stories
          </span>
            </div>
            <img style={{width:"9.375rem"}} src={jokerimg} />
        </StyledContainer>
    );
}

export default BannerComponent;