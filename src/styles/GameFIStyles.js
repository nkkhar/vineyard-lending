import styled from 'styled-components';

export const GameFIWrapper = styled.section`
display: grid;
    grid-template-rows: 100vh;
    grid-template-columns: 48vw 51.89vw;
    height: 100vh;
    align-items: center;
    background-color: #fff;
    
    @media (max-width: 480px){
        grid-template-rows: 53.5vh 46.3vh;
        grid-template-columns: 0;
    }
`
export const GameFILinesIMG = styled.img`
position: absolute;
    width: 76.1%;
    height: 73vh;
    top: 518vh;
    display: flex;
    user-select: none;
    right: 0;
    @media (max-width: 480px){
        width: 90%;
    height: 44vmin;
    margin: 0;
    top: 562vh;
    }
`

export const GameFITextContainer = styled.div`
position: relative;
left: 2.3vw;
    top: 4.1vh;
    width: fit-content;
    display: grid;
    grid-template-rows: 11.5vmax 6.35vmax 7vmax;
    height: 51vh;
    align-items: center;
    align-content: center;
    opacity: 0;

    @media (max-width: 480px){
        grid-row: 2/2;
    top: 0.6vh;
    left: 6.1vw;
    width: 90vw;
    grid-template-rows: 10.7vh 15.4vh 11vh;
    }
    @media (max-width:320px){
        top: 2.3vh;
    }
`
export const GameFITitle = styled.h1`
user-select: none;
text-transform: uppercase;
font-size: 6.7vw;
letter-spacing: 1.9vw;

@media (max-width:480px){
    font-size: 15vw;
    letter-spacing: 1vw;
    height: 11.3vh;
}
`

export const GameFIText = styled.p`
    font-size: 1.54vw;
    padding-top: 2vh;
    line-height: 2.1vmax;
    width: 42vw;

    @media (max-width:480px){
        font-size: 4.3vw;
        padding-left: 0.7vw;
        line-height: 2.8vh;
        width: 90vw;
    }
`
export const GameFILearnMoreBtn =styled.div`
display:  grid;
a{
    margin-top: 1.2vw;

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
export const GameFIElement = styled.img`
    width: 100%;
    height: 100%;
    max-width: 67vmin;
    max-height: 63vmin;
filter: drop-shadow(21px 24px 22px #c2c5cf);
opacity: 0;
user-select: none;
@media (max-width: 480px){
    max-width: fit-content;
    max-height: fit-content;
    width: 82vmin;
    height: 81vmin;

}
`
export const IMGGameFIContainer = styled.div`

    grid-row: 1/1;
    position: relative;
    display: grid;
    grid-column: 2/2;
    align-items: center;
    width: 47vw;
    justify-items: center;
    top: -3vh;
    left: 2vw;
    @media (max-width: 480px){
    top: 1.5vh;
    width: 99vw;
}
`