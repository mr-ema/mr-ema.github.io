type ThemeType = {
  readonly [key: string]: {
    readonly [key: string]: string | {[key :string]: string}
  }
}

export const Theme: ThemeType = {
  dark: {
    mode: 'dark',

    bg: {
      primary: '#1a1423',
      secundary: '#1d1627',
    },
    fg: {
      primary: '#eacdc2',
      secundary: '#774c60',
      terciary: '#b75d69',
    }
  },
  light: {
      mode: 'light',

      bg: {
        primary: '#fefae0',
        secundary: '#f7f3db',
      },
      fg: {
        primary: '#283618',
        secundary: '#bc6c25',
        terciary: '#008480',
      }
  }
}