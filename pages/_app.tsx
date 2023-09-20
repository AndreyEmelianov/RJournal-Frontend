import { CssBaseline, MuiThemeProvider } from '@material-ui/core';
import '../styles/globals.css';
import 'macro-css';
import { theme } from '../theme';

function MyApp({ Component, pageProps }) {
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <Component {...pageProps} />
    </MuiThemeProvider>
  );
}

export default MyApp;
