import React from 'react'
import { Wrapper, Banner, Message } from './style'
import { GiSadCrab } from 'react-icons/gi'

const NoSupport = () => {
  return (
    <Wrapper>
      <Message>
        <h1><span>SORRY.</span> Your device is not supported.</h1>
        <span>► Try on a desktop or try disabling touch</span>
      </Message>
      <Banner><GiSadCrab/></Banner>
    </Wrapper>
  )
}

export default NoSupport