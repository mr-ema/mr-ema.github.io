import React from 'react';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import { VscBracketError, VscDebugStepBack } from 'react-icons/vsc';
import { Wrapper } from '@/Styles/Main';
import { hingeAnimation } from '@/Styles/Animations';


export default function _404_(): JSX.Element {
  const navigate = useNavigate();

  return (
    <Wrapper>
      <Message>
        <h1><span>4</span>0<span>4</span></h1>
        <Banner>
          <VscBracketError />
        </Banner>
        <span>Page Not Found</span>

        <button onClick={() => navigate(-1)}><VscDebugStepBack/> Go Back</button>
      </Message>

    </Wrapper>
  )
}

// STYLES
const Message = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;

  h1 {
    color: ${props => props.theme.fg.primary};
    font-size: 10rem;
    @media (max-width: 700px){ font-size: 5rem; }

    span {color: ${props => props.theme.fg.terciary};}
  }

  button {
    background: none;
    border: 0;
    color: ${props => props.theme.fg.primary};
    font-family: 'Josefin Sans', sans-serif;
    font-size: 1.3rem;
    font-weight: 800;
    padding: .3rem .9rem;
    text-decoration: none;
    @media(max-width: 700px){ font-size: 0.9rem; }

    &:hover {opacity: 0.6;}
  }

  & > span {
    color: ${props => props.theme.fg.secundary};
    font-family: 'Josefin Sans', sans-serif;
    font-size: 1.2rem;
    font-weight: 700;
    margin-bottom: 2rem;
    text-align: end;
    width: 100%;
    @media (max-width: 700px){ font-size: .7rem; }
  }
`

const Banner = styled.div`
  animation: ${hingeAnimation};
  animation-duration: 1800ms;
  animation-delay: 600ms;
  animation-timing-function: ease-out;
  animation-fill-mode: forwards;
  color: ${props => props.theme.fg.terciary};
  font-size: 10rem;
  position: absolute;
  left: 100%;
  top: 100%;
  
  @media (max-width: 600px){ font-size: 5rem; }
`