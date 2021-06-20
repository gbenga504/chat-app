const PRIMARY = {
  main: '#3998D3',
  dark: '#2C76A5',
};
const SECONDARY = {
  main: '#3998D3',
  dark: '#3998D3',
};
const WARNING = {
  main: '#FDF6C3',
};

const GREY = {
  0: '#ffffff',
  100: '#bdbdbd',
  200: '#53594F',
};

const COMMON = {
  common: { black: '#000', white: '#fff' },
  primary: { ...PRIMARY },
  secondary: { ...SECONDARY },
  warning: { ...WARNING },
  grey: GREY,
};

const palette = {
  light: {
    ...COMMON,
    text: { primary: GREY[200], secondary: GREY[100] },
  },
};

export default palette;
