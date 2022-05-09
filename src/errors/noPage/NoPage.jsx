import React from 'react'
import { Wrapper, Banner, Message } from './style'
import { VscBracketError } from 'react-icons/vsc'
import { Link } from 'react-router-dom'

const NoPage = () => {
  return (
    <Wrapper>
      <Message>
        <h1><span>U</span>pps<span> !</span></h1>
        <span>This Page Doesn't Exist</span>

        <Link to='/'>Go Back</Link>
      </Message>

      <Banner>
        <VscBracketError />
      </Banner>
    </Wrapper>
  )
}

export default NoPage