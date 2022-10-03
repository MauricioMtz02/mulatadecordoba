import { createContext, useState, useEffect } from 'react'
import { getLocalStorage, setLocalStorage } from '../helpers'
import { getAuth } from '../services/users'
import { useRouter } from 'next/router'

const AuthContext = createContext()

const AuthProvider = ({children}) => {
    const [auth, setAuth] = useState(false)
    const [user, setUser] = useState({})
    const [jwt, setJwt] = useState('')
    const router = useRouter()

    useEffect(() => {
        const validarJwt = async () => {
            const token = getLocalStorage('jwt')
            
            if(!token){
                return
            }
    
            const {data, status} = await getAuth(token)
    
            if(status != 200){
                console.log('token no valido')
                return
            }
    
            data.jwt = token
    
            handleUser(data)
        }

        validarJwt()
    }, [])

    const handleUser = user => {
        setUser(user)
        setJwt(user.jwt)
        setLocalStorage(user.jwt, 'jwt')
        setAuth(true)
    }

    const logout = () => {
        setUser({})
        setJwt('')
        localStorage.removeItem('jwt')
        router.push('/')
        setAuth(false)
    }

    return(
        <AuthContext.Provider
            value={{
                auth,
                user,
                handleUser,
                jwt,
                logout
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}

export {
    AuthProvider
}

export default AuthContext