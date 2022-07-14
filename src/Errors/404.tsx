import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { VscBracketError } from 'react-icons/vsc';
import { Wrapper } from '@/Styles/Main';
import { hingeAnimation, rollInAnimation } from '@/Styles/Animations';


export default function _404_(): JSX.Element {
  return (
    <Wrapper>
      <Message>
        <h1><span>U</span>pps<span> !</span></h1>
        <span>This Page Doesn't Exist</span>

        <Link to='/'>Go Back</Link>
      </Message>

      <Banner>
        <VscBracketError />
      </Banner>
    </Wrapper>
  )
}

// STYLES
const Message = styled.div`
  animation: ${rollInAnimation};
  animation-duration: 800ms;
  animation-fill-mode: forwards;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;

  & > h1 {
    color: ${props => props.theme.fg.primary};
    font-size: 7vw;
    @media (max-width: 600px){ font-size: 2.3rem; }
  }

  & > a {
    border: 0;
    border-left: .2rem solid ${props => props.theme.fg.terciary};
    border-right: .2rem solid ${props => props.theme.fg.terciary};
    color: ${props => props.theme.fg.primary};
    font-weight: 800;
    padding: .3rem .9rem;
    text-decoration: none;
    @media(max-width: 900px){ font-size: 0.7rem; }
  }

  & > a:hover {
    opacity: 0.6;
  }

  & > h1 > span {
    color: ${props => props.theme.fg.terciary};
  }

  & > span {
    color: ${props => props.theme.fg.secundary};
    font-size: 1.6rem;
    font-weight: 700;
    @media (max-width: 900px){ font-size: 1rem; }
  }
`

const Banner = styled.span`
  animation: ${hingeAnimation};
  animation-duration: 2600ms;
  animation-delay: 1000ms;
  animation-fill-mode: forwards;
  color: ${props => props.theme.fg.terciary};
  font-size: 16vw;
`