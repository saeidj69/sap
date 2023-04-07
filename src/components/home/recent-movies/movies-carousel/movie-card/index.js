import React from 'react';
import { StyledContainer } from './style';
function MovieCard({moviesItem}) {
    return (
        <StyledContainer>
            <div className='img-box'>
                <img  style={{borderRadius:'0.5rem'}} src={moviesItem.Poster} />
            </div>
            <p>
                {moviesItem.Title}
            </p>
        </StyledContainer>
    );
}

export default MovieCard;