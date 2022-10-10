import React from 'react';
import styled from 'styled-components';
import { SiReact, SiTypescript, SiNextdotjs, SiWebpack } from 'react-icons/si';
import { Container, Wrapper, Text } from '@/Styles/Main';  
import { resetAnimation, rubberAnimation } from '@/Styles/Animations';
import { ContactLinks } from '@/Components';
import SVG from '@Public/assets/svg/animation.svg';

export default function Home(): JSX.Element {
  return (
    <Wrapper>
      <ContactLinks />
      <Container jc='space-around' style={{background: 'none'}}>
        <Animation onClick={(e) => resetAnimation(e)}>
          <Text>
            <h1>Emanuel Vargas</h1>
            <h2>Web Developer</h2>
            <Tech>
              <SiReact /> <SiTypescript /> <SiNextdotjs /> <SiWebpack />
            </Tech>
          </Text>
        </Animation>
        
          <SvgContainer>
            <object data={SVG}></object>
          </SvgContainer>

      </Container>
      
    </Wrapper>
  )
}

const Animation = styled.div`
  display: flex;
  
  animation-name: ${rubberAnimation};
  animation-duration: 1200ms;
  animation-delay: 800ms;
  animation-fill-mode: none, forwards;
`

const Tech = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  font-size: 2.6rem;

  @media screen and (max-width: 900px){ font-size: 1.3rem; }
`

const SvgContainer = styled.div`  
  width: 400px;
  height: auto;

  @media screen and (max-width: 900px){ width: 320px;}
  @media screen and (max-width: 600px){ width: 220px;}
  @media screen and (max-width: 500px){ width: 150px;}
`
