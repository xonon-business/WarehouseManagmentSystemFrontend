import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { CookiesProvider  } from 'react-cookie'
import Copyright from '../components/Copyright';
import styles from '../styles/Home.module.css'

function MyApp({ Component, pageProps }: AppProps) {
  return <CookiesProvider>
            <Component {...pageProps} />
            <Copyright styles={styles} />
         </CookiesProvider> 
}

export default MyApp
