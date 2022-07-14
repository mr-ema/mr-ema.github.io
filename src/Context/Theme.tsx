import React from 'react';
import { ThemeProvider as StyledProvider } from 'styled-components';
import { Theme } from '@/Styles/Theme';
import { useLocalStorage } from '@/Hooks/useLocalStorage';
/**
 * * React 18
 * * Theme context with styled components
 */

export type ThemeType = { [key: string]: string | {[key :string]: string} }

export type ThemeMethod = {
  toggle: () => void,
}

export interface ThemeCtx extends ThemeMethod {
  theme: ThemeType,
  dark: boolean,
}

interface Props {
  children: React.ReactNode
}

// Create theme context
// Use light theme as default theme
const ThemeCtx = React.createContext<ThemeCtx | null>( {} as ThemeCtx );

export function ThemeProvider({ children }: Props) {
  // Current Theme State Default To 'dark'
  const [dark, setDark] = useLocalStorage<boolean>('darkMode', true);
  // Theme State Default To 'dark'
  const [theme, setTheme] = React.useState<ThemeType>(() => dark ? Theme.dark : Theme.light );

  // * Functions To Manage Context State
  
  /**
   * Toggle Theme Using 'select' State
   * @return void
   */
  function toggle(): void {
    // Invert Theme ( Dark === true ) Then Set Light Theme
    setTheme(() => dark ? Theme.light : Theme.dark);
    // Toggle Dark
    setDark(!dark);
  }

  return (
    <ThemeCtx.Provider value={{ theme, toggle, dark }}>
      <StyledProvider theme={theme as ThemeType}>
        { children }
      </StyledProvider>
    </ThemeCtx.Provider>
  )
}

export function useThemeCtx() {
  return React.useContext( ThemeCtx );
}