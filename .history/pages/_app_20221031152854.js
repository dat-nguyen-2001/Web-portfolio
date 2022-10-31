import '../styles/globals.css'
import ScrollToTop from '../utils/ScrollToTop';
import {Router} from 'react-router'
function MyApp({ Component, pageProps }) {
  return <Router>
    
  </Router>
  <ScrollToTop>
    <Component {...pageProps} />
  </ScrollToTop>
}

export default MyApp
