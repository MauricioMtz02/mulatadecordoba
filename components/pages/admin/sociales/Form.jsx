import { useState } from 'react'
import { useRouter } from 'next/router'
import { saveRedSocial } from '../../../../services/redSocial'
import useDashboard from '../../../../hooks/useDashboard'

const Form = ({register, handleInput}) => {
    const { href } = register
    const [sending, setSending] = useState(false)
    const router = useRouter()
    const {printAlert} = useDashboard()

    const handleSubmit = async e => {
        e.preventDefault()

        if(sending){
            return
        }
        
        setSending(true)

        const { msg, status } = await saveRedSocial(register)

        setSending(false)

        if(status !== 200){
            console.log(msg)
            printAlert(msg, 'danger')
            return
        }

        router.push('/admin/sociales')
        printAlert('Red Social Guardada Correctamente', 'success')
    }

    return (
        <form
            className="col-xl-10 col-xxl-8"
            onSubmit={handleSubmit}
        >
            <div className="row mb-5 gy-4 gx-xxl-5">
                <div className="col-sm-6">
                    <label htmlFor="href" className="form-label">Link</label>
                    <input
                        type="text" 
                        className="form-control border-0 shadow-sm" 
                        id="href"
                        placeholder="Ingresa el Nombre de Usuario"
                        value={href}
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