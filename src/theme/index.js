import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { CssBaseline, StylesProvider } from '@material-ui/core';

import shape from './shape';
import palette from './palette';
import typography from './typography';
import breakpoints from './breakpoints';
import GlobalStyles from './globalStyles';
import componentsOverride from './overrides';

export default function ThemeConfig({ children }) {
  const themeOptions = {
    palette: { ...palette.light, mode: 'light' },
    shape,
    typography,
    breakpoints,
    spacing: 2,
  };

  const theme = createMuiTheme(themeOptions);
  theme.overrides = componentsOverride(theme);

  return (
    <StylesProvider injectFirst>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <GlobalStyles />
        {children}
      </ThemeProvider>
    </StylesProvider>
  );
}
