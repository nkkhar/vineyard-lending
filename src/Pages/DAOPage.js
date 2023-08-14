import React, {useLayoutEffect} from 'react';
import { DAOWrapper, DAOLinesIMG, DAOTextContainer, DAOLearnMoreBtn, DAOTitle, DAOText,  DAOElement, IMGDAOContainer } from '../styles/DAOStyles';
import {LearnMoreBtn} from '../styles/GlobalStyles';
import LearnMoreArrow from '../media/LearnMoreArrow';

import MediaQuery from 'react-responsive';
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const DAOPage = () => {
  
  useLayoutEffect(() => {
   
    let tl = gsap.timeline({
      defaults: {
        immediateRender: false,
        opacity: 0
      },
      scrollTrigger: {
        trigger: ".AppearingAnimaitonDAO",
        start: "15% center",
        end: "bottom bottom",

        
      }
    });

    function toPX(value) {
      return parseFloat(value) / 100 * (/vh/gi.test(value) ? window.innerHeight : window.innerWidth);
    }
    let mm = gsap.matchMedia();
    mm.add("(max-width: 480px)", () => {
        tl.to(".AppearingAnimaitonDAO", {
      opacity: 1,
      y: toPX("4vh"), duration: "1.3"
    });
    tl.to(".AppearingAnimaitonTextDAO", {
      opacity: 1,
      x: toPX("0"), duration: "1.1"
    });
    });
    mm.add("(min-width: 481px)", () => {
        tl.to(".AppearingAnimaitonDAO", {
      opacity: 1,
      y: toPX("-4.5vh"), duration: "0.8"
    });
    tl.to(".AppearingAnimaitonTextDAO", {
      opacity: 1,
      x: toPX("-3.5vw"), duration: "0.5"
    });
    });

    
    return () => {
      tl.kill();
    };
  }, []);

  return (

    <DAOWrapper >    
        <DAOLinesIMG src="https://lh5.googleusercontent.com/Ot0140SdhtPN59jPT7zh2KZffi1M05H7GOFDUkLBSiAhD024SyEnHruOk47gSr-rpV4=w2400"/>
    <IMGDAOContainer>
    <DAOElement src="https://lh3.googleusercontent.com/YsMwNF7BG5H9bqc_Z38Jd7debi1T_mvJRQb-5md4Hh5M2-H72Wui2jfMnSkFUpCY_-k=w2400" className="AppearingAnimaitonDAO"/>
    </IMGDAOContainer>

    <DAOTextContainer className='AppearingAnimaitonTextDAO'>
        <DAOTitle>DAO</DAOTitle>
        <MediaQuery maxWidth={480}>
        <DAOText>The Board of Directors is modified and<br/>  
      improved  by implementing a publicly<br/>  
      viewable on-chain  voting process - <br/> 
        DAO governance. NFT ownership is a<br/> 
        pass to the DAO entry. DAO requires<br/>
         accountability for the vote as it actually<br/>
          affects the physical condition of<br/> 
           Vineyard DAO's business, its<br/> 
            profitability, and investment interest</DAOText></MediaQuery>

        <MediaQuery minWidth={481}>
        <DAOText>The Board of Directors is modified and improved<br/> 
        by implementing a publicly viewable on-chain<br/> 
        voting process - DAO governance. NFT ownership<br/> 
        is a pass to the DAO entry. DAO requires<br/>
         accountability for the vote as it actually affects the<br/>
          physical condition of Vineyard DAO's business, its<br/>
           profitability, and investment interest</DAOText></MediaQuery>
           <DAOLearnMoreBtn>
           <LearnMoreBtn href="https://drive.google.com/file/d/1rI92RgIJJCGFGBdblp5xT-YYQQjsSDCe/view?usp=sharing"  target="_blank" >Learn more <LearnMoreArrow/></LearnMoreBtn>
   </DAOLearnMoreBtn> 
  </DAOTextContainer>


    </DAOWrapper>
  )
}
export default DAOPage
