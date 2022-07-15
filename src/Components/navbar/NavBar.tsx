import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import styled from 'styled-components';
import { BsHouse, BsPerson, BsJournalCode } from 'react-icons/bs';
import { Image } from '@/Styles/Main';
import logo from '@Public/logo.png';
import ToggleTheme from './ToggleTheme';

export default function NavBar(): JSX.Element  {
  return  (
    <>
      <Menu>
        <Image src={logo} alt='Logo' className='logo'/>
        <ul>
          <SLink to="/" title='home'><BsHouse/></SLink>
          <SLink to="/showCase" title='showcase'><BsJournalCode/></SLink>
          <SLink to="/about" title='about'><BsPerson/></SLink> 
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
    gap: 1.6rem;

    width: 80%;

    @media screen and (max-width: 900px){  margin-left: -50px; }
    @media screen and (max-width: 600px){  margin-left: -40px; }
  }

  @media screen and (max-width: 900px){ padding: 0 2rem; }
`

const SLink = styled(NavLink)`
  color: ${props => props.theme.fg.primary};
  font-size: 1.9rem;
  font-weight: 600;
  position: relative;
  opacity: .69;
  text-decoration: none;

  &::after {
    content: "";
    background-color:  ${props => props.theme.fg.terciary};
    bottom: -.36rem;
    left: 50%;
    position: absolute;
    width: 0;
    height: 2px;
  }

  &::before {
    content: "";
    background-color:  ${props => props.theme.fg.terciary};
    bottom: -.36rem;
    right: 50%;
    position: absolute;
    width: 0;
    height: 2px;
  }

  &:hover, &.active {
    opacity: 1;

    &::before, &::after{
      transition: width 600ms;
      width: 60%;
    }
  }

  @media screen and (max-width: 900px){ font-size: 1.6rem; }
`