import colors from 'vuetify/lib/util/colors'

let darkMode = false
if (typeof Storage !== 'undefined') { // eslint-disable-line
  darkMode = localStorage.getItem('awroraDarkMode') || false
}

const palette = {
vampire: {
  primary: colors.red.base, // primary main
  primarylight: colors.red.lighten5, // primary light
  primarydark: colors.red.darken1, // primary dark
  secondary: colors.blueGrey.base, // secondary main
  secondarylight: colors.blueGrey.lighten5, // secondary light
  secondarydark: colors.blueGrey.darken2, // secondary dark
  anchor: colors.red.base, // link
  accent: colors.pink.base, // accent main
  accentlight: colors.pink.lighten4, // accent light
  accentdark: colors.pink.darken3, // accent dark
},
}

export const theme = {
  ...palette.vampire
}


export default {
  rtl: false,
  theme: {
    dark: darkMode === 'true',
    themes: {
      light: {
        ...theme
      },
      dark: {
        ...theme
      }
    },
    options: {
      customProperties: true
    }
  }
}
