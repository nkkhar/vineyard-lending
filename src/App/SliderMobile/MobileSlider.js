import React, { Component, useState } from "react";
import Slider from "react-slick";
import {SliderWrapper, SlideContainer} from './MoblieSliderStyles';
import { ComplexModal, ComplexImgModal, CloseModalBtn} from '../../styles/ComplexStyles';
import {ReactComponent as ComplexModalCLoseBtn} from '../../media/ComplexModalCLoseBtn.svg';




export const MobileSlider = () => {



    
    const [modal1Open, setModal1Open] = useState(false);
const [modal2Open, setModal2Open] = useState(false);
const [modal3Open, setModal3Open] = useState(false);
const [modal4Open, setModal4Open] = useState(false);

const openModal1 = () => {
  setModal1Open(true);
}

const closeModal1 = () => {
  setModal1Open(false);
}

const openModal2 = () => {
  setModal2Open(true);
}

const closeModal2 = () => {
  setModal2Open(false);
}

const openModal3 = () => {
  setModal3Open(true);
}

const closeModal3 = () => {
  setModal3Open(false);
}

const openModal4 = () => {
  setModal4Open(true);
}

const closeModal4 = () => {
  setModal4Open(false);
}
    const settings = {
      dots: false,
      arrows: false,
      infinite: true,
      autoplay: false,
      speed: 2000,
      autoplaySpeed: 5000,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
   

    return (
      <div>
      <SliderWrapper>
        <Slider {...settings}>
       <SlideContainer>
        <img src="https://lh6.googleusercontent.com/sitc6pOQtHbsK3JCDM0pV5WoOx1r70XZfXnrEDKU1RE9argEWHwdvWhS7ikMRE3efPc=w2400" onClick={openModal1} />
        </SlideContainer>
       <SlideContainer>
        <img src="https://lh4.googleusercontent.com/N6XN6ZS7cuuPLAi_Tq0iqbteX9ZveLq9_HXBl8QBcOTDu1-vUegRee-WPLk-qMuRxZY=w2400" onClick={openModal2} />
       </SlideContainer>

       <SlideContainer>
        <img src="https://lh6.googleusercontent.com/VnwmpOklo4kF2z8PZv_GRHA_zZWxrFXuPypb_5VHDLHCDFA1znusFWVz-FgElmsvYvA=w2400" onClick={openModal3} />
       </SlideContainer>

       <SlideContainer>
        <img src="https://lh3.googleusercontent.com/NXx3Koe7y7Jd0JxgqN26th57Kd71p5zVq4DaRtPS1014GIxqaMVnfY1_-UyOJNDcD4c=w2400" onClick={openModal4} />
       </SlideContainer>
        </Slider>
      </SliderWrapper>

    <ComplexModal open={modal1Open} onClick={closeModal1}>
    <CloseModalBtn onClick={closeModal1}><ComplexModalCLoseBtn/></CloseModalBtn>
      <ComplexImgModal  src="https://lh4.googleusercontent.com/uY3Ut5nV-bQf2zd3WOfDf23T935GMjbTmw7ZpY2rn2UsbaWcDSCWRM4IWzEU_4lbn_0=w2400"/>
    </ComplexModal>

    <ComplexModal open={modal2Open} onClick={closeModal2}>
      <div>
      <CloseModalBtn onClick={closeModal2}><ComplexModalCLoseBtn/></CloseModalBtn>
      <ComplexImgModal src="https://lh4.googleusercontent.com/5QVU-hS_zlJu73_CNVRFSQQC15PEPPUeic6omrT4JnNoAcclfrPzPXLqd8zSHfLvyH0=w2400"/>
    </div>
    </ComplexModal>

    <ComplexModal open={modal3Open} onClick={closeModal3}>
      <div>
      <CloseModalBtn onClick={closeModal3}><ComplexModalCLoseBtn/></CloseModalBtn>
      <ComplexImgModal src="https://lh3.googleusercontent.com/xOLZXzZJordR-ddTFLIRsEXF9ttpsDeblacvJt4gAZXTm5mmC-J6CTUnZkJQgx7D26M=w2400"/>
   </div> 
   </ComplexModal>
    <ComplexModal open={modal4Open} onClick={closeModal4}>
      <div>
      <CloseModalBtn onClick={closeModal4}><ComplexModalCLoseBtn/></CloseModalBtn>
      <ComplexImgModal src="https://lh3.googleusercontent.com/D3t3NbgdUo7Xfd_0-QsK1IuBQ6Oq9wZ8hye4tpWonkRoYsfPU5ZpOTKHfs2kI5zz3so=w2400"/>
    </div>
    </ComplexModal>
      </div>
    );
  } 
export default MobileSlider;