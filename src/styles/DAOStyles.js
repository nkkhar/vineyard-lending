import styled from 'styled-components';

export const DAOWrapper = styled.section`


    display: grid;
    grid-template-rows: 100vh;
    grid-template-columns: 48vw 51.89vw;
    height: 100vh;
    align-items: center;
    background-color: #FFFFFF;
    
    transition: all .2s;


    @media (max-width: 480px){
        grid-template-rows: 53.5vh 46.3vh;
        grid-template-columns: 0;
    }
`

export const DAOLinesIMG = styled.img`
position: absolute;
width: 76.1%;
    height: 73vh;
    left: -0.4vw;
    top: 415vh;
    display: flex;
    user-select: none;
    @media (max-width: 480px) {
        margin-top: 0;
    width: 94.1%;
    height: 54vmin;
    left: 0.6vmin;
    top: 460vh;
    }
`

export const DAOTextContainer = styled.div`
position: relative;
left: 9.6vw;
    top: 1.1vh;
    width: fit-content;
    display: grid;
    grid-template-rows: 11.7vmax 15.4vmax 3vmax;
    height: 51vh;
    align-items: center;
    align-content: center;
    opacity:  0;

    @media (max-width: 480px){
        grid-row: 2/2;
    top: -2.4vh;
    left: 6.1vw;
    width: 90vw;
    grid-template-rows: 15.7vh 19.4vh 14vh;
    }
    @media (max-width:320px){
        top: 2.3vh;
    }
`
export const DAOTitle = styled.h1`
user-select: none;
text-transform: uppercase;
font-size: 10.4vw;
letter-spacing: 2.5vw;
height: 12.7vmax;

@media (max-width:480px){
    font-size: 15vw;
    letter-spacing: 1vw;
    height: 11.3vh;
}

`

export const DAOText = styled.p`
font-size: 1.56vw;
    padding-left: 0.5vw;
    line-height: 2.14vmax;

    @media (max-width:480px){
        font-size: 4.3vw;
        padding-left: 0.7vw;
        
    line-height: 2.8vh;
    }
`
export const DAOLearnMoreBtn =styled.div`
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

export const DAOElement = styled.img`
    width: 100%;
    height: 100%;
    max-width: 62vmin;
    max-height: 57vmin;
    position: relative;
    filter: drop-shadow(21px 24px 22px #c2c5cf);
    user-select: none;
    left: 5vw;
    top: 4vh;
    opacity: 0;

@media (max-width: 480px){
    max-width: fit-content;
    max-height: fit-content;
    max-width: 77vmin;
    max-height: 69vmin;
    top: 0;
    margin: 0;
    left: 1.5vw;
}
`
export const IMGDAOContainer = styled.div`
    position: relative;
    display: grid;
    grid-row: 1/1;
    grid-column: 1/2;
    align-items: center;
    justify-items: center;
    width: 44vw;
    @media (max-width:480px){
        width: 99vw;
        top: 1.5vh;
    }
`