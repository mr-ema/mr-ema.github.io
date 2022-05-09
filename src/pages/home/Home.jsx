import React, { useState } from 'react'
import { Wrapper, InfoBox, Technologies, Info, Name, Avatar, Slogan, ContactMe} from './style'
import avatar from './images/avatar.png'
import Form from './Form/Form'
import { ContactLinks } from 'Components'

const Home = () => {
  const [contactMe, setContactMe] = useState(false)

  function handleClose() {
    setContactMe(!contactMe)
  }

  if (contactMe) {
    return <Form close={handleClose}/>
  }

  return (
    <>
    <Wrapper>
      <ContactLinks />
      <InfoBox>
        <Slogan>
          <Name>Antonio Lombardo</Name>
          <Info>Web Developer</Info>
          <Technologies><b>[</b> React • NodeJs • MongoDB <b>]</b></Technologies>
          <ContactMe onClick={() => setContactMe(!contactMe)}>Contact Me</ContactMe>
        </Slogan>
        <Avatar>
          <img src={avatar} alt='logo' />
        </Avatar>
      </InfoBox>
    </Wrapper>
    </>
  )
}

export default Home