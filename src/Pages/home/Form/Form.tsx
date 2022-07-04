import React from 'react';
import styled, { keyframes } from 'styled-components';

type Props = {
  close: () => void,
}

export default function Form( { close }: Props ): React.FunctionComponentElement<JSX.Element> {
  const [invalid, setInvalid] = React.useState<boolean>(false);

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
              <Pront htmlFor='name'></Pront>
              <input  type='text' name='name' id='name' placeholder='Your Name' maxLength={50} required />
              {invalid && <span className='invalid'>(#)</span>}
            </InputBox>
           
            <InputBox>
              <Pront htmlFor='email'></Pront>
              <input type='email' name='email' id='email' placeholder='Your Email Address' maxLength={64} required />
              {invalid && <span className='invalid'>(#)</span>}
            </InputBox>

            <InputBox>
              <Pront htmlFor='message'></Pront>
              <Message name='message' id='message' rows={4} maxLength={200} placeholder='Short Message ( optional )'></Message>
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

// STYLES
const display = keyframes`
  0%{
    opacity:0;
  }
  100%{
    opacity:1;
  }
`

const BgClip = styled.div`
  background: #ee666e;
  clip-path: polygon(100% 100%, 0 0, 100% 0);
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
`

const Wrapper = styled.div`
  grid-column: 2/13;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${display} 600ms ease-out;

  height: 100vh;
  width: 100%;

  @media (max-width: 900px) {
    grid-column: 1/13;
    padding-bottom: 60px;
  }
`

const Container = styled.div`
  background: #161616;
  border: 0;
  border-radius: .2rem;
  display: flex;
  flex-direction: column;
  position: relative;
  padding: 1rem;

  width: 40%;
  height: 80%;

  @media (max-width: 600px) {
    width: 90%;
  }

  @media (min-width: 600px) and (max-width: 900px) {
    width: 65%;
  }
`

const TopBar = styled.div`
  background: none;
  border-radius: .3rem .3rem 0 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  position: relative;
  padding: 1rem;

  .required {
    color: #ea9d41;
    font-weight: 800;

    @media (max-width: 600px) {
      top: 6%;
      font-size: .8rem;
    }
  }
`

const Exit = styled.button`
  appearance: none;
  background: none;
  border: 0;
  border-radius: 50%;
  text-align: center;
  position: absolute;
  top: 0;
  right: 2%;

  &:hover {
    & > span {
      opacity: 1;
    }
  }

  & > span {
    color: #ee666e;
    font-weight: 800;
    font-size: 2rem;
    opacity: 0.6;
  }
`

const Pront = styled.label`
  color: #aaa;
  font-size: 1.1rem;
  font-weight: 600;

  @media (max-width:900px) {
    font-size: 1rem;
  }

  @media (max-width: 600px) {
    font-size: 0.8rem;
  }
`

const FormBox = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 80px;

    height: 100%;

    @media (max-width: 600px) {
      gap: 40px;
    }

    .invalid {
      color: #ea9d41;
      font-weight: 800;
    }
`

const InputBox = styled.div`
    display: flex;
    flex-direction: row;
    gap: .6rem;
    position: relative;
    height: auto;
    width: 100%;

    & > input, #email {
      -webkit-appearance: none;
      -moz-appearance: none;
      appearance: none;
      border: 0;
      border-left: 4px solid ${props => props.theme.fg.terciary};
      opacity: .69;
      background: #232323;
      color: #ccc;
      font-size: 1rem;
      font-weight: 600;
      margin-top: -2px;
      position: relative;
      padding: .6rem .1rem;
      text-indent: 1rem;
      width: 100%;

      @media screen and (max-width: 900px){
        font-size: 0.86rem;
      }

    &:focus {
      opacity: 1;
      color: #fff;
    }

    &[type=text] {
      text-transform: capitalize;
    }
  }
`
const Message = styled.textarea`
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    border: 0;
    border-left: 4px solid ${props => props.theme.fg.terciary};
    background: #232323;
    color: #ddd;
    font-size: 1rem;
    font-weight: 600;
    margin-top: -2px;
    opacity: .69;
    padding: .3rem;
    resize: none;
    padding-left: 1rem;
    width: 100%;

    @media (max-width: 600px) {
      font-size: 0.86rem;
    }

    &:focus {
      opacity: 1;
    }
`

const Send = styled.button`
    background: #d6535a;
    border: 0;
    border-radius: .2rem;
    color: #fff;
    font-size: 1rem;
    font-weight: 800;
    padding: .9rem 0;
    opacity: .8;
    transition: width 360ms linear;
  
    width: 50%;

    &:hover {
      opacity: 1;
      width: 96%;
    }

    @media (max-width: 900px) {
      padding: .6rem 0;
      font-size: .9rem;
      width: 80%;
    }

    @media (max-width: 600px) {
      font-size: .8rem;
    }
`