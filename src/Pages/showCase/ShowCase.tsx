import React from 'react';
import styled from 'styled-components';
import { SiNextdotjs, SiMongodb, SiGithub } from 'react-icons/si';
import { Wrapper } from '@/Styles/Main';
import project from '@Public/assets/images/showCase/next_store.png';
import { bounceInAnimation } from '@/Styles/Animations';

export default function ShowCase(): JSX.Element {
  return (
    <Wrapper>
      <Box>
        <Project>
          <a href='https://nextjs-store-mr-ema.vercel.app/' target='_blank'>
            <img src={project} alt='Nextjs-Store Live Demo'/>
          </a>
        </Project>
        <Info>
          <span className='tecnos'>
            <SiNextdotjs/> <SiMongodb/>
          </span>
         
          <a href='https://github.com/mr-ema/nextjs-store/' target='_blank'><SiGithub/></a>
        </Info>
      </Box>
    </Wrapper>
  )
}

const Box = styled.section`
  animation-name: ${bounceInAnimation};
  animation-duration: 1600ms;
  animation-iteration-count: 1;
  animation-play-state: running;
  animation-fill-mode: forwards;

  background: none;
  box-shadow: 6px 6px 16px 3px ${props => props.theme.mode === 'light' ? '#00000010': '#00000020' };
  display: flex;
  justify-content: space-around;
  flex-flow: row wrap;
  gap: 0;
  margin-bottom: 1.69rem;
  
  width: auto;
  height: auto;
`

const Project = styled.div`
  background-color: ${props => props.theme.bg.secundary};
  border-radius: .3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: .69rem;
  padding: 1rem;

  @media screen and ( max-width: 1400px ){
    width: 90%;
  }
  @media (max-width: 900px) {
      width: 100%;
  }

  a {
    background-color: ${props => props.theme.bg.secundary};
    border-radius: .69rem;
    color: ${props => props.theme.fg.terciary};
    font-weight: 600;
    width: 650px;
    opacity: 1;
    text-decoration: none;

    &:hover {
      opacity: .6;
    }

    @media screen and (max-width: 900px) {
      width: 100%;
    }
  }

  img  {
    border-radius: .69rem;
    width: 100%;
    height: auto;
  }
`

const Info = styled.div`
  background-color: ${props => props.theme.bg.secundary};
  border-radius: .3rem;
  display: flex;
  font-weight: 500;
  font-size: 1rem;
  flex-direction: column;
  justify-content: center;
  gap: .3rem;
  padding: 2rem;
  position: relative;

  @media screen and ( max-width: 1400px ) {
    width: 90%;
  }
  @media (max-width: 900px) {
    width: 100%;
  }
  @media (max-width: 650px) {
    font-size: .8rem;
  }

  a {
    text-decoration: none;
    color: ${props => props.theme.fg.terciary};
    font-weight: 600;
    font-size: 2.6rem;
    position: absolute;
    bottom: .5rem;
    right: 1rem;
    opacity: 1;

    &:hover {
      opacity: .6;
    }
  }

  .tecnos {
    color: ${props => props.theme.fg.secundary};
    font-size: 2rem;
    position: absolute;
    top: 1rem;
    left: 1rem;
  }
`