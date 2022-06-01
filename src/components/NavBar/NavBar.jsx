import React from 'react'
import { Wrapper, Logo, Links, Icon } from './style'
import logo from 'Public/logo.png'
import { MdOutlineVideogameAsset, MdHomeFilled, MdAccountBox, MdCode } from 'react-icons/md'

import { NavLink, Outlet } from 'react-router-dom'

const NavBar = () => {
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
      </Wrapper>
      <Outlet/>
    </>
  )
}

export default NavBar