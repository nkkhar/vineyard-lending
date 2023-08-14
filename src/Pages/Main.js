import React, {useEffect} from 'react';
import  PartnerOneImg from '../media/Binance.svg';
import PartnerTwoImg from '../media/mariott.svg';

import VineyardLogo from '../media/VineyardLogo';
import {MainWrapper, MainBg, LogoContainer,InfoContainer, InfoMainTitle, InfoText, InfoMainText, InfoReadBtn, PartnersContainer, PartnersElement, PartnerOne, PartnerTwo} from '../styles/MainStyles';
import MediaQuery from 'react-responsive';





export const Main = () => {

  useEffect(() => {
    document.title = 'Vineyard DAO';
  }, []);  

  return (
    <div>

      <MediaQuery minWidth={481}>
  <MainBg src="https://lh4.googleusercontent.com/HuSSImzf-1Eg5MoRx1HEiOav9P8C-me9aF10tHMbRmUJwJN11Af-rcAMYYLr5ND7V1A=w2400"/>
  </MediaQuery>
    <MainWrapper>
      
      <LogoContainer><VineyardLogo/></LogoContainer>
      <InfoContainer>
        <InfoText >
        <InfoMainTitle >Vineyard Dao</InfoMainTitle>
        <InfoMainText>Vineyard DAO the on-chain enterprise that<br/> 
        reflects off-chain real structured business with<br/>   
        on-ramp & off-ramp cash flows. Ruled by DAO. <br/>   
        Simplified by GameFi</InfoMainText> 
        <InfoReadBtn href="https://drive.google.com/file/d/1rI92RgIJJCGFGBdblp5xT-YYQQjsSDCe/view?usp=sharing"  target="_blank" >Read more</InfoReadBtn>
        </InfoText>
       
      </InfoContainer>
      <PartnersContainer>
        <PartnersElement><PartnerOne src={PartnerOneImg} /></PartnersElement>
        <PartnersElement><PartnerTwo src={PartnerTwoImg } /></PartnersElement>
      </PartnersContainer>
   </MainWrapper>
   </div>
  )
} 
export default Main;
