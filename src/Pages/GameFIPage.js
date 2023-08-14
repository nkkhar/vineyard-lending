import React, {useLayoutEffect} from 'react';
import { GameFIWrapper, GameFILinesIMG, GameFITextContainer, GameFILearnMoreBtn, GameFITitle, GameFIText,  GameFIElement, IMGGameFIContainer} from '../styles/GameFIStyles';
import {LearnMoreBtn} from '../styles/GlobalStyles';
import LearnMoreArrow from '../media/LearnMoreArrow';
import MediaQuery from 'react-responsive';
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const GameFIPage = () => {
  useLayoutEffect(() => {
   
    let tl = gsap.timeline({
      defaults: {
        immediateRender: false,
        opacity: 0
      },
      scrollTrigger: {
        trigger: ".AppearingAnimaitonGameFI",
        start: "15% center",
        end: "bottom bottom",
        
      }
    });

    function toPX(value) {
      return parseFloat(value) / 100 * (/vh/gi.test(value) ? window.innerHeight : window.innerWidth);
    }
    let mm = gsap.matchMedia();
    mm.add("(max-width: 480px)", () => {
        tl.to(".AppearingAnimaitonGameFI", {
      opacity: 1,
      y: toPX("4vh"), duration: "1.3"
    });
    tl.to(".AppearingAnimaitonTextGameFI", {
      opacity: 1,
      x: toPX("0"), duration: "1.1"
    });
    });
    mm.add("(min-width: 481px)", () => {
        tl.to(".AppearingAnimaitonGameFI", {
          opacity: 1,
          y: toPX("4.2vh"), duration: "0.8"
    });
    tl.to(".AppearingAnimaitonTextGameFI", {
      opacity: 1,
      x: toPX("3.5vw"), duration: "0.5"
    });
    });
    
    return () => {
      tl.kill();
    };
  }, []);


  return (
    <GameFIWrapper>
      <GameFILinesIMG src="https://lh3.googleusercontent.com/Vv_QtnHeYgMGztOsadZjOChnikyaIp1LkPWuFLljrs0_J1r3Kcz15FBbSeSuy1S9oGY=w2400"/>
    <GameFITextContainer className="AppearingAnimaitonTextGameFI">
        <GameFITitle>GameFi</GameFITitle>
        <MediaQuery maxWidth={480}>
        <GameFIText>The structural real-world enterprise,<br/> 
         hotel complex, and vineyard are<br/>
         located  in the sun-drenched<br/>
          landscapes of Georgia. The<br/> 
          business management model<br/>   
          is highly integrated 
             </GameFIText></MediaQuery>
        <MediaQuery minWidth={481}>
        <GameFIText>The structural real-world enterprise, hotel complex,<br/> 
        and vineyard are located in the sun-drenched<br/>
         landscapes of Georgia. The business management<br/>
          model is highly integrated</GameFIText></MediaQuery>
           <GameFILearnMoreBtn>
           <LearnMoreBtn href="https://drive.google.com/file/d/1rI92RgIJJCGFGBdblp5xT-YYQQjsSDCe/view?usp=sharing"  target="_blank">Learn more <LearnMoreArrow/></LearnMoreBtn>
   </GameFILearnMoreBtn> 
  </GameFITextContainer>
    <IMGGameFIContainer>
    <GameFIElement src="https://lh6.googleusercontent.com/mvswizpub5IZuPLvbl5Kfz36WIygP5fMa7e4ManKecQusnGXABl7rTv3lGo0wfMNs2w=w2400" className="AppearingAnimaitonGameFI"/>
    </IMGGameFIContainer>

    </GameFIWrapper>
  )
}
export default GameFIPage
