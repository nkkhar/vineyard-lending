import React from 'react';
import { ReactComponent as ArrowElement }  from '../media/ArrowElement.svg';
import {FooterWrapper, ArrowWrapper, ArrowsContainer, ArrowBtn, FooterIMGContainer, FooterIMG, FooterInfoWrapper, FooterLogoContainer, FooterTextContainer, FooterLinesIMG, FooterBottom, FormBlock, SocialBlock, FooterLinks, 
TwitterLink, FacebookLink, DiscordLink} from '../styles/FooterStyles';
import VineyardLogo from '../media/VineyardLogo';
import { ReactComponent as TwitterIcon} from '../media/Social/TwitterIcon.svg';
import { ReactComponent as FacebookIcon} from '../media/Social/FacebookIcon.svg';
import { ReactComponent as DiscordIcon} from '../media/Social/DiscordIcon.svg';

export const Footer = () => {



  return (
    <FooterWrapper>  

      <FooterLinesIMG src="https://lh6.googleusercontent.com/JhjwJgWBHnNMPvRpuUBoi1PXKqYjumlD1aKolB22RmOaWs2nVbqzTbbcHmJkqa20hds=w2400"/>

    <ArrowWrapper>
      <ArrowsContainer onClick={() => {window.scrollTo({top: 0, behavior: "smooth"});}}>
          <ArrowElement/>
          <ArrowElement/>
          <ArrowElement/>
         <ArrowBtn onClick={() => {window.scrollTo({top: 0, behavior: "smooth"});}}>Go to top</ArrowBtn>
      </ArrowsContainer>

      
      </ArrowWrapper>   
          <FooterIMGContainer>
        <FooterIMG src="https://lh5.googleusercontent.com/xwSQbBgkzFsY-WOIBBmV4PJNHO_LW4G2KJKh1C1ljaULfThMQpb2zcesTNuC0USzv9Q=w2400"/>
      </FooterIMGContainer>

      <FooterInfoWrapper>
        <FooterLogoContainer>
          <VineyardLogo/>
        </FooterLogoContainer>
        <FooterTextContainer>
        <h2>Get Updates</h2>
        <h3>Subscribe to stay updated</h3>
        </FooterTextContainer>
        <FooterBottom>
          <FormBlock>
          <form>
          <input placeholder="Enter Email"/>
      <button>Submit</button>
          </form>
          </FormBlock>
          
          <SocialBlock>
            <div>
            <h2>Connect</h2>
            </div>
            <FooterLinks>
            <TwitterLink href="https://twitter.com/vineyardao_real" target="_blank"><TwitterIcon/></TwitterLink>
            <FacebookLink style={{visibility: "hidden"}}  href="https://www.google.com" target="_blank"><FacebookIcon/></FacebookLink>
            <DiscordLink style={{visibility: "hidden"}} href="https://www.google.com" target="_blank"><DiscordIcon/></DiscordLink></FooterLinks>
          </SocialBlock>
        </FooterBottom>

      </FooterInfoWrapper>
    </FooterWrapper>
    
  )
} 
export default Footer;