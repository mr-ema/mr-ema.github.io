import React from 'react';
import styled from 'styled-components';
import { SiNextdotjs, SiMongodb, SiGithub } from 'react-icons/si';
import { Wrapper } from '@/Styles/main';
import project from '@Public/assets/next_store.png';

export default function Projects(): JSX.Element {
  return (
    <Wrapper>
      <Box>
        <Project>
          <a href='https://nextjs-store-mr-ema.vercel.app/' target='_blank'>
            <img src={project} alt='Nextjs-Store Project'/>
          </a>
          <a href='https://nextjs-store-mr-ema.vercel.app/' target='_blank'>Click Me</a>
        </Project>
        <Info>
          <span className='tecnos'>
            <SiNextdotjs/> <SiMongodb/>
          </span>
          <div>
            <h2>NextJs Store</h2>
            <span>First e-commerce and NextJs project.</span>
          </div>
          <div>
          <h3>Made With:</h3>
          <ol>
            <li>NextJs</li>
            <li>Mongoose</li>
            <li>Webpay</li>
            <li>Yup for form validation</li>
          </ol>
          </div>
          <a href='https://github.com/mr-ema/nextjs-store/' target='_blank'><SiGithub/></a>
        </Info>
      </Box>

    </Wrapper>
  )
}

const Box = styled.section`
  background: none;
  display: flex;
  justify-content: center;
  flex-flow: row wrap-reverse;
  gap: 0;
  
  width: 100%;
  height: auto;
`

const Project = styled.div`
  background-color: ${props => props.theme.bg.secundary};
  border-radius: .3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  padding: 2rem;

  @media screen and ( max-width: 1400px ){
    width: 90%;
  }

  a {
    text-decoration: none;
    color: ${props => props.theme.fg.terciary};
    font-weight: 600;
    opacity: 1;

    &:hover {
      opacity: .6;
    }
  }

  img  {
    border-radius: .69rem;
    max-width: 700px;
    height: auto;
  }
`

const Info = styled.div`
  background-color: ${props => props.theme.bg.secundary};
  border-radius: .3rem;
  display: flex;
  font-weight: 500;
  flex-direction: column;
  justify-content: center;
  gap: .3rem;
  padding: 2rem;
  position: relative;

  @media screen and ( max-width: 1400px ){
    width: 90%;
  }

  ol {
    align-self: flex-end;
    list-style: inside;
    display: flex;
    flex-direction: column;
    gap: .6rem;

    @media (max-width: 650px) {
      font-size: .8rem;
    }
  }

  div { 
    color: ${props => props.theme.fg.primary};
    & > h2 {
      @media screen and (max-width: 900px) {
        font-size: 1.2rem;
      }
    }
  }

  a {
    align-self: flex-end;
    text-decoration: none;
    color: ${props => props.theme.fg.terciary};
    font-weight: 600;
    font-size: 1.6rem;
    opacity: 1;

    &:hover {
      opacity: .6;
    }
  }

  .tecnos {
    color: ${props => props.theme.fg.secundary};
    font-size: 1.6rem;
    position: absolute;
    top: 1rem;
    right: 1rem;
  }
`