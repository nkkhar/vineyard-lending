
import styled from 'styled-components';

export const HeaderContainer = styled.div`
user-select: none;
display: grid;
    position: absolute;
    right: 4.78vw;

    top: 7.15vh;
    grid-template-columns: 9vw 8vw;
    justify-items: center;
    align-items: center;
    align-content: center;
    justify-content: center;
    z-index: 2;
    @media (max-width: 480px){
      mix-blend-mode: difference;
    }
    
`;
export const HeaderBtnContainer = styled.div`
display: grid;
grid-template-columns: 9vw 7vw 9vw;
justify-items: start;
@media (max-width: 480px) {
  display: grid;
    grid-template-columns: none;
    justify-items: center;
    align-items: center;
}
`
export const HeaderBtn = styled.button`
color: grey;
    background-color: unset;
    border: none;
    font-size: 1.3vw;
    padding: 0;
    cursor: pointer;
    padding-bottom: 0.7vh;
    font-family: 'Montserrat', sans-serif;
    font-weight: 400;
    transition: all .2s;
    &:hover{ 
      color: #000000;
      font-weight: 500;
    }

@media (max-width:480px){
  width: 90vw;
  height: 6.67vh;
  font-size: 5.3vw;
  border: 0.1vw solid #151515;
  color:  #151515;
  display: grid;
  align-content: center;
  padding-top: 1vh;
  transition: all .2s;


&:hover{ 
  background-color:#151515;
  border: 0.1vw solid #151515;
  color:  #FFF;
}

&:after {    
  display: none;
}
&:hover:after { 
  display: none;
}
}
`;


export const DocsLink = styled.a`
color: grey;
text-decoration: none;

    display: grid;
    align-items: center;
    transition: all .2s;
    &:hover{ 
      color: #000000;
      font-weight: 500;
    }
@media(max-width:480px){
  color:  #151515;
  height: 7vh;
  &:hover{
   color: #FFF; 
  }
  
}
`;


export const StyledBurger = styled.div`
width: 6vw;
    height: 2.1vh;
    position: fixed;
    top: 7vh;
    right: 8.5vw;
    z-index: 4;
    display: grid;
    grid-template-rows: 0.6vmax 0.7vmax 0.9vmax;
    mix-blend-mode: difference;
    cursor: pointer;

  div {
    background-color: ${({ open }) => open ? '#FFF' : '#FFF'};
    width: 5.66vw;
    height: 0.2vh;
    border-radius: 4vw;
    transform-origin: 1vw;

    transition: all 0.3s linear;
    &:nth-child(1) {
      transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
    }
    &:nth-child(2) {
      transform: ${({ open }) => open ? 'translateX(100%)' : 'translateX(0)'};
      opacity: ${({ open }) => open ? 0 : 1};
    }
    &:nth-child(3) {
      transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }  
  @media (max-width: 360px){
    div{
      transform-origin: 1.3vw;
    }
  }
  @media (max-width: 320px){
    div{
      transform-origin: 0.45vw;
    }
  }

`;

export const Ul = styled.ul`
  li {
    padding: 18px 10px;
  }
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    flex-flow: column nowrap;
    background-color: #FFFFFF;
    position: fixed;
    transform: translateX(0);
    top: 0;
    right: 0;
    height: 100%;
    width: 100%;
    transition: transform 0.3s ease-in-out;
    z-index: ${({ open }) => open ? '3' : '-9999'};
    margin: 0;
    padding: 0;
    display: grid;
    grid-template-rows: 38.6vh 23.3vh 12vh;
    li {
      color: #fff;
    }
`;
