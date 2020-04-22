const white = "#FFFFFF";
const black = "#000000";
const gray = "#e6e7ec";
const green = "#78FFBE";
const purple = "#CFA6FF";

const themeLight = {
  background: gray,
  body: black,
  highlight: purple,
};

const themeDark = {
  background: black,
  body: white,
  highlight: green,
};

const theme = (mode) => (mode === "light" ? themeLight : themeDark);

export default theme;
