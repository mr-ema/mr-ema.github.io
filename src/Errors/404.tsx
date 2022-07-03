import React from 'react';
import styled from 'styled-components';
import { VscBracketError } from 'react-icons/vsc';
import { Link } from 'react-router-dom';

export default function NoPage(): JSX.Element {
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
const Wrapper = styled.div`
  grid-column: 1/13;
  background-color: #191919;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10%;
  padding: 2rem;
  box-sizing: border-box;

  @media (max-width: 900px) {
    gap: 5%;
  }
`

const Message = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;

  & > h1 {
    color: #ddd;
    font-size: 7vw;

    @media (max-width: 600px) {
      font-size: 2.3rem;
    }
  }

  & > a {
    border: 0;
    border-left: .2rem solid #ff006e;
    border-right: .2rem solid #ff006e;
    color: #ddd;
    font-weight: 800;
    padding: .3rem .9rem;
    text-decoration: none;

    @media(max-width: 900px) {
      font-size: 0.7rem;
    }
  }

  & > a:hover {
    opacity: 0.6;
  }

  & > h1 > span {
    color: #ee666e;
  }

  & > span {
    color: #aaa;
    font-size: 1.2rem;
    font-weight: 600;

    @media (max-width: 900px) {
      font-size: 0.9rem;
    }
  }
`

const Banner = styled.span`
  color: #ee666e;
  font-size: 16vw;
`