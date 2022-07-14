import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { SiGmail, SiGithub } from 'react-icons/si';

export default function ContactLinks(): JSX.Element {
  return (
    <Wrapper>
      <List>
        <li>
          <a href='https://github.com/mr-ema' target='_blank' className='link'><SiGithub /></a>
        </li>

        <li>
          <Link to='/contactMe' className='link'><SiGmail /></Link>
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
  z-index: 2;
`

const List = styled.ul`
  border-radius: .6rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 0 .9rem;
  position: relative;

  .link {
    display: block;
    color: ${props => props.theme.fg.terciary};
    cursor: pointer;
    font-size: 2.6rem;
    padding: .3rem;
    opacity: .8;
    text-decoration: none;

    @media screen and (max-width: 900px){font-size: 2rem;}
    @media screen and (max-width: 600px){font-size: 1.69rem;}
    &:hover {
      opacity: 1;
    }
  }
`