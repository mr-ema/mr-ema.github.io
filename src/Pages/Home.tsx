import React from 'react';
import styled from 'styled-components';
import { SiReact, SiTypescript, SiNextdotjs, SiWebpack } from 'react-icons/si';
import { Container, Wrapper, Text } from '@/Styles/Main';  
import { bounceInLeftAnimation, resetAnimation, rubberAnimation } from '@/Styles/Animations';
import SVG from '@Public/assets/svg/animation.svg';
import { ContactLinks } from '@/Components';

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
          <object data={SVG} />
        </SvgContainer>
      </Container>
      
    </Wrapper>
  )
}

const Animation = styled.div`
  display: flex;
  
  animation-name: ${bounceInLeftAnimation}, ${rubberAnimation};
  animation-duration: 1600ms, 1200ms;
  animation-delay: 0ms, 1600ms;
  animation-direction: normal, backwards;
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
  &:hover {
    animation-name: ${rubberAnimation};
    animation-duration: 1600ms;
    animation-iteration-count: 2;
    animation-fill-mode:forwards;
  }

  width: 400px;
  height: auto;

  @media screen and (max-width: 900px){ width: 300px};
  @media screen and (max-width: 600px){ width: 200px};
  @media screen and (max-width: 500px){ width: 150px};
`
