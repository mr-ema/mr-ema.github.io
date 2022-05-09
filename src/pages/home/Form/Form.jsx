import React, { useState } from 'react'
import { Wrapper, Exit, FormBox, Container, Pront, Message, Send, TopBar, InputBox, BgClip } from './style'

const Form = ( { close } ) => {
  const [invalid, setInvalid] = useState(false)

  return (
    <Wrapper>
      <BgClip />
        <Container>
          <TopBar>
            {invalid && <span className='required'>( # ) Required fields</span>}
            <Exit onClick={close}><span>{'×'}</span></Exit>
          </TopBar>

          <FormBox autoComplete='off' action='https://formsubmit.co/02b4fc6f6a8fd5c34d6ae644babfa5eb' method='POST' onInvalid={() => setInvalid(true)}>           
            <InputBox>
              <Pront htmlFor='name'>►</Pront>
              <input  type='text' name='name' id='name' placeholder='Your Name' maxLength='50' required />
              {invalid && <span className='invalid'>(#)</span>}
            </InputBox>
           
            <InputBox>
              <Pront htmlFor='email'>►</Pront>
              <input type='email' name='email' id='email' placeholder='Your Email Address' maxLength='64' required />
              {invalid && <span className='invalid'>(#)</span>}
            </InputBox>

            <InputBox>
              <Pront htmlFor='message'>► </Pront>
              <Message name='message' id='message' rows='4' maxLength='200' placeholder='Short Message ( optional )'></Message>
            </InputBox>

            <input type='hidden' name='_captcha' value='false'/>
            <input type='hidden' name='_subject' value='Portofolio Contact'/>
            <input type='hidden' name='_template' value='table'/>
            <input type='hidden' name='_next' value='https://mr-ema.github.io/#/thanks'/>
            <Send type='submit'>{'Send'}</Send>
          </FormBox>
        </Container>
     
    </Wrapper>
  )
}

export default Form