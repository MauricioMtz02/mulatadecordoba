import Form from "../../components/pages/auth/Form"
import Redirect from "../../components/utilities/Redirect"
import useAuth from "../../hooks/useAuth"
import AuthLayout from "../../layouts/AuthLayout"

export default function AuthPage() {
    const { auth } = useAuth()
    
    return auth ? <Redirect url={`/admin`} /> : (
        <>
            <div className='w-100 bg-light p-4 p-xl-5 rounded-3 shadow-sm'>
                <h2 className='w-100 mb-3'>Iniciar Sesión</h2>
                <Form/>
            </div>
        </>
    )
}

AuthPage.getLayout = function getLayout(page) {
    return (
        <AuthLayout
            page={'Iniciar Sesión'}
        >
            {page}
        </AuthLayout>
    )
}