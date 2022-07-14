import React from 'react';
import styled from 'styled-components';
import { Wrapper } from '@/Styles/Main';
import gitHub from '@Public/assets/svg/animation.svg';
import { tadaAnimation } from '@/Styles/Animations';

export default function Thanks(): JSX.Element{

  return (
    <Wrapper>
      <MessageBox>
        <h1><span>T</span>han<span>ks !</span></h1>
        <span>I will contact you as soon as possible.</span>
      </MessageBox>
      
      <ImageBox>
        <object data={gitHub} />
      </ImageBox>
    </Wrapper>
    
  )
}

// STYLES
const MessageBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: .6rem;
  width: 80%;
  height: auto;
  & > h1 {
    animation-name: ${tadaAnimation};
    animation-duration: 800ms;
    animation-delay: 800ms;

    font-family: 'Josefin Sans', sans-serif;
    color: ${props => props.theme.fg.primary};
    font-size: 6vw;
    font-weight: 700;
    text-transform: uppercase;
    @media (max-width:900px) {font-size: 10vw;}
    
    & > span {
      color:  ${props => props.theme.fg.terciary};
    }
  }
  & > span {
    font-family: 'Josefin Sans', sans-serif;
    display: block;
    color:  ${props => props.theme.fg.secundary};
    font-size: 2vw;
    font-weight: 600;
    
    @media (max-width:900px) {font-size: 4vw;}
  }
`

const ImageBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 25vw;
  height: auto;
  @media (max-width:900px) {
    width: 40vw;
  }
  & > img {
    margin-top: 3rem;
    width: 100%;
    height: auto;
  }
`