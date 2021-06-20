const { pxToRem } = require('util/formatFontSize');

const FONT_FAMILY = "'Inter', sans-serif";

const typography = {
  fontFamily: FONT_FAMILY,
  fontWeightRegular: 500,
  fontWeightMedium: 600,
  fontWeightBold: 700,
  body2: {
    lineHeight: 22 / 14,
    fontSize: pxToRem(14),
  },
  caption: {
    lineHeight: 1.5,
    fontSize: pxToRem(12),
  },
  button: {
    fontWeight: 700,
    lineHeight: 24 / 14,
    fontSize: pxToRem(14),
    textTransform: 'capitalize',
  },
};

export default typography;
