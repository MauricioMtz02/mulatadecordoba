import { useState } from 'react'
import { useRouter } from 'next/router'
import { saveUser } from '../../../../services/users'
import useDashboard from '../../../../hooks/useDashboard'

const Form = ({register, handleInput}) => {
    const { username, email, phone_number } = register
    const [sending, setSending] = useState(false)
    const router = useRouter()
    const {printAlert} = useDashboard()

    const handleSubmit = async e => {
        e.preventDefault()

        if(sending){
            return
        }
        
        setSending(true)

        const { msg, status } = await saveUser(register)

        setSending(false)

        if(status !== 200){
            console.log(msg)
            printAlert(msg, 'danger')
            return
        }

        router.push('/admin/users')
        printAlert('Usuario Guardado Correctamente', 'success')
    }

    return (
        <form
            className="col-xl-10 col-xxl-8"
            onSubmit={handleSubmit}
        >
            <div className="row mb-5 gy-4 gx-xxl-5">
                <div className="col-sm-6">
                    <label htmlFor="username" className="form-label">Nombre de Usuario</label>
                    <input
                        type="text" 
                        className="form-control border-0 shadow-sm" 
                        id="username"
                        placeholder="Ingresa el Nombre de Usuario"
                        value={username}
                        onChange={handleInput}
                    />
                </div>

                <div className="col-sm-6">
                    <label htmlFor="email" className="form-label">Correo</label>
                    <input
                        type="email" 
                        className="form-control border-0 shadow-sm" 
                        id="email"
                        placeholder="Ingresa el Correo del Usuario"
                        value={email}
                        onChange={handleInput}
                    />
                </div>

                <div className="col-sm-6">
                    <label htmlFor="phone_number" className="form-label">Teléfono</label>
                    <input
                        type="tel" 
                        className="form-control border-0 shadow-sm" 
                        id="phone_number"
                        placeholder="Ingresa el Teléfono del Usuario"
                        value={phone_number}
                        onChange={handleInput}
                    />
                </div>
            </div>

            <div className="mt-5">
                {sending ? (
                    <div className="spinner-border text-info" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                ) : (
                    <button
                        type="submit"
                        className="btn btn-success"
                    >
                        Guardar
                    </button>
                )}
            </div>
            
            
        </form>
    )
}

export default Form