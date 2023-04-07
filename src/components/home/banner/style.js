import styled from "styled-components";

export const StyledContainer=styled.div`
margin-top:2rem;
width:100%;
height:15rem;
background:var(--black);
border-radius:0.4rem;
display:flex;
justify-content:space-between;
img{
    padding-right:0.5rem;
}
div.main{
    display:flex;
    flex-direction: column;
    justify-content: space-between;
    padding:0.5rem 0 1.5rem 1.5rem;
    height:100%;
    box-sizing: border-box;
    p{
        color:var(--olive)
    }

    h1{
        color:var(--white)
    }

    span{
        color:var(--light-gray);
    }
}

`