export default function Button(theme) {
  return {
    MuiButton: {
      root: {
        color: 'red',
        '&:hover': {
          boxShadow: 'none',
        },
      },
      sizeLarge: {
        height: 53,
      },
      containedSecondary: {
        color: theme.palette.common.white,
      },
      containedPrimary: {
        color: theme.palette.common.white,
      },
    },
  };
}
