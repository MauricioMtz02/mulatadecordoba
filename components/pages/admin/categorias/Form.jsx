import { useState } from 'react'
import { useRouter } from 'next/router'
import { saveCategoria } from '../../../../services/categorias'
import useDashboard from '../../../../hooks/useDashboard'

const Form = ({register, handleInput}) => {
    const { name } = register
    const [sending, setSending] = useState(false)
    const router = useRouter()
    const {printAlert} = useDashboard()

    const handleSubmit = async e => {
        e.preventDefault()

        if(sending){
            return
        }
        
        setSending(true)

        const {data} = await saveCategoria(register)

        setSending(false)

        if(!data){
            return
        }

        router.push('/admin/categorias')
        printAlert('Categoría Guardada Correctamente', 'success')
    }

    return (
        <form
            className="col-xl-10 col-xxl-8"
            onSubmit={handleSubmit}
        >
            <div className="row mb-5 gy-4 gy-md-0 gx-xxl-5">
                <div className="col-sm-6">
                    <label htmlFor="title" className="form-label">Nombre</label>
                    <input
                        type="text" 
                        className="form-control border-0 shadow-sm" 
                        id="name"
                        placeholder="Ingresa el Nombre de la Categoría"
                        value={name}
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