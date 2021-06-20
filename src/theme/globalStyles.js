import { withStyles } from '@material-ui/core/styles';

const GlobalStyles = withStyles((theme) => ({
  '@global': {
    '*': {
      margin: 0,
      padding: 0,
      boxSizing: 'border-box',
    },
    html: {
      width: '100%',
      height: '100%',
      '-ms-text-size-adjust': '100%',
      '-webkit-overflow-scrolling': 'touch',
    },
    body: {
      width: '100%',
      height: '100%',
    },
    '#root': {
      width: '100%',
      height: '100%',
    },
    textarea: {
      '&::-webkit-input-placeholder': { color: theme.palette.text.secondary },
      '&::-moz-placeholder': { opacity: 1, color: theme.palette.text.secondary },
      '&:-ms-input-placeholder': { color: theme.palette.text.secondary },
      '&::placeholder': { color: theme.palette.text.secondary },
    },
    img: { display: 'block', maxWidth: '100%' },
    a: { color: theme.palette.primary.main },
  },
}))(() => null);

export default GlobalStyles;
