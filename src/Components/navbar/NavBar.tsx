import React from 'react';
import styled from 'styled-components';
import { NavLink, Outlet } from 'react-router-dom'
import {  MdHomeFilled, MdAccountBox, MdCode } from 'react-icons/md';
import ToggleTheme from './ToggleTheme';
import logo from '@Public/logo.png';

export default function NavBar(): JSX.Element {
  return (
    <>
      <Wrapper>
        <Logo>
          <img src={logo} alt='logo'/>
        </Logo>

        <Links>
          <li>
            <NavLink to={'/me'} className='link'>
              <Icon><MdAccountBox/></Icon>
            </NavLink>
          </li>
          <li>
            <NavLink to={'/'} className='link'>
              <Icon><MdHomeFilled/></Icon>
            </NavLink>
          </li>
          <li>
            <NavLink to={'/projects'} className='link'>
              <Icon><MdCode/></Icon>
            </NavLink>
          </li>
      {/*     <li>
            <NavLink to={'/games'} className='link'>
              <Icon><MdOutlineVideogameAsset/></Icon>
            </NavLink>
          </li> */}
        </Links>
        <ToggleTheme />
      </Wrapper>
      <Outlet/>
    </>
  )
}

// STYLES
const Wrapper = styled.nav`
  background-color: ${props => props.theme.bg.secundary};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: .6rem;
  position: fixed;
  
  max-width: 100px;
  height: 100vh;
  z-index: 99;

  @media (max-width: 900px) {
    grid-column: 1/13;
    bottom: 0;
    flex-direction: row;
    height: 60px;
    min-width: 100vw;
  }
`

const Logo = styled.div`
  border: 0;
  display: flex;
  align-items: center;
  justify-content: center;

  max-height: 45px;
  max-width: 45px;
`

const Links = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 2rem;
  padding: 0;
  width: auto;
  height: 100%;


  @media (max-width: 900px) {
    flex-direction: row;
    width: 100%;
    height: auto;
  }

  .link {
    display: block;
    color: ${props => props.theme.fg.primary};
    opacity: .69;
  }

  .link:hover {
    opacity: .39;
  }

  .active {
    color: ${props => props.theme.fg.terciary};
  }
`

const Icon = styled.span`
  display: flex;
  font-size: 2rem;
`