import Head from 'next/head';
import { Provider } from 'react-redux';
import { MuiThemeProvider, CssBaseline } from '@material-ui/core';
import { AppProps } from 'next/app';

import { Header } from '../components/Header';
import { theme } from '../theme';
import { store, wrapper } from '../redux/store';

import '../styles/globals.scss';
import 'macro-css';
import { parseCookies } from 'nookies';
import { setUserData } from '../redux/slices/user-slice';
import { UserApi } from '../utils/api';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>RJournal</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,400;0,500;0,700;0,900;1,400;1,500;1,700;1,900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <Header />
        <Component {...pageProps} />
      </MuiThemeProvider>
    </>
  );
}

MyApp.getInitialProps = wrapper.getInitialAppProps((store) => async ({ ctx, Component }) => {
  try {
    const { rjAuthToken } = parseCookies(ctx);

    const userData = await UserApi.getMe(rjAuthToken);

    store.dispatch(setUserData(userData));
  } catch (err) {
    console.log(err);
  }

  return {
    pageProps: Component.getInitialProps ? await Component.getInitialProps({ ...ctx, store }) : {},
  };
});

export default wrapper.withRedux(MyApp);
