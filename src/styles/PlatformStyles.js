import styled from 'styled-components';

export const PlatformWrapper = styled.section`


    display: grid;
    grid-template-rows: 100vh;
    grid-template-columns: 48vw 51.89vw;
    height: 100vh;
    align-items: center;
    background-color: #FFFFFF;
    
    transition: all .2s;


    @media (max-width: 480px){
        grid-template-rows: 53.5vh 43.3vh;
        grid-template-columns: 0;
    }
`

export const PlatformLinesIMG = styled.img`
position: absolute;
    width: 73%;
    height: 73vh;
    right: 9.7vw;
    top: 624vh;
    display: flex;
    user-select: none;
    @media (max-width: 480px){
        width: 98%;
    height: 23vh;
    right: 2.7vw;
    margin-top: 0;
    top: 660vh;
    }
`

export const PlatformTextContainer = styled.div`
    position: relative;
    left: 7.69vw;
    top: 10.4vh;// old value top: 7.4vh;
    width: fit-content;
    display: grid;
    grid-template-rows: 8.5vmax 10.4vmax 12vmax; // old value grid-template-rows: 9.5vmax 6.4vmax 10vmax;
    height: 51vh;
    align-items: center;
    align-content: center;
    opacity: 0;

    @media (max-width: 480px){
    grid-row: 2/2;
    top: 3vh; // old top: -0.7vh;
    left: 6.1vw;
    width: 90vw;
    grid-template-rows: 11.7vh 29.4vh 11vh; // old grid-template-rows: 11.7vh 18.4vh 11vh;
    }
    @media (max-width:320px){
        top: 2.3vh;
    }
`
export const PlatformTitle = styled.h1`
user-select: none;
text-transform: uppercase;
font-size: 5.4vw;
letter-spacing: 1.45vw;
height: 12.7vmax;

@media (max-width:480px){
    font-size: 14vw;
    letter-spacing: 1vw;
    height: 11.3vh;
}

`

export const PlatformText = styled.p`
font-size: 1.56vw;
    padding-left: 0.5vw;
    line-height: 2.14vmax;

    @media (max-width:480px){
        font-size: 4.3vw;
        padding-left: 0.7vw;
        
    line-height: 2.8vh;
    }
`
export const PlatformLearnMoreBtn =styled.div`
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

export const PlatformElement = styled.img`
    width: 100%;
    height: 100%;
    max-width: 68vmin;
    max-height: 70vmin;
    opacity: 0;
    filter: drop-shadow(21px 24px 22px #c2c5cf);
    user-select: none;
@media (max-width: 480px){
    max-width: fit-content;
    max-height: fit-content;
    width: 66vmin;
    height: 66vmin;
}
`
export const IMGPlatformContainer = styled.div`
    position: relative;
    display: grid;
    grid-row: 1/1;
    grid-column: 1/2;
    align-items: center;
    justify-items: center;
    width: 45vw;
    top: 4vh;
    left: 6vw;
    @media (max-width: 480px){
    left: 1.5vw;
    top: -0.5vh;
    width: 99vw;
}
`
