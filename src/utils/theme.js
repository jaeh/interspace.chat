export const white = '#FFFFFF'
export const black = '#000000'
export const gray = '#e6e7ec'
export const green = '#78FFBE'
export const purple = '#CFA6FF'
export const yellow = '#FCE96A'
export const blue = '#031695'

const themeLight = {
  background: gray,
  body: black,
  highlight: blue,
}

const themeDark = {
  background: gray,
  body: black,
  highlight: blue,
}

export const theme = mode => (mode === 'light' ? themeLight : themeDark)

export default theme
