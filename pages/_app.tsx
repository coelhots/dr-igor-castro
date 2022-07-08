import type { AppProps } from 'next/app';
import { CssBaseline } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles'

const theme = createTheme({
  typography: {
    allVariants: {
      fontFamily: "'Quicksand', sans-serif",
    },
  },
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
    <CssBaseline/>
    <ThemeProvider theme={theme}>
      <Component {...pageProps} /> 
    </ThemeProvider>
    </>
  )
}

export default MyApp
