import React from 'react'
import { FaGithub, FaInstagram } from 'react-icons/fa'
import { Wrapper, List } from './style'

const ContactLinks = () => {
  return (
    <Wrapper>
      <List>
        <li>
          <a href='https://github.com/mr-ema' target='_blank' className='link'><FaGithub /></a>
        </li>
      </List>
    </Wrapper>
  )
}

export default ContactLinks