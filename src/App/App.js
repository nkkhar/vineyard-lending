
import React, { useEffect, useState} from "react";
import Header from '../Header/Header';
import {GlobalApp} from '../styles/GlobalStyles';
import Main from "../Pages/Main";
import BIZIFIPage from "../Pages/BIZIFIPage";
import NFTPage from "../Pages/NFTPage";
import LSPage from "../Pages/LSPage";
import DAOPage from "../Pages/DAOPage";
import GameFIPage from "../Pages/GameFIPage";
import PlatformPage from "../Pages/PlatformPage";
import ComplexPage from "../Pages/ComplexPage";
import Footer from "../Pages/FooterPage";
import MediaQuery from 'react-responsive'
import { PrivacyBtn} from '../styles/FooterStyles';
import PrivacyPage from '../Pages/PrivacyPage';
import VineyardLogo from '../media/VineyardLogo';
import { LogoContainer } from '../styles/MainStyles';
import {HeaderContainer, HeaderBtn, DocsLink, StyledBurger, HeaderBtnContainer, Ul} from '../styles/HeaderStyles';
import { FooterSkeleton } from "../styles/FooterStyles";


function App() {   

  useEffect(() => {
    if (/Android|webOS|iPhone|iPad|iPod|pocket|psp|kindle|avantgo|blazer|midori|Tablet|Palm|maemo|plucker|phone|BlackBerry|symbian|IEMobile|mobile|ZuneWP7|Windows Phone|Opera Mini/i.test(navigator.userAgent)){
   window.onorientationchange = function() {  	
    window.location.reload(); 
    window.scrollTo(0, 0); };
          };
         });
   

     useEffect(() => {
       
       window.onorientationchange = function() {  	window.location.reload();  window.scrollTo(0, 0); };
   
       if (!/Android|webOS|iPhone|iPad|iPod|pocket|psp|kindle|avantgo|blazer|midori|Tablet|Palm|maemo|plucker|phone|BlackBerry|symbian|IEMobile|mobile|ZuneWP7|Windows Phone|Opera Mini/i.test(navigator.userAgent)){
           window.addEventListener('resize', function ()
           { "use strict"; window.location.reload(); });
           window.onbeforeunload = function () {
            window.scrollTo(0, 0);
        }
          };
         });

         const [isShown, setIsShown] = useState(false);

         const handleClick = event => {
           // 👇️ toggle shown state
           setIsShown(current => !current);
       
           // 👇️ or simply set it to true
           // setIsShown(true);
         };
         const [open, setOpen] = useState(false);
  return (
 <div>
        {isShown ? (
          <div>
            <div>
  <MediaQuery maxWidth={480}>
  <StyledBurger open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </StyledBurger>
      <Ul open={open}>
      <LogoContainer><VineyardLogo/></LogoContainer>
      <HeaderBtnContainer>
      <HeaderBtn open={open} onClick={() => setOpen(!open)} ><span onClick={() => {window.scrollTo(0, 0); handleClick()}}>Home</span></HeaderBtn>
        <HeaderBtn><DocsLink href="https://www.google.com" target="_blank">Docs</DocsLink></HeaderBtn>
        <HeaderBtn><DocsLink href="https://drive.google.com/file/d/1eByL0HaHjg3SOXHpxgzhQ5_BdaPJ6Qes/view" target="_blank">Pitch Deck</DocsLink></HeaderBtn>
        </HeaderBtnContainer>
    </Ul>

  </MediaQuery>


<MediaQuery minWidth={481}>
    <HeaderContainer>
      <HeaderBtnContainer>
        <HeaderBtn onClick={() => {window.scrollTo(0, 0); handleClick()}}>Home</HeaderBtn>
        <HeaderBtn><DocsLink href="https://drive.google.com/file/d/1rI92RgIJJCGFGBdblp5xT-YYQQjsSDCe/view?usp=sharing" target="_blank">Docs</DocsLink></HeaderBtn>
        <HeaderBtn><DocsLink href="https://drive.google.com/file/d/1eByL0HaHjg3SOXHpxgzhQ5_BdaPJ6Qes/view" target="_blank">Pitch Deck</DocsLink></HeaderBtn>
        </HeaderBtnContainer>
    </HeaderContainer></MediaQuery></div>
       <PrivacyPage/> </div>  
      ) : <GlobalApp >
          <Header/> 
    <Main />
  <BIZIFIPage  />
  <NFTPage />
  <LSPage />
  <DAOPage />
  <GameFIPage />
  <PlatformPage/>
  <ComplexPage/>
  <FooterSkeleton>
  
  <Footer></Footer>
  <PrivacyBtn type="button" onClick={handleClick}> Privacy Policy</PrivacyBtn> 
  </FooterSkeleton>
  </GlobalApp>}

</div>






  );
  
}
export default App;