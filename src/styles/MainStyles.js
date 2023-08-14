import styled from 'styled-components';

export const MainWrapper = styled.section`
display: grid;
grid-template-rows: 17vh 83vh;
height: 100vh;
scroll-snap-align: center;
background-color: white;


@media (max-width: 480px){
    height: 100vh;
    background-color: white;
}

`

export const MainBg = styled.img`
position: absolute;
width: 100%;
height: 100vh;
user-select: none;
@media (max-width: 480px){
    width: 100%;
height: 100vh;
filter: brightness(1.1);
}
`

export const LogoContainer = styled.div`
    display: grid;
    position: relative;
    width: 23vw;
    left: 5.55vw;
    top: 1.7vmax;
`

export const InfoContainer =styled.div`
display: grid;

`

export const InfoText=styled.div`
position: relative;
    top: 15vh;
    left: 6vw;
    display: grid;
    grid-template-rows: 7vmin 21vmin 5vmin;
    align-items: center;
    width: fit-content;
    height: fit-content;
    justify-items: start;
    
@media (max-width: 480px){
    position: absolute;
    top: 19vmax;
    left: 6vw;
    display: grid;
    grid-template-rows: 16.6vh 33vh 22vh;
    align-items: start;
}
`

export const InfoMainText = styled.p`
    font-size: 1.6vw;
    padding-top: 1.8vh;
    padding-bottom: 1vmax;
    line-height: 2.2vmax;

    @media (max-width:480px){
        font-size: 6.5vw;
    padding-left: 0vw;
    padding-top: 5.1vh;
    padding-bottom: 3vh;
    line-height: 4.2vmax;
    width: 88vw;
    }
`

export const InfoMainTitle= styled.h1`
user-select: none;
text-transform: uppercase;
font-size: 3.24vw;
letter-spacing: 0.999vw;

@media (max-width: 480px){
    font-size: 14.6vw;
    letter-spacing: 1vw;
    width: 86vw;
}


`

export const InfoReadBtn = styled.a`
user-select: none;
border: 0.1vw solid #262626;
position: relative;
color: #262626;
height: 4.6vmin;
width: 14.5vw;
text-decoration: none;
font-size: 1.4vw;
display: grid;
align-items: center;
justify-items: center;
transition: all .2s;
background-color: transparent;

&:hover{
    border: 0.1vw solid #000;
    background-color: #262626;
    color: #FFFFFF;

}

@media (max-width: 480px){
    top: 13vh;
    height: 7.22vh;
    width: 89vw;
    font-size: 5.15vw;
    left: -1vw;
}


`

export const PartnersContainer = styled.div`
display: flex;
    column-gap: 1.5vw;
    position: absolute;
    top: 78.9vh;
    left: 28.8vw;
    align-content: center;
    align-items: center;

    @media (max-width: 480px){
        column-gap: 11.5vw;
    position: absolute;
    top: 70vh;
    right: 0;
    left: 13vw;
    width: 75vw;
}
`

export const PartnersElement = styled.div`
display: flex;
align-items: center;

`

export const  PartnerOne = styled.img`
    width: 8.1vw;
    height: 9vh;
filter: invert(1);
@media (max-width: 480px){
width: 30.4vw;
    height: 6vh;

}
`
export const  PartnerTwo = styled.img`
    width: 8.25vw;
    height: 14vh;
filter:  invert(1);

@media (max-width: 480px){
width: 29vw;
height: 14vh;
}
`