const white = "#FFFFFF";
const black = "#000000";
const gray = "#e6e7ec";
const green = "#78FFBE";
const purple = "#CFA6FF";
const yellow = "#FCE96A";

const themeLight = {
  background: gray,
  body: black,
  highlight: yellow,
};

const themeDark = {
  background: gray,
  body: black,
  highlight: yellow,
};

const theme = (mode) => (mode === "light" ? themeLight : themeDark);

export default theme;
