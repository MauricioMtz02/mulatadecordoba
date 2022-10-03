import { useState } from 'react'
import { auth } from '../../../services/users'
import { useRouter } from 'next/router'
import useAuth from '../../../hooks/useAuth'
import Spinner from '../../utilities/Spinner'

const Form = () => {
    const { handleUser } = useAuth()
    const [credentials, setCredentials] = useState({
        identifier: '',
        password: ''
    })
    const [consulta, setConsulta] = useState(false)
    const [alert, setAlert] = useState('')
    const router = useRouter()

    const handleInput = e => {
        setCredentials({
            ...credentials,
            [e.target.id]: e.target.value
        })
    }

    const handleSubmit = async e => {
        e.preventDefault()

        if(consulta){
            return
        }

        // Validar que las credenciales no esten vacias
        if(Object.values(credentials).includes('')){
            setAlert('Todos los Campos son Obligatorios')
            return
        }

        setConsulta(true)

        const {data, status, msg} = await auth(credentials)

        setConsulta(false)

        if(status != 200){
            setAlert(msg)
            return
        }

        handleUser(data)
        router.push('/admin')
    }

    return (
        <form
            onSubmit={handleSubmit}
            className="w-100"
        >
            <div className="mb-4">
                <label
                    htmlFor="identifier"
                    className="form-label"
                >
                    Usuario o Correo
                </label>
                <input
                    autoComplete="username"
                    type="text"
                    className="form-control border-0 shadow-sm"
                    placeholder="Ingresa tu Nombre de Usuario o Correo"
                    id='identifier'
                    value={credentials.identifier}
                    onChange={handleInput}
                />
            </div>

            <div className="mb-4">
                <label
                    htmlFor="password"
                    className="form-label"
                >
                    Contraseña
                </label>
                <input
                    autoComplete="current-password"
                    type="password"
                    className="form-control border-0 shadow-sm"
                    placeholder="Ingresa tu Contraseña"
                    id='password'
                    value={credentials.password}
                    onChange={handleInput}
                />
            </div>

            {alert && (
                <div className={`alert alert-danger text-center mb-3`} role="alert">
                    {alert}
                </div>
            )}

            {consulta ? <Spinner/> : (
                <button
                className="btn btn-info d-block"
                type="submit"
                >
                    Iniciar Sesión
                </button>
            )}
        </form>
    )
}

export default Form