import Header from '../components/Header/Header.js'
import Footer from '../components/Footer/Footer.js'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
    <Header/>
    <Component {...pageProps} />
    <Footer/>
  </>
  )
}

export default MyApp
