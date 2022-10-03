import '../styles/customTheme.scss'
import '../styles/utilities.css'
import 'bootstrap-icons/font/bootstrap-icons.scss'
import { AuthProvider } from '../context/AuthProvider'

function MyApp({ Component, pageProps }) {
    const getLayout = Component.getLayout || ((page) => page)
    return (
        <AuthProvider>
            {getLayout(<Component {...pageProps} />)}
        </AuthProvider>
    )
}

export default MyApp