import React, {useLayoutEffect} from 'react';
import { NFTWrapper, NFTLinesIMG, NFTLearnMoreBtn, NFTTextContainer, NFTTitle,NFTText, NFTElement, IMGNFTContainer  } from '../styles/NFTPageStyles';
import {LearnMoreBtn} from '../styles/GlobalStyles';
import LearnMoreArrow from '../media/LearnMoreArrow';
import MediaQuery from 'react-responsive';
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const NFTPage = () => {
  useLayoutEffect(() => {
   
    let tl = gsap.timeline({
      defaults: {
        immediateRender: false,
        opacity: 0
      },
      scrollTrigger: {
        trigger: ".AppearingAnimaitonNFT",
        start: "15% center",
        end: "bottom bottom",
      }
    });

    function toPX(value) {
      return parseFloat(value) / 100 * (/vh/gi.test(value) ? window.innerHeight : window.innerWidth);
    }
    let mm = gsap.matchMedia();
    mm.add("(max-width: 480px)", () => {
        tl.to(".AppearingAnimaitonNFT", {
      opacity: 1,
      y: toPX("5vh"), duration: "1.3"
    });
    tl.to(".AppearingAnimaitonTextNFT", {
      opacity: 1,
      x: toPX("0"), duration: "1.1"
    });
    });
    mm.add("(min-width: 481px)", () => {
        tl.to(".AppearingAnimaitonNFT", {
      opacity: 1,
      y: toPX("-3.5vh"), duration: "0.8"
    });
    tl.to(".AppearingAnimaitonTextNFT", {
      opacity: 1,
      x: toPX("-3.5vw"), duration: "0.5"
    });
    });


    
    return () => {
      tl.kill();
    };
  }, []);
  return (
    
    <NFTWrapper >
          <NFTLinesIMG src="https://lh6.googleusercontent.com/JhjwJgWBHnNMPvRpuUBoi1PXKqYjumlD1aKolB22RmOaWs2nVbqzTbbcHmJkqa20hds=w2400"/>
    <IMGNFTContainer>

    <NFTElement src="https://lh4.googleusercontent.com/S8dxmKdjLrAgULq0tjdjlbC9InpsONLv9QdQSUiSvQlW1FVrfb3JJUM1KA0Qm8cqPew=w2400" className="AppearingAnimaitonNFT"/>
   
    </IMGNFTContainer>
<NFTTextContainer className="AppearingAnimaitonTextNFT">
        <NFTTitle>NFT</NFTTitle>
        <MediaQuery maxWidth={480}>
        <NFTText>Non-Fungible Tokens are key<br/> 
         cryptographic assets. NFTs with unique<br/>
          metadata allow retail investors to own<br/>   
          and manage a piece of the Vineyard<br/> 
          DAO’s real estate and business units,<br/> 
          categorized into multiple divisions with <br/> 
          different characteristics and property<br/> 
           types</NFTText></MediaQuery>

        <MediaQuery minWidth={481}>
        <NFTText>Non-Fungible Tokens are key cryptographic assets.<br/> 
        NFTs with unique metadata allow retail investors to<br/> 
        own and manage a piece of the Vineyard DAO’s<br/>
         real estate and business units, categorized into<br/>
          multiple divisions with different characteristics and<br/>
           property types</NFTText></MediaQuery> 
            <NFTLearnMoreBtn>
           <LearnMoreBtn href="https://drive.google.com/file/d/1rI92RgIJJCGFGBdblp5xT-YYQQjsSDCe/view" target="_blank">Learn more <LearnMoreArrow/></LearnMoreBtn>
   </NFTLearnMoreBtn> 
  </NFTTextContainer>

    </NFTWrapper>
  )
}
export default NFTPage
