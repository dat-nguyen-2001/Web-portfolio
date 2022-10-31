import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return <ScrollToTop>

    <Component {...pageProps} />
  </ScrollToTop>
}

export default MyApp
