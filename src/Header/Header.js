import React, {useEffect,useState} from 'react'
import {HeaderContainer, HeaderBtn, DocsLink, StyledBurger, HeaderBtnContainer, Ul} from '../styles/HeaderStyles';
import MediaQuery from 'react-responsive';
import VineyardLogo from '../media/VineyardLogo';
import { LogoContainer } from '../styles/MainStyles';

export const Header = () => {   
   useEffect(() => {
    window.scrollTo(0, 0);
    }, []);

    const [open, setOpen] = useState(false);

    const ScrollTop = () => {
      useEffect(() => {
        window.scrollTo(0, 0);
        
        }, []);
      
    }

    const ScrollClose = () => {
     
        setOpen(!open);

      
    }
    //onToggle={() => {window.scrollTo(0, 0);}} onClick={() => setOpen(!open); 
  return (
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
      <HeaderBtn open={open} onClick={() => setOpen(!open)} ><span onClick={() => {window.scrollTo(0, 0);}}>Home</span></HeaderBtn>
        <HeaderBtn><DocsLink href="https://drive.google.com/file/d/1rI92RgIJJCGFGBdblp5xT-YYQQjsSDCe/view?usp=sharing" target="_blank">Docs</DocsLink></HeaderBtn>
        <HeaderBtn><DocsLink href="https://drive.google.com/file/d/1eByL0HaHjg3SOXHpxgzhQ5_BdaPJ6Qes/view" target="_blank">Pitch Deck</DocsLink></HeaderBtn>
        </HeaderBtnContainer>
    </Ul>

  </MediaQuery>


<MediaQuery minWidth={481}>
    <HeaderContainer>
      <HeaderBtnContainer>
        <HeaderBtn onClick={() => {window.scrollTo(0, 0);}}>Home</HeaderBtn>
        <HeaderBtn><DocsLink href="https://drive.google.com/file/d/1rI92RgIJJCGFGBdblp5xT-YYQQjsSDCe/view?usp=sharing" target="_blank">Docs</DocsLink></HeaderBtn>
        <HeaderBtn><DocsLink href="https://drive.google.com/file/d/1eByL0HaHjg3SOXHpxgzhQ5_BdaPJ6Qes/view" target="_blank">Pitch Deck</DocsLink></HeaderBtn>
        </HeaderBtnContainer>
    </HeaderContainer></MediaQuery></div>
  )
}
export default Header;
