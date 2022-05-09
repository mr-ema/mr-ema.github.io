import React from 'react'
import { BiCodeBlock } from 'react-icons/bi'
import { Wrapper, Banner, Message } from './style'

const Working = ({message}) => {
  return (
    <Wrapper>
      <Message>
        <h1><span>W</span>ork<span>ing</span></h1>
        <span>{message}</span>
      </Message>
      <Banner>
        <BiCodeBlock />
      </Banner>
    </Wrapper>
  )
}

export default Working