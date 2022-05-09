import React from 'react'
import { NoSupport, is_touch_enabled } from './errors/index'
import { Wrapper } from './style'


const Games = () => {
  if(is_touch_enabled()) {return <NoSupport />}
  
  return (
    <Wrapper>Games</Wrapper>
  )
}

export default Games