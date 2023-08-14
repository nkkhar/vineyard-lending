import styled from 'styled-components';

export const ComplexWrapper = styled.section`
display: grid;
    grid-template-rows: 23vh 77.9vh;
    height: 100vh;
    background-color: #FFF;

@media (max-width: 480px){
    height: 100vh;

    justify-items: center;
}
`

export const ComplexTitle = styled.h1`
    user-select: none;
    text-transform: uppercase;
    margin-top: 2.55vw;
    margin-left: 6.3vw;
    font-size: 3.5vw;
    letter-spacing: 1.02vw;
    display: grid;
    align-items: center;

@media (max-width: 480px){
    font-size: 6.6vw;
    letter-spacing: 1vw;
    margin-left: 0;
}
`

export const ComplexImages = styled.div`
        user-select: none;
    display: grid;

`

export const ComplexImagesContainer = styled.div`
    display: grid;
    grid-template-rows: 0 0 0;
    align-content: center;
    width: fit-content;
    height: fit-content;
    grid-template-columns: 16.1vw 16.1vw 17.5vw 4vw;
    top: 3vh;
    left: 3vw;
    position: relative;

    img{
        filter: grayscale(1);
        transition: all .5s;
        user-select: none;
        cursor: pointer;
    }
    img:hover{
        filter: grayscale(0);
        scale: 1.02;
    }

`

export const ComplexImageOne =styled.img`
    width: 16vw;
    height: 48vmin;
    box-shadow: -1vw 1vh 3vw 0vh #262626;
`

export const ComplexImageTwo =styled.img`
    width: 16vw;
    position: relative;
    top: 14.5vh;
    height: 48vmin;
    box-shadow: 0vw 2vh 3vw -1vh #262626;
`

export const ComplexImageThree =styled.img`
    width: 17.5vw;
    height: 48vmin;
    box-shadow: 0vw 2vh 3vw -1vh #262626;
`

export const ComplexImageFour =styled.img`
width: 18vw;
    position: relative;
    top: 14.5vh;
    height: 48vmin;
    box-shadow: 0vw 3.1vh 3vw -2vh #262626;
`

export const ComplexTextWrapper = styled.div `
    display: grid;
    position: relative;
    top: -69vh;
    left: 73.4vw;
    width: fit-content;
    user-select: none;
    transition: opacity 0.3s ease-in-out;
    @media (max-width: 480px){
        left: 0;
    height: 32vh;
    top: -40vh;
    }

`

export const ComplexTextContainer = styled.div `
        display: grid;
        grid-template-rows: 10vh 30vh;
    width: fit-content;
    transition: all .3s !important;

    h2{
        color: #000000;
    text-transform: uppercase;
    margin: 0;
    font-size: 1.76vw;
    letter-spacing: 0.45vw;
    width: fit-content;
    line-height: 4.4vmin;
   
    }
    p{
        color: #000000;
    font-size: 1.55vw;
    line-height: 3.7vmin;
   
    }
    @media (max-width: 480px){
        display: grid;
    justify-content: center;
    justify-items: center;
    margin-top: 5vh;
    width: 100vw;
    height: 28vh;
    grid-template-rows: 5vh 18vh;
h2{
    font-size: 6vw;
    color:  #000000;

}
p{
    font-size: 4vw;
    color: #000000;
    line-height: 5.9vmin;
}
    }
`

export const ComplexModal = styled.div`
  display: ${props => props.open ? 'grid' : 'none'};
  grid-template-rows: 0 95vh;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1;
  animation-name: modalOpacityAnimation;
  animation-duration: 0.35s;
  
  @keyframes modalOpacityAnimation {
  from {opacity: 0;}
  to {opacity: 1;}
}
`

export const ComplexImgModal = styled.img`
    width: 66vw;
    height: 80.2vh;
    position: relative;
    left: 12.7vw;
    top: 8.24vh;
    @media (max-width: 480px){
        width: 112vw;
    height: 39vh;
    position: relative;
    left: -7.3vw;
    top: 27.24vh;
    }
`

export const CloseModalBtn = styled.button`
z-index: 1;
    background: none;
    outline: none;
    border: none;
    cursor: pointer;
    user-select: none;
    position: absolute;
    top: 21vh !important;
    left: 70vw !important;
    padding: 0;
    height: 7vh;
    width: fit-content;
    svg{
        background: none;
    width: 4vw;
    height: 6vh;
    }
    @media (max-width: 480px){
        top: 31vh !important;
    left: 84vw !important;
    svg{
        width: 12vw;
    height: 6vh;
    }
    }
`

