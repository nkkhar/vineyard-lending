import React, {useLayoutEffect } from 'react'
import {BIZFIWrapper, BIZFILinesIMG, BizfiBg, BIZFITextContainer, BIZFITitle, BIZFIText, BIZFILearnMoreBtn, BIZFIElement, IMGBIZFIContainer} from '../styles/BIZFIStyles';
import {LearnMoreBtn} from '../styles/GlobalStyles';
import LearnMoreArrow from '../media/LearnMoreArrow';
import MediaQuery from 'react-responsive';
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
export const BIZIFIPage= () => {
 


  useLayoutEffect(() => {
 let tl = gsap.timeline({
      defaults: {
        immediateRender: false,
        opacity: 0
      },
      scrollTrigger: {
        trigger: ".AppearingAnimaitonBIZFI",
        start: "15% center",
        end: "bottom bottom",
        
      }
    });

    function toPX(value) {
      return parseFloat(value) / 100 * (/vh/gi.test(value) ? window.innerHeight : window.innerWidth);
    }
    let mm = gsap.matchMedia();
    mm.add("(max-width: 480px)", () => {
        tl.to(".AppearingAnimaitonBIZFI", {
      opacity: 1,
      y: toPX("4vh"), duration: "1.3"
    });
    tl.to(".AppearingAnimaitonTextBIZFI", {
      opacity: 1,
      x: toPX("0"), duration: "1"
    });
    });
    mm.add("(min-width: 481px)", () => {
        tl.to(".AppearingAnimaitonBIZFI", {
      opacity: 1,
      y: toPX("3.2vh"), duration: "0.8"
    });
    tl.to(".AppearingAnimaitonTextBIZFI", {
      opacity: 1,
      x: toPX("3.5vw"), duration: "0.5"
    });
    });

    
    return () => {
      tl.kill();
    };
  }, []);


  

  return (
    
    <BIZFIWrapper>
      <BizfiBg src="https://lh5.googleusercontent.com/HIRRX0xS6CZneiJHPI-Jd5sQJ7H4xIwa7TBNcYv4s_owxk9ZjuoMLlgxoauDJAzJ-t4=w2400"/>
      <BIZFILinesIMG src="https://lh6.googleusercontent.com/fHa09iy2CSBVcNQ6M9ml8UDQIPBnzwyoqwn--XWrP9NNupXS1w_SnKDBr4UjelDNzAg=w2400"/>
    <BIZFITextContainer  className="AppearingAnimaitonTextBIZFI"> 
     
        <BIZFITitle>BIZFI</BIZFITitle>
        <MediaQuery maxWidth={480}>
        <BIZFIText>An innovative approach to<br/>  
        cryptocurrency technologies. <br/> 
         BizFi is a new category under DeFi that<br/> 
          allows retail investors to become<br/>
          shareholders keeping capital on-chain,<br/> 
          excluding paperwork and bureaucracy</BIZFIText></MediaQuery>
           
        <MediaQuery minWidth={481}>
        <BIZFIText>An innovative approach to cryptocurrency<br/> 
        technologies. BizFi is a new category under DeFi<br/>
         that allows retail investors to become shareholders<br/>
          keeping capital on-chain, excluding paperwork and<br/>
           bureaucracy</BIZFIText>
           </MediaQuery>
           <BIZFILearnMoreBtn>
           <LearnMoreBtn href="https://drive.google.com/file/d/1rI92RgIJJCGFGBdblp5xT-YYQQjsSDCe/view?usp=sharing"  target="_blank" >Learn more <LearnMoreArrow/></LearnMoreBtn>
   </BIZFILearnMoreBtn> 
   </BIZFITextContainer>

    <IMGBIZFIContainer>
    <BIZFIElement src="https://lh4.googleusercontent.com/VXjw_98tLEWkzYfVRSkH6wWa6kCB6YfAO8HhnBGKrDUTp-cHfrkAoYYcBY7BFOcMHFE=w2400" className="AppearingAnimaitonBIZFI"/>
    </IMGBIZFIContainer>


   </BIZFIWrapper>
  )
} 
export default BIZIFIPage;