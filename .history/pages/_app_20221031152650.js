import '../styles/globals.css'
import ScrollToTop from '../utils/ScrollToTop'
function MyApp({ Component, pageProps }) {
  return <ScrollToTop>
    <Component {...pageProps} />
  </ScrollToTop>
}

export default MyApp
