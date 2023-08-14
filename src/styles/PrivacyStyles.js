import styled from 'styled-components';

export const PrivacyWrapper = styled.div`

    background-color: white;
    height: 100vh;
    z-index: 9999;
    width: 100%;
    @media (max-width: 480px){
     height: 225vh;
    }
`

export const PrivacyLinesIMG = styled.img`
position: absolute;
    width: 100%;
    height: 59vh;
    left: 0;
    top: 39.6vh;
    display: flex;
    user-select: none;
    @media (max-width: 480px){
        display: none;

    }
`
export const PrivacyTextDiv = styled.div`
display: grid;
    width: 89vw;
    position: relative;
    left: 5.5vw;
    top: 3.556vh;
    margin: 0;
    grid-template-rows: 6vh 3.6vh 4vh 12.6vh 4vh 15.4vh 4vh 13.6vh 3vh 4vh 5vh;
    height: fit-content;
    justify-items: start;
    align-items: end;

span{
    font-size: 0.789vw;
    font-weight: 500;
}

p{
    font-size: 0.8vw;
    line-height: 2vh; 
    }
    @media (max-width:480px){
        top: 13.556vh;
    margin: 0;
    grid-template-rows: 8vh 6.6vh 11vh 32.6vh 11vh 35.4vh 13vh 30.6vh 16vh 6vh 23vh;
        span{
    font-size: 3.5vw;
    font-weight: 500;
}

p{
    font-size: 3.3vw;
    line-height: 3vh;
    }
    }
`


