import styled from 'styled-components';

export const NFTWrapper = styled.section`
display: grid;
    grid-template-rows: 100vh;
    grid-template-columns: 48vw 51.89vw;
    height: 100vh;
    align-items: center;
    background-color:  #FFFFFF;


    @media (max-width: 480px){
        grid-template-rows: 49.5vh 53.3vh;
        grid-template-columns: 0;
    }
    
`

export const NFTLinesIMG = styled.img`
position: absolute;
width: 79%;
    height: 100vh;
    top: 202vh;
    right: 0;
    display: flex;
    user-select: none;
@media (max-width: 480px){
    
    width: 93%;
    margin-top: 0;
    height: 40vh;
    top: 248vh;
}
`

export const NFTTextContainer = styled.div`
position: relative;
    left: 9.7vw;
    top: 3.9vh;
    width: fit-content;
    display: grid;
    grid-template-rows: 11.5vmax 13.35vmax 4vmax;
    height: 51vh;
    align-items: center;
    align-content: center;
    opacity: 0;

@media (max-width: 480px){
    grid-row: 2/2;
    top: 1vh;
    left: 6.1vw;
    width: 90vw;
    grid-template-rows: 11.5vh 24.35vh 7vh;
    height: fit-content;
    align-items: center;
}

`
export const NFTTitle = styled.h1`
user-select: none;
    text-transform: uppercase;
    font-size: 9.8vw;
    letter-spacing: 2.8vw;
    height: 19.8vmin;

@media (max-width:480px){
    font-size: 15vw;
    letter-spacing: 1vw;
    height: 11.3vh;
}
`

export const NFTText = styled.p`
    font-size: 1.557vw;
    padding-left: 0.45vw;
    padding-top: 2vh;
    line-height: 2.12vmax;

@media (max-width:480px){
    font-size: 4.3vw;
    padding: 0;
    line-height: 2.8vh;
}


`
export const NFTLearnMoreBtn =styled.div`
display:  grid;
a{
    margin-left: 0.5vw;
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
export const NFTElement = styled.img`
    width: 100%;
    height: 100%;
    max-width: 75vmin;
    max-height: 71vmin;
    opacity:  0;
    user-select: none;
    

@media (max-width: 480px){
    max-width: fit-content;
    max-height: fit-content;
    width: 81vmin;
    height: 77vmin;
    padding-right: 0;
    margin: 0;
}

`
export const IMGNFTContainer = styled.div`
    position: relative;
    display: grid;
    grid-row: 1/1;
    grid-column: 1/2;
    align-items: center;
    justify-items: center;
    width: 48vw;
    top: 4vh;
    left: 2vw;
    @media (max-width: 480px){
        width: 99vw;
        top: -0.5vh;
        left: 2.5vw;
    }
`