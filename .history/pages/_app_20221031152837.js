import '../styles/globals.css'
import ScrollToTop from '../utils/ScrollToTop';
import {Router} from 'react'
function MyApp({ Component, pageProps }) {
  return <ScrollToTop>
    <Component {...pageProps} />
  </ScrollToTop>
}

export default MyApp
