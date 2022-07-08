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
            <img src={project} alt='Nextjs-Store Live Demo'/>
          </a>
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
  flex-flow: row wrap;
  gap: 0;
  margin-bottom: 1.69rem;
  
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

  ol {
    align-self: flex-end;
    list-style: inside;
    display: flex;
    font-size: 1rem;
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
    right: 1rem;
  }
`