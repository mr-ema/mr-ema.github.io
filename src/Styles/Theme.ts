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
      secundary: '#1d162733',
      gradient: 'linear-gradient(90deg, rgba(26,20,35,1) 0%, rgba(46,39,56,1) 100%)',
    },
    fg: {
      primary: '#eacdc2',
      secundary: '#d5bcb2',
      terciary: '#b75d69',
    }
  },
  light: {
      mode: 'light',

      bg: {
        primary: '#fefae0',
        secundary: '#f7f3db33',
        gradient: 'linear-gradient(90deg, rgba(254,250,224,1) 0%, rgba(208,237,236,1) 100%)',
      },
      fg: {
        primary: '#283618',
        secundary: '#364921',
        terciary: '#008480',
      }
  }
}