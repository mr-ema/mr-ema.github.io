import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import styled from 'styled-components';
import { Image } from '@/Styles/Main';
import logo from '@Public/logo.png';
import ToggleTheme from './ToggleTheme';

export default function NavBar(): JSX.Element  {
  return  (
    <>
      <Menu>
        <Image src={logo} alt='Logo' className='logo'/>
        <ul>
          <SLink to="/">Home</SLink>
          <SLink to="/showCase">Show Case</SLink>
          <SLink to="/about">About</SLink> 
        </ul>
        <ToggleTheme />
      </Menu>

      <Outlet />
    </>
  )
}

// STYLES
const Menu = styled.nav`
  grid-column: 1/13;
  background-color: ${props => props.theme.bg.primary};
  background: ${props => props.theme.bg.gradient};
  display: flex;
  justify-content: center;
  align-items: center;

  height: 100px;

  & > ul {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-left: -60px;
    gap: 1rem;

    width: 80%;

    @media screen and (max-width: 900px){  margin-left: -50px; }
    @media screen and (max-width: 600px){  margin-left: -40px; }
  }

  @media screen and (max-width: 900px){ padding: 0 2rem; }
`

const SLink = styled(NavLink)`
  color: ${props => props.theme.fg.primary};
  font-weight: 600;
  opacity: .69;
  text-decoration: none;

  &:hover, &.active {
    opacity: 1;
  }

  @media screen and (max-width: 900px){ font-size: .8rem; }
`