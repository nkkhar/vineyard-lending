import React, {useLayoutEffect} from 'react';
import { PlatformWrapper, PlatformLinesIMG, PlatformTextContainer, PlatformLearnMoreBtn, PlatformTitle, PlatformText,  PlatformElement, IMGPlatformContainer } from '../styles/PlatformStyles';
import {LearnMoreBtn} from '../styles/GlobalStyles';
import LearnMoreArrow from '../media/LearnMoreArrow';
import MediaQuery from 'react-responsive';
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const PlatformPage = () => {
  useLayoutEffect(() => {
   
    let tl = gsap.timeline({
      defaults: {
        immediateRender: false,
        opacity: 0
      },
      scrollTrigger: {
        trigger: ".AppearingAnimaitonPlatform",
        start: "15% center",
        end: "bottom bottom",
        
      }
    });

    function toPX(value) {
      return parseFloat(value) / 100 * (/vh/gi.test(value) ? window.innerHeight : window.innerWidth);
    }
    let mm = gsap.matchMedia();
    mm.add("(max-width: 480px)", () => {
        tl.to(".AppearingAnimaitonPlatform", {
      opacity: 1,
      y: toPX("4vh"), duration: "1.3"
    });
    tl.to(".AppearingAnimaitonTextPlatform", {
      opacity: 1,
      x: toPX("0"), duration: "1.1"
    });
    });
    mm.add("(min-width: 481px)", () => {
        tl.to(".AppearingAnimaitonPlatform", {
      opacity: 1,
      y: toPX("-4.5vh"), duration: "0.8"
    });
    tl.to(".AppearingAnimaitonTextPlatform", {
      opacity: 1,
      x: toPX("-3.5vw"), duration: "0.5"
    });
    });

    
    return () => {
      tl.kill();
    };
  }, []);
  return (

    <PlatformWrapper >    
        <PlatformLinesIMG src='https://lh4.googleusercontent.com/eyguq_hSnIxBvmhPZ3ZKi8JTA7o02VqEN3vLKU3OhS-83cZw3tbDstyHcAtKW13JSFk=w2400'/>
    <IMGPlatformContainer>
    <PlatformElement src='https://lh5.googleusercontent.com/FkVkCkn4tPAZ83cWoAUygECYVsddmwtFqs02tgAWTaLVuCT8ldGfsQzjFTUoB5DvIsU=w2400' className="AppearingAnimaitonPlatform"/>
    </IMGPlatformContainer>

    <PlatformTextContainer className="AppearingAnimaitonTextPlatform">
        <PlatformTitle>Platform</PlatformTitle>
        <MediaQuery maxWidth={480}>
        <PlatformText>
        Our platform helps businesses<br/> 
         implement blockchain into deep<br/>  
        business processes. By registering<br/> 
         with us, a business undergoes a KYB<br/>  
         check  and then it gets the opportunity<br/>  
         to connect all the necessary services<br/>  
          and aggregators for accounting<br/> 
          and controlling its business. Our<br/>
         platform serves as a marketplace<br/> 
        for businesses that are similar to our <br/>
         own to be gathered.<br/>
            </PlatformText></MediaQuery>
        <MediaQuery minWidth={481}>
        <PlatformText>
        Our platform helps businesses implement<br/>
        blockchain into deep business processes. By<br/>
        registering with us, a business undergoes a KYB<br/>
        check and then it gets the opportunity to connect<br/>
        all the necessary services and aggregators for<br/>
        accounting and controlling its business. Our<br/>
        platform serves as a marketplace for businesses<br/>
        that are similar to our own to be gathered.<br/>
            </PlatformText></MediaQuery>
           <PlatformLearnMoreBtn>
           <LearnMoreBtn href="https://drive.google.com/file/d/1rI92RgIJJCGFGBdblp5xT-YYQQjsSDCe/view?usp=sharing"  target="_blank">Learn more <LearnMoreArrow/></LearnMoreBtn>
   </PlatformLearnMoreBtn> 
  </PlatformTextContainer>


    </PlatformWrapper>
  )
}
export default PlatformPage
