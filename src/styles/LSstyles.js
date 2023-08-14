import styled from 'styled-components';

export const LSWrapper = styled.section`
display: grid;
    grid-template-rows: 100vh;
    grid-template-columns: 50vw 49.89vw;
    height: 100vh;
    align-items: center;
    background-color:  #FFFFFF;
    
    @media (max-width: 480px){
        grid-template-rows: 53.5vh 46.3vh;
        grid-template-columns: 0;
    }


`

export const LSLinesIMG = styled.img`
position: absolute;
width: 86%;
    height: 79vh;
    left: -0.4vw;
    top: 313vh;
    display: flex;
    user-select: none;
    @media (max-width: 480px){
        position: absolute;
    width: 97%;
    height: 27vh;
    left: 0.6vmin;
    top: 353.5vh;
    display: flex;
    user-select: none;
    }
`

export const LSTextContainer = styled.div`
position: relative;
    left: 2.1vw;
    top: 8.8vh;
    width: fit-content;
    display: grid;
    grid-template-rows: 0.5vmax 10.35vmax 6vmax;
    height: 51vh;
    align-items: center;
    align-content: center;
    opacity:  0;

    @media (max-width: 480px){
        grid-row: 2/2;
    width: 90vw;
    top: -0.4vmin;
    left: 6.1vw;
    grid-template-rows: 2vh 23vh 9vh;
    }
`

export const LSLearnMoreBtn = styled.div`
display:  grid;
a{
    margin-top: 1vw;

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
export const LSTitle = styled.h1`
    user-select: none;
    text-transform: uppercase;
    font-size: 5.6vw;
    letter-spacing: 1.4vw;
    line-height: 13.3vmin;
    height: 23.5vmin;

    @media (max-width:480px){
        font-size: 15vw;
        letter-spacing: 0.79vw;
        height: 16.8vh;
        line-height: 8.5vmax;
    }
`

export const LSText = styled.p`
    font-size: 1.557vw;
    padding-top: 5vh;
    line-height: 2.12vmax;

    @media (max-width:480px){
        font-size: 4.3vw;
    padding-left: 0.7vw;
    line-height: 2.8vh;
    width: 90vw;
    padding-top: 1.1vh;
    }
`

export const LSElement = styled.img`
    width: 100%;
    height: 100%;
    max-width: 77vmin;
    max-height: 69vmin;
    opacity:  0;
    user-select: none;
    filter: drop-shadow(21px 24px 22px #c2c5cf);


@media (max-width: 480px){
    max-width: fit-content;
    max-height: fit-content;
    width: 80vmin;
    height: 73vmin;
    padding-right: 0;
    margin: 0;
}
`

export const IMGLSContainer = styled.div`
    position: relative;
    display: grid;
    grid-column: 2/2;
    grid-row: 1/1;
    align-items: center;
    justify-items: center;
    width: 45vw;
    top: -4vh;
    @media (max-width: 480px){
        width: 99vw;
        top: -1.5vh;
        left: 1vw
}
`