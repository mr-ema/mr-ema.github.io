import React from 'react';
import styled,  { keyframes } from 'styled-components';
import { Wrapper } from '@/Styles/main';
import { ContactLinks } from '@Components';
import Form from './Form/Form';
import avatar from '@Public/assets/github.png';

export default function Home(): React.FunctionComponentElement<JSX.Element> {
  const [contactMe, setContactMe] = React.useState<boolean>(false)

  function handleClose(): void {
    setContactMe(!contactMe);
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

// STYLES
const typing = keyframes`
  from {
    width: 0;
  }
`

const blink = keyframes`
  50% {
    border-color: transparent;
  }
`

const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0;
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 100%;
`

const Slogan = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
  z-index: 1;

  @media (max-width:650px) {
    gap: .3rem;
  }
`

const Name = styled.h1`
  animation: ${typing} 2s steps(34) 3s, ${blink} .5s step-end infinite alternate;
  box-sizing: content-box;
  border-right: 4px solid ${props => props.theme.fg.terciary};
  color: ${props => props.theme.fg.terciary};
  font-size: 3rem;
  font-weight: 800;
  white-space: nowrap;
  width: 100%;
  overflow: hidden;

  @media (max-width: 650px) {
    font-size: 1.6rem;
  }
`

const Info = styled.span`
  color: ${props => props.theme.fg.primary};
  font-size: 1.2rem;
  font-weight: 800;

  @media (max-width: 650px) {
    font-size: 0.7rem;
  }
`

const Technologies = styled.code`
  color: ${props => props.theme.fg.secundary};
  font-weight: 800;

  @media (max-width: 650px) {
    font-size: 0.6rem;
  }
`

const Avatar = styled.div`
  border: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  opacity: .3;
  width: 50%;
  height: 50%;
`

const ContactMe = styled.button`
  align-self: center;
  border: 0;
  border-radius: .6rem .6rem 0 0;
  box-sizing: border-box;
  background: none;
  border-bottom: .2rem solid ${props => props.theme.fg.terciary };
  color: ${props => props.theme.fg.primary};
  text-decoration: none;
  text-align: center;

  font-size: 0.9rem;
  font-weight: 600;
  padding: .6rem;
  position: relative;
  overflow: hidden;
  width: 50%;
  transition: width 300ms linear;

  @media (max-width: 650px) {
    align-self: flex-start;
    font-size: 0.6rem;
    width: 80%;
  }
 
  &:hover {
    opacity: .69;
    width: 100%;
  }

  & > a {
    text-decoration: none;
  }
`