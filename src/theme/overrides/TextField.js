export default function TextField(theme) {
  return {
    MuiInputBase: {
      root: {
        caretColor: theme.palette.primary.dark,
      },
    },
    MuiOutlinedInput: {
      notchedOutline: {
        borderColor: theme.palette.primary.dark,
      },
      multiline: {
        paddingTop: theme.spacing(9),
        paddingBottom: theme.spacing(9),
      },
    },
  };
}
