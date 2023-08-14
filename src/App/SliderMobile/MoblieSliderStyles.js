import styled from 'styled-components';

export const SliderWrapper = styled.div`
height: 23vh;
.slick-slider{
    width: 59vw !important;
    left: -1% !important;
    height: 19vh !important;
    top: -1vh;
    position: relative !important;
    outline: none;
}

.slick-list{
    width: 102%;
    height: 65vh !important;
    outline: none;
}

.slick-track{
    display: flex !important;
    outline: none;
}

.slick-slide{
    width: 100vw !important;
    display: grid;
    justify-items: center;
    transition: 2s;
    outline: none;
}

.slick-active img{
    transition: 2s;
    filter: grayscale(0);
}

`

export const SlideContainer = styled.div`
display: grid !important;
    justify-content: center;
    justify-items: center;
    

img{
    width: 50vw;
    height: 36vh;
    filter: grayscale(1);
    cursor: pointer;
}



`
