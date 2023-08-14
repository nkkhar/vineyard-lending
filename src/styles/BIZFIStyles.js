import styled from 'styled-components';

export const BIZFIWrapper = styled.section`
display: grid;
    grid-template-rows: 100vh;
    grid-template-columns: 48vw 51.89vw;
    height: 100vh;
    align-items: center;
    transition: all .2s;
    background-image: url("../media/BizfiBG.png");

    @media (max-width: 480px){
        grid-template-rows: 53.5vh 46.3vh;
        grid-template-columns: 0;

    }

`

export const BizfiBg = styled.img`
position: absolute;
width: 100%;
height: 100vh;
user-select: none;
top: 100vh;
@media (max-width: 480px){
    width: 100vw;
    display: grid;
    align-items: start;
    top: 100vh;
}

`
export const BIZFILinesIMG = styled.img`
position: absolute;
width: 70%;
    height: 72vh;
    left: -0vw;
    top: 103.5vh;
    display: flex;
    user-select: none;

    @media (max-width: 480px){
        position: absolute;
    width: 97%;
    height: 27vh;
    left: 0.6vmin;
    top: 153.5vh;
    display: flex;
    user-select: none;
    }
`
export const BIZFITextContainer = styled.div`
position: relative;
    left: 1.8vw;//left: 5.3vw;
    top: 4.7vh;
    width: fit-content;
    display: grid;
   grid-template-rows: 12.8vmax 8vmax 7vmax;
    height: 51vh;
    align-items: center;
align-content: center;
opacity: 0;

@media (max-width: 480px){
    grid-row: 2/2;
    top: -0.4vh;
    left: 5.1vw;
    width: 90vw;
    grid-template-rows: 19.8vmin 29vmin 27vmin;
    height: fit-content;
}


`
export const BIZFITitle = styled.h1`
user-select: none;
text-transform: uppercase;
    font-size: 9.8vw;
    letter-spacing: 2.4vw;
    height: 11.8vmax;

    @media (max-width:480px){
        font-size: 15vw;
        letter-spacing: 1vw;
        height: 11.3vh;
    }
`

export const BIZFIText = styled.p`
font-size: 1.478vw;
    padding-left: 0.7vw;
    line-height: 2vmax;
    padding-top: 1vh;
@media (max-width:480px){
    font-size: 4.3vw;
    padding-left: 0.7vw;
    line-height: 2.8vh;
}
`
export const BIZFILearnMoreBtn =styled.div`
display:  grid;
a{
    margin-left: 0.3vw;

}

@media (max-width: 480px){
    a{
        height: 7.7vmin;
    width: 28.7vw;
    font-size: 3vw;
    grid-template-columns: 21.3vw 6vw;
    }
}
`
export const IMGBIZFIContainer = styled.div`
grid-row: 1/1;
position: relative;
    display: grid;
    grid-column: 2/2;
    align-items: center;
    width: 48vw;
    justify-items: center;
    top: -4.5vh;
    @media (max-width:480px){
        width: 99vw;
        top: 1.5vh;
    }
`
export const BIZFIElement = styled.img`
    width: 100%;
    height: 100%;
    max-width: 82vmin;
    max-height: 69vmin;
    padding-top: 0vh;
    margin-left: 1vw;
    filter: drop-shadow(21px 24px 22px #c2c5cf);
opacity: 0;
user-select: none;



    @media (max-width: 480px){
        max-width: fit-content;
    max-height: fit-content;
    width: 81vmin;
    height: 73vmin;
    padding-right: 0;
    margin: 0;
    margin-left: -2vw;
    }

`
