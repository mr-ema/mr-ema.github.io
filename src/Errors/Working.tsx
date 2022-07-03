import React from 'react';
import styled from 'styled-components';
import { BiCodeBlock } from 'react-icons/bi';

type Props = {
  message: string,
}

export default function Working({ message }: Props): JSX.Element {
  return (
    <Wrapper>
      <Message>
        <h1><span>W</span>ork<span>ing</span></h1>
        <span>{message}</span>
      </Message>
      <Banner>
        <BiCodeBlock />
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
    grid-column: 1/13;
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