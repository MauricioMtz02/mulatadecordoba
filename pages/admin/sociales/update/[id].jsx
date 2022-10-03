import { useState, useEffect } from "react"
import { useRouter } from 'next/router'
import { getRedSocial } from "../../../../services/redSocial"
import Link from 'next/link'
import LayoutDashboard from "../../../../layouts/LayoutDashboard"
import Form from "../../../../components/pages/admin/sociales/Form"
import Redirect from "../../../../components/utilities/Redirect"

export default function UpdatePage() {
    const [register, setRegister] = useState({})
    const [consulta, setConsulta] = useState(false)
    const {query} = useRouter()
    const {id} = query

    useEffect(() => {
        const consultarApi = async () => {
            const {data} = await getRedSocial(id)

            setRegister(data)
            setConsulta(true)
        }

        if(id){
            consultarApi()
        }
    }, [id])

    const handleInput = e => {
        setRegister({
            ...register,
            [e.target.id]: e.target.value
        })
    }

    return (
        <div className="bg-light p-4 rounded-5">
            <div className='mb-5 d-flex justify-content-start'>
                <Link
                    href={`/admin/sociales`}
                >
                    <a className='btn btn-danger'>Cancelar</a>
                </Link>
            </div>
            {consulta && (
                <>
                    {register.id ? (
                        <Form
                            register={register}
                            handleInput={handleInput}
                        />
                    ) : (
                        <Redirect url={`/admin/sociales`} />
                    )}
                </>
            )}
        </div>
    )
}

UpdatePage.getLayout = function getLayout(page) {
    return (
        <LayoutDashboard
            page={'Editar Usuario'}
        >
            {page}
        </LayoutDashboard>
    )
}