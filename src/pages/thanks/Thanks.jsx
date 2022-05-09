import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { MessageBox, Wrapper, ImageBox } from './style'
import thanks from './thanks.png'

const Thanks = () => {
  const goTo = useNavigate()
  
  useEffect(() => {
    const back = setTimeout(() => goTo('/'), 4600)

    return () => clearTimeout(back)
  }, [])

  return (
    <Wrapper>
      <MessageBox>
        <h1><span>T</span>han<span>ks !</span></h1>
        <span>└► I will contact you as soon as possible. ◄┘</span>
      </MessageBox>
      
      <ImageBox>
        <img src={thanks} alt='cheers' />
      </ImageBox>
    </Wrapper>
    
  )
}

export default Thanks