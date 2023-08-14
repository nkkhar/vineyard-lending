import React, {useLayoutEffect} from 'react';
import { LSWrapper, LSLinesIMG, LSTextContainer, LSTitle, LSText,LSLearnMoreBtn,  LSElement, IMGLSContainer } from '../styles/LSstyles';
import {LearnMoreBtn} from '../styles/GlobalStyles';
import LearnMoreArrow from '../media/LearnMoreArrow';
import MediaQuery from 'react-responsive';
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const LSPage = () => {

  useLayoutEffect(() => {
   
    let tl = gsap.timeline({
      defaults: {
        immediateRender: false,
        opacity: 0
      },
      scrollTrigger: {
        trigger: ".AppearingAnimaitonLS",
        start: "15% center",
        end: "bottom bottom",

        
      }
    });
    function toPX(value) {
      return parseFloat(value) / 100 * (/vh/gi.test(value) ? window.innerHeight : window.innerWidth);
    }
    let mm = gsap.matchMedia();
    mm.add("(max-width: 480px)", () => {
        tl.to(".AppearingAnimaitonLS", {
      opacity: 1,
      y: toPX("4vh"), duration: "1.3"
    });
    tl.to(".AppearingAnimaitonTextLS", {
      opacity: 1,
      x: toPX("0"), duration: "1.1"
    });
    });
    mm.add("(min-width: 481px)", () => {
        tl.to(".AppearingAnimaitonLS", {
          opacity: 1,
          y: toPX("4.2vh"), duration: "0.8"
    });
    tl.to(".AppearingAnimaitonTextLS", {
      opacity: 1,
      x: toPX("3.5vw"), duration: "0.5"
    });
    });

    
    return () => {
      tl.kill();
    };
  }, []);

  return (
    <LSWrapper>
      <LSLinesIMG src="https://lh6.googleusercontent.com/fHa09iy2CSBVcNQ6M9ml8UDQIPBnzwyoqwn--XWrP9NNupXS1w_SnKDBr4UjelDNzAg=w2400"/>
    <LSTextContainer className="AppearingAnimaitonTextLS">
        <LSTitle>Staking</LSTitle>
        <MediaQuery maxWidth={480}>
        <LSText>
          The fungible tokens staking<br/> 
       mechanism  allows retail investors to<br/>  
     support Vineyard  DAO business <br/>  
     and its real estate by purchasing,<br/> 
      locking and staking native tokens,<br/>  
     gaining a percentage  from  the<br/> 
      project’s income in return
          </LSText></MediaQuery>
        <MediaQuery minWidth={481}>
        <LSText>The fungible tokens staking mechanism <br/>
        allows retail investors to support Vineyard  <br/>
      DAO business and its real estate by purchasing,  <br/>
       locking and staking  native tokens, gaining<br/>
        a percentage from  the project’s income in return</LSText></MediaQuery>
            <LSLearnMoreBtn>
           <LearnMoreBtn href="https://drive.google.com/file/d/1rI92RgIJJCGFGBdblp5xT-YYQQjsSDCe/view?usp=sharing"  target="_blank">Learn more <LearnMoreArrow/></LearnMoreBtn>
   </LSLearnMoreBtn> 
  </LSTextContainer>
    <IMGLSContainer>
    <LSElement src="https://lh3.googleusercontent.com/tPDSl2dfQPAx2IbzLdtmxJSuVJFwNQLySYcmT47zoQ2Pf_0sXteomAEV5Ae3qrIdbWQ=w2400" className="AppearingAnimaitonLS"/>
    </IMGLSContainer>

    </LSWrapper>
  )
}
export default LSPage
