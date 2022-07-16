import React from 'react';
import styled from 'styled-components';
import { MdPersonOutline, MdMail } from 'react-icons/md';
import { Wrapper } from '@/Styles/Main';
import { Spinner, Thanks } from '@/Components';
import { speedLightOutRight, rubberAnimation, resetAnimation } from '@/Styles/Animations';
import useValidation from './useValidation';

export default function ContactMe(): JSX.Element {
  // Logic
  const {loading, sended, searchParams ,handleSubmit, handleChange, error, data} = useValidation();

  if (sended || searchParams.get('send') === '1') { return <Thanks /> }
  if (loading) { return <Spinner /> }

  return (
    <Wrapper>
      <Form onSubmit={handleSubmit} autoComplete='off'>
        
        <h1>Send Me A Mail</h1>
        <InputBox>
          <label htmlFor='name'><MdPersonOutline /></label>
          <input onChange={handleChange} value={data.name} type='text' name='name' id='name' placeholder='Your Name'/>
          {error?.name && <span>{error.name}</span>}
        </InputBox>

        <InputBox>
          <label htmlFor='email'><MdMail /></label>
          <input onChange={handleChange} value={data.email} type='email' name='email' id='email' placeholder='Your E-Mail'/>
          {error?.email && <span>{error.email}</span>}
        </InputBox>

        <InputBox>
          <label htmlFor='message'/>
          <Message onChange={handleChange} value={data.message} name='message' rows={6} id='message' placeholder='Tell Me In A Few Words How I Can Help You' />
          {error?.message && <span>{error.message}</span>}
        </InputBox>

      
        <input type='hidden' name='_captcha' value='false'/>
        <input type='hidden' name='_subject' value='Portofolio Contact'/>
        <input type='hidden' name='_template' value='table'/>
        
        <Send type='submit' onClick={(e) => resetAnimation(e)}>{'Send'}</Send> 
      </Form>
    </Wrapper>
  )
}

const Form = styled.form`
  animation-name: ${speedLightOutRight};
  animation-duration: 800ms;
  animation-fill-mode: forwards;
  animation-play-state: paused;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;

  width: 80%;

  h1 {
    grid-column: 1/3;
    font-family: 'Josefin Sans', sans-serif;
    font-size: 3.6rem;
    margin-bottom: 3rem;
    text-align: center;
    @media screen and (max-width: 900px){ font-size: 2.6rem; } 
    @media screen and (max-width: 600px){ font-size: 1.6rem; }  
  }
`

const InputBox = styled.div`
  grid-column: auto;
  display: flex;
  position: relative;

  @media screen and (max-width: 800px){grid-column: 1/3;}

  label {
    position: absolute;
    color: ${props => props.theme.fg.terciary};
    font-size: 1.5rem;
    font-weight: 600;
    top: 20%;
    right: 10%;
  }

  input {
    background: none;
    border-left: 4px solid ${props => props.theme.fg.secundary};
    color: ${props => props.theme.fg.primary};
    font-size: 1rem;
    font-weight: 600;
    padding: 0 1rem;
    opacity: .69;
    height: 40px;
    width: 100%;

    &:focus {
      border-left: 4px solid ${props => props.theme.fg.terciary};
      opacity: 1;
    }

    @media screen and (max-width: 900px){font-size: .8rem;}
  }

  span {
    color: ${props => props.theme.alert.warning};
    font-size: 1rem;
    font-weight: 600;
    position: absolute;
    bottom: -1rem;
    left: 6px;

    @media screen and (max-width: 900px){font-size: .8rem;}
  }
`

const Message = styled.textarea`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  border: 0;
  border-left: 4px solid ${props => props.theme.fg.secundary};
  background: none;
  color: ${props => props.theme.fg.primary};
  font-size: 1rem;
  font-weight: 600;
  margin-top: -2px;
  opacity: .69;
  padding: .3rem;
  resize: none;
  padding-left: 1rem;
  width: 100%;
  height: auto;

  &:focus {
    border-left: 4px solid ${props => props.theme.fg.terciary};
    opacity: 1;
  }

  span {
    color: ${props => props.theme.alert.warning};
    font-size: 1rem;
    font-weight: 600;
    position: absolute;
    bottom: -1rem;
    left: 6px;

    @media screen and (max-width: 900px){font-size: .8rem;}
  }

  @media screen and (max-width: 900px){font-size: .8rem;}
`

const Send = styled.button`
  animation-duration: 800ms;
  animation-name: ${rubberAnimation};
  animation-fill-mode: forwards;
  animation-iteration-count: 1; 
  animation-play-state: paused;

  justify-self: center;
  grid-column: 1/3;
  background: ${props => props.theme.fg.terciary};
  border: 0;
  border-radius: .2rem;
  color: #fff;
  font-size: 1rem;
  font-weight: 800;
  padding: .6rem 0;
  opacity: .8;
  transition: width 360ms linear;

  width: 40%;

  @media screen and (max-width: 900px){width: 80%;}
  
  &:hover {
    opacity: 1;

    @media screen and (max-width: 600px){animation-play-state: running;}
  }
`