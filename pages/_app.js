import '../styles/customTheme.scss'
import '../styles/utilities.css'
import 'bootstrap-icons/font/bootstrap-icons.scss'

function MyApp({ Component, pageProps }) {
    const getLayout = Component.getLayout || ((page) => page)
    return getLayout(<Component {...pageProps} />)
}

export default MyApp