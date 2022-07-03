import React from 'react';
import styled from 'styled-components';
import { FaGithub } from 'react-icons/fa';

export default function ContactLinks(): JSX.Element {
  return (
    <Wrapper>
      <List>
        <li>
          <a href='https://github.com/mr-ema' target='_blank' className='link'><FaGithub /></a>
        </li>
      </List>
    </Wrapper>
  )
}

// STYLES
const Wrapper = styled.div`
  display: flex;
  position: absolute;
  top: 0;
  right: 2%;
  width: fit-content;
  height: fit-content;
  z-index: 2;
`

const List = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  position: relative;

  .link {
    display: block;
    color: ${props => props.theme.fg.terciary};
    cursor: pointer;
    font-size: 2.6rem;
    padding: .6rem;
    opacity: .8;
    text-decoration: none;

    &:hover {
      opacity: 1;
    }
  }
`