import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Copyright from '../components/Copyright';
import styles from '../styles/Home.module.css'

function MyApp({ Component, pageProps }: AppProps) {
  return <>
            <Component {...pageProps} />
            <Copyright sx={{ mt: 5 }} />
         </> 
}

export default MyApp
