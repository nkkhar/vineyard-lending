import styled from 'styled-components';

export const FooterSkeleton = styled.div`
height: fit-content;
    display: grid;
    grid-template-rows: 100% 0;
`

export const FooterWrapper = styled.section`
    display: grid;
    grid-template-rows: 21vh 51vh 28vh;
    height: fit-content;
    align-items: center;
    background-color: #FFFFFF;
    transition: all .2s;


    @media (max-device-width: 480px){
        grid-template-rows: 53.5vh 46.3vh;
        grid-template-columns: 0;
    }
`

export const FooterLinesIMG = styled.img`
position: absolute;
width: 79%;
    height: 100vh;
    top: 798vh;
    right: 0;
    display: flex;
    user-select: none;
    @media (max-width:480px){
        top: 830vh;
    margin-top: 0;
    width: 100%;
    height: 56vh;
    }
`

export const ArrowWrapper = styled.div`
  display: grid;
    justify-items: end;
    z-index: 2;
    @media (max-width: 480px){
        display: none;
    }
  
`
export const ArrowsContainer = styled.div`
display: grid;
    justify-items: center;
    grid-template-rows: 3vmin 3vmin 3vmin 9vmin;
    position: absolute;
    right: 10.7vw;
    width: 11vw;
    margin-top: -9.6vmin;
    justify-content: center;
    align-items: end;

svg{
    animation: animate 2s infinite;
    position: relative;
    top: 6vmin;
    width: 1.2vw;
    height: 2vh;
}
svg:nth-child(2){
    animation-delay: -0.2s;
    top: 5.5vmin;
}
svg:nth-child(3){
    animation-delay: -0.4s;
    top: 5vmin;
}

@keyframes animate {
    0%{
        opacity: 0;
        transform: rotate(0) translate(0,-20px);
    }
    50%{
        opacity: 1;
    }
    100%{
        opacity: 0;
        transform: rotate(0) translate(0,-20px);
    }
}
  
`

export const ArrowBtn = styled.button`
    color: grey;
    background-color: unset;
    border: none;
    font-size: 1vw;
    letter-spacing: 0.4vw;
    padding: 0;
    cursor: pointer;
    padding-bottom: 0.7vh;
    font-family: 'Montserrat',sans-serif;
    font-weight: 500;
    text-transform: uppercase;
    transition: all .2s;
    font-weight: 400;

    &:hover{ 
        color: #000000;
        font-weight: 500;

    }
    `

export const FooterIMGContainer = styled.div`
        display: grid;
    justify-content: center;
    justify-items: center;
    width: 100vw;
    
    height: fit-content;
    position: relative;
    @media (max-width: 480px){
        width: 99vw;
    height: fit-content;
    position: relative;
    left: 3vw;
    }

    `

export const FooterIMG = styled.img`
    width: 113vmin;
    height: 91vmin;
    position: relative;
    display: grid;
    user-select: none;
    @media (max-width: 480px){
        width: 76vmin;
    height: 65vmin;
    scale: 2;
    position: relative;
    display: grid;
    left: -1vw;
    top: 13vh;
    }
`

export const FooterInfoWrapper = styled.div`
    display: grid;
    position: relative;
    top: -10.3vmin;
    grid-template-rows: 14vmin 9vmin 7vmin;
    @media (max-width: 480px){
    top: -2.3vmin;
    grid-template-rows: 10vh 8vh 21vh;
    height: 39vh;
    }
`

export const FooterLogoContainer = styled.div`
    display: grid;
    margin-left: 4.7vw;
`

export const FooterTextContainer = styled.div`
    display: grid;
    grid-template-rows: 4vmin 2vmin;
    width: fit-content;
    margin-left: 4.7vw;
    align-content: center;

    h2{
        font-size: 1.39vw;
    color: #000000;
    margin: 0;
    font-weight: 400;

    }
    h3{
        font-size: 1.077vw;
    font-weight: 400;
    color: #000000;
    margin: 0;
    }

    @media (max-width: 480px){
        display: grid;
    grid-template-rows: 6vmin 5vmin;
    margin-left: 4.7vw;
    align-content: center;


    h2{
        font-size: 4.39vw;
    }
    h3{
        font-size: 4.077vw;
    }
    }
`

export const FooterBottom = styled.div`
    display: grid;
    grid-template-columns: 65.4vw 24vw; // if link! grid-template-columns: 44.3vw 17vw 36vw;
    align-items: center;
    @media (max-width: 480px){
        grid-template-columns: 0;
        grid-template-rows: 8vh 5vh 5vh;
    }
`

export const FormBlock = styled.div`
    display: grid;
    padding-left: 4.7vw;
form{
    display: flex;
    align-items: center;
    outline: none;
}
input{
    background: #EEEEEE;
    border: 0;
    color: #737373;
    padding: 0;
    width: 15.7vw;
    height: 4.7vh;
    font-size: 1.11vw;
    padding-left: 1.1vw;
    font-family: 'Montserrat',sans-serif;
    outline: none;
    border-radius:  0;
}

button{
    margin-left: 1.4vw;
    background: transparent;
    height: 4.667vh;
    margin-top: 0;
    padding: 0;
    width: 13.2vw;
    border: 0.12vw solid #000;
    font-family: 'Montserrat',sans-serif;
    font-size: 1.4vw;
    display: grid;
    align-items: center;
    outline: none;
    transition:  all .2s;
    cursor: pointer;
    color: #000 !important;
}

button:hover{
    background: #000;
    color: #FFFFFF !important;
}

@media (max-width: 480px){
    input {
    width: 54.7vw;
    font-size: 4.11vw;
    padding-left: 4.1vw;
    }
    button{
        width: 28.2vw;
    font-size: 4.1vw;
    height: 4.6vh;
    margin-left: 3.4vw;
    }
}
`

export const PrivacyBtn = styled.button`
font-size: 1.44vw;
    width: fit-content;
    text-decoration: none;
    color: grey;
    font-weight: 500;
    transition: all .4s;
    background: none;
    outline: none;
    border: none;
    font-family: 'Modica', sans-serif;
    position: relative;
    top: -16.7vh;
    left: 44vw;
    height: 8vh;
    right: 44.66vw;
    z-index: 4;
    cursor: pointer;
    &:hover{ 
        color: #000;
        font-weight: 500;

    }

    @media (max-width: 480px){
        font-size: 4.44vw;
    width: 40.45vw;
    margin-left: 5vw;
    left: -4.5vw;
    height: 4vh;
    top: -18.5vh;
    
    &:hover:after { 
      width: 99%; 
      left: 0%; 
    }
}

`
export const FooterLinks = styled.div`
    display: grid;
    grid-template-columns: 5.5vw 5.2vw 6.7vw;
    justify-items: center;
    @media (max-width: 480px){
        grid-template-columns: 11vw 13.7vw 11.8vw;
        position: relative;
            left: -1vw;
    }
`
export const SocialBlock = styled.div`
        display: grid;
    grid-template-columns: 8vw 5.5vw 5.2vw 5vw;
    align-items: center;
    width: fit-content;

    h2{
        font-size: 1.3vw;
    font-weight: 400;
    margin: 0;
    color: grey;
    }

    a{
        filter: contrast(0.3);
        transition: all .4s;
    }
    a:hover{
        filter: contrast(5);
    }
    @media (max-width: 480px){
        grid-template-columns: 0;
    position: relative;
    left: 5vw;
    grid-template-rows: 7vh 2vh;
    top: 4vh;
    height: fit-content;
    h2{
        font-size: 4.3vw;
    font-weight: 400;
    margin: 0;
    }
    }
`

export const TwitterLink = styled.a`
    text-decoration: none;
    svg{
            width: 4vw;
    height: 6vh;
    }

    @media (max-width: 480px){
        svg{
        width: 9vw;
    height: 6vh;
        }
    }

`

export const FacebookLink = styled.a`
    text-decoration: none;
    svg{
    width: 3.5vw;
    height: 6vh;
    }
    @media (max-width: 480px){
        svg{
            width: 7.8vw;
            height: 6vh;
        }
    }

`
export const DiscordLink = styled.a`
    text-decoration: none;
svg{
    width: 4.5vw;
    height: 6vh;
}
@media (max-width: 480px){
        svg{
        width: 9vw;
    height: 6vh;
        }
    }

`