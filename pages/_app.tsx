import React from 'react';
import { CacheProvider, EmotionCache } from '@emotion/react';
import { ThemeProvider, CssBaseline } from '@mui/material';

import createEmotionCache from '../src/utils/createEmotionCache';
import lightTheme from '../styles/theme/light.theme';
import '../styles/globals.css';

import dynamic from 'next/dynamic'
import Head from 'next/head'
import { AppProps } from 'next/app';
import { ToastContainer } from 'react-toastify'
import 'nprogress/nprogress.css'
import 'react-toastify/dist/ReactToastify.css'
import '@aws-amplify/ui/dist/style.css'

import { AmplifyAuthProvider } from '../src/contexts/auth'
import { configureAmplify } from '../src/lib/amplify/awsConfig'


const TopProgressBar = dynamic(
  () => {
    return import('../src/components/TopProgressBar')
  },
  { ssr: false }
)

const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

// NOTE: Move this to each pages component to  use getStaticProps
configureAmplify()

function MyApp({ Component, emotionCache = clientSideEmotionCache, pageProps }: MyAppProps) {
  return (
    <>
      <Head>
        <title>Next x Amplify Application</title>
        <meta
          name='viewport'
          content='minimum-scale=1, initial-scale=1, width=device-width'
        />
      </Head>
      <AmplifyAuthProvider>
        <CacheProvider value={emotionCache}>
          <ThemeProvider theme={lightTheme}>
            <CssBaseline />
            <TopProgressBar />
            <ToastContainer
              position='top-right'
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
            />
            <Component {...pageProps} />
            <ToastContainer />
            </ThemeProvider>
          </CacheProvider>
      </AmplifyAuthProvider>
    </>
  )
}

export default MyApp
