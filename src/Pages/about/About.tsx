import React from 'react';
import { RiArrowDownSLine, RiArrowUpSLine } from 'react-icons/ri';
import styled, { keyframes } from 'styled-components';
import { ContactLinks } from '@Components';
import { scroll, fade } from '@/Helpers/Appear';
import { Wrapper } from '@/Styles/main';
import desktop from '@Public/assets/desktop.png';
import draw from '@Public/assets/draw.png';

export default function About(): JSX.Element {

  React.useEffect(() => {
    addEventListener('scroll', fade, {passive: true});

    return () => removeEventListener('scroll', fade);
  },[])

  return (
    <Wrapper>
      <ContactLinks />

      <InfoBox >
        <Info className='appear'>
          <Container>
              <Title>About me</Title>
              <Text>
                • My name is <b>Emanuel</b>, I'm a <b>web developer</b>.
                I enjoy <b>code</b> and learn new things.
              </Text>
          </Container>

          <Banner >
            <img src={draw} alt='draw'/>
          </Banner>
      
          <ScrollBtn alignLeft onClick={ () => scroll('down')}>
            <RiArrowDownSLine/>
          </ScrollBtn>
        </Info>
      </InfoBox>

      <InfoBox >
        <Info reverse className='hide'>
            <Banner>
              <img src={desktop} alt='desktop'/>
            </Banner>
            <Container >
              <Title>Experience</Title>
              <Text>
                • A few local projects mainly in <b>React</b>.
                <br></br>
                • A <a href='https://github.com/mr-ema/netflix_clone' target='_blank'>Netflix Clone</a> using <b>[ MongoDb, React, Express ]</b>.
                <br></br>
                • A <a href='https://nextjs-store-tawny.vercel.app/' target='_blank'>Coffe Store</a> with <b>NextJS</b>.

                <Note>You Can See The Rest Here
                  <a href='https://github.com/mr-ema?tab=repositories' target='_blank'>GitHub.</a>
                </Note>
              </Text>
            </Container>

            <ScrollBtn onClick={ () => scroll('up')}>
              <RiArrowUpSLine/>
            </ScrollBtn>
        </Info>
      </InfoBox>
    </Wrapper>
  )
}

const appear = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`

const InfoBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 80%;

  @media (max-width: 900px) {
    width: 100%;
  }

  .appear {
    animation: ${appear} 600ms ease-in;
  }

  .hide {
    opacity: 0;
  }
`

const Info = styled.div<{reverse?: boolean}>`
  background-color: ${props => props.theme.bg.secundary};
  border-radius: .3rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 6rem;
  padding: 2rem;
  position: relative;
  height: auto;
  width: 100%;

  @media (max-width: 900px) {
    gap: 3.6rem;
    flex-direction: ${props => props.reverse ? 'column-reverse':'column'};
    align-items: flex-start;
    justify-content: flex-start;
  }
`

const Banner = styled.div`
  border: 0;
  width: 300px;
  height: auto;

  @media (max-width: 900px) {
    align-self: flex-end;
    justify-self: flex-end;
    padding-bottom: 2.6rem; 
    width: 200px;
  }

  @media (max-width: 600px) {
    width: 150px;
  }
`

const Container = styled.section`
  display: flex;
  flex-direction: column;
  width: 50%;
  height: auto;

  @media (max-width: 900px) {
    width: 100%;
  }
`

const Title = styled.h1`
  color: ${props => props.theme.fg.terciary};
  font-size: 2.6rem;
  font-weight: 800;
  margin: 1rem 0;
  text-transform: uppercase;

  @media (max-width: 900px) {
    font-size: 1.9rem;
  }

  
  @media (max-width: 600px) {
    font-size: 1.36rem;
  }
`

const Text = styled.p`
  color: ${props => props.theme.fg.primary};
  font-weight: 500;
  line-height: 130%;
  text-align: left;

  @media (max-width: 600px) {
    font-size: 0.8rem;
  }

  a {
    color: #b8614f;
    font-weight: 800;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`

const ScrollBtn = styled.button<{alignLeft?: boolean}>`
  background: none;
  border: 0;
  color: ${props => props.theme.fg.terciary};
  cursor: pointer;
  font-size: 2.3rem;
  position: absolute;
  width: fit-content;
  aspect-ratio: 1/1;
  bottom: 2%;
  ${props => props.alignLeft ? 'left: 2%': 'right: 2%'};

  &:hover {
    opacity: 0.6;
  }

  @media (max-width: 900px) {
    left: 2%;
  }
`

const Note = styled.span`
  display: block;
  background: #77b2ff2b;
  border-left: 3px solid ${props => props.theme.mode === 'light' ? '#005070' : '#77e6ff'};
  border-radius: 0 .3rem .3rem 0;
  color: ${props => props.theme.mode === 'light' ? '#005070' : '#77e6ff'};
  font-weight: 600;
  margin: 1rem 0;
  padding: .6rem;
  opacity: .8;
  width: fit-content;

  @media (max-width: 600px) {
    font-size: 0.8rem;
  }

  & > a {
    color: ${props => props.theme.mode === 'light' ? '#003449' : '#a3eeff'};
    font-weight: 800;
    margin-left: .3rem;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`
