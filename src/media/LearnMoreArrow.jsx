import React from 'react'
import styled from 'styled-components'

const Svg = styled.svg` 
height: 1vh;
    width: 2vw;
    @media (max-width: 480px){
      height: 1vh;
    width: 4vw;
    }

`

const LearnMoreArrow = ({ className }) => {
  return (
<Svg width="22" height="10" viewBox="0 0 22 10" fill="#5E5E5E" xmlns="http://www.w3.org/2000/svg">
<path d="M21.8854 4.54688L17.276 0.0572968V3.42188H0V5.66667H17.276V9.03126L21.8854 4.54688Z" />
</Svg>
  )
}

export default LearnMoreArrow







