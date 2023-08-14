import styled from 'styled-components';

export const GlobalApp = styled.div`
display: grid;
overflow-y: hidden;
overflow-x: hidden;

`
//end App.js styles


export const LearnMoreBtn = styled.a`
user-select: none;
    border: 0.1vw solid #262626;
    position: relative;
    color: #000000;
    height: 2.7vmin;
    width: 8.7vw;
    text-decoration: none;
    font-size: 1vw;
    display: grid;
    justify-items: center;
    transition: all .2s;
    background-color: transparent;
    grid-template-columns: 6.3vw 2vw;
    padding-left: 0.5vw;
    align-content: center;
    align-items: center;
&:hover{
    border: 0.1vw solid #000;
    background-color: #262626;
    color: #FFFFFF;
    fill:  #FFFFFF !important;
}
&:hover svg{
    fill:  #FFFFFF !important;
}

`
