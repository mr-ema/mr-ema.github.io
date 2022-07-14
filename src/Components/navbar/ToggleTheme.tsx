
import React from 'react';
import styled from 'styled-components';
import { FiSun, FiMoon } from 'react-icons/fi';
import { ThemeCtx, useThemeCtx } from '@/Context/Theme';

export default function ToggleTheme(): JSX.Element {
  const { toggle, dark } = useThemeCtx() as ThemeCtx;

  return (
    <>
    <ToggleBtn onClick={ toggle }>
      {dark ?
        <FiMoon/>
        :
        <FiSun />
      }
    </ToggleBtn>
    </>
  )
}

// STYLES
const ToggleBtn = styled.button`
  background: none;
  color: ${props => props.theme.fg.primary};
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;

  height: 100px;

  @media screen and (max-width: 900px){ font-size: 1.6rem; }
`