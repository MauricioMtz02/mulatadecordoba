import { useState } from 'react'
import { createMensaje } from '../../../services/mensajes'
import Spinner from '../../utilities/Spinner'

const inputs = [
    {
        label: 'Nombre Completo',
        type: 'text',
        id: 'fullname',
        placheholder: 'Ingresa tu nombre'
    },
    {
        label: 'Correo',
        type: 'email',
        id: 'email',
        placheholder: 'Ingresa tu Correo'
    },
    {
        label: 'Asunto',
        type: 'text',
        id: 'subject',
        placheholder: 'Motivo del Mensaje'
    }
]

const Inputs = () => {
    const [msg, setMsg] = useState({
        fullname: '',
        email: '',
        subject: '',
        msg: ''
    })

    const [alert, setAlert] = useState({
        type: 'danger',
        mas: ''
    })

    const [sending, setSending] = useState('')

    const handleSubmit = e => {
        e.preventDefault()

        // Validar el state sending
        if(sending){
            return
        }

        // VALIDACIONES
        // Comprobar que los campos no esten vacions
        if(Object.values(msg).includes('')){
            // Imprimir Alerta
            setAlert({type: 'danger', msg: '¡Todos los Campos son Obligatorios!'})
            return
        }

        // Comprobar que el nombre tengo un minimo de 6 Caracteres
        if(msg.fullname.length < 6){
            // Imprimir Alerta
            setAlert({type: 'danger', msg: '¡El Nombre completo debe tener al menos 6 caracteres!'})
            return
        }

        setAlert('')

        // Enviar Msg
        sendMsg()
    }

    const handleInput = e => {
        const { id, value } = e.target
        
        // Sincronizar datos con el State
        setMsg({
            ...msg,
            [id]: value
        })
    }

    const sendMsg = async () => {
        setSending(true)

        const result = await createMensaje(msg)

        if(!result){
            setAlert({type: 'danger', msg: '¡Error Inesperado!'})
        } else{
            setAlert({
                type: 'success',
                msg: '¡Mensaje Enviado Correctamente!'
            })
            setMsg({
                fullname: '',
                email: '',
                subject: '',
                msg: ''
            })
        }

        setSending(false)
    }

    return (
        <form
            onSubmit={handleSubmit}
        >
            {inputs.map(input => (
                <div 
                    key={input.id}
                    className="mb-3"
                >
                    <label 
                        htmlFor={input.id} 
                        className="form-label"
                    >
                        {input.label}
                    </label>
                    <input 
                        onChange={handleInput}
                        type={input.type} 
                        className="form-control" 
                        id={input.id}
                        value={msg[input.id]}
                        placeholder={input.placheholder}
                    />
                </div>
            ))}

            <div className="mb-3">
                <label 
                    htmlFor="msg" 
                    className="form-label"
                >
                    Mensaje
                </label>
               <textarea 
                    id="msg" 
                    value={msg.msg}
                    onChange={handleInput}
                    rows="5"
                    className="form-control"
                ></textarea>
            </div>

            {alert.msg && (
                <div className={`alert alert-${alert.type} text-center`} role="alert">
                    {alert.msg}
                </div>
            )}

            {!sending ? (
                <button
                    type="submit"
                    className="btn btn-info px-4"
                >
                    Enviar
                </button>
            ) : (
                <Spinner/>
            )}
        </form>
    )
}

export default Inputs