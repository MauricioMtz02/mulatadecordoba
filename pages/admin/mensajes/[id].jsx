import { useState, useEffect } from "react"
import { useRouter } from 'next/router'
import { getMensaje } from "../../../services/mensajes"
import Link from 'next/link'
import LayoutDashboard from "../../../layouts/LayoutDashboard"
import Redirect from "../../../components/utilities/Redirect"
import Mensaje from "../../../components/Mensaje"

export default function MensajePage() {
    const [register, setRegister] = useState({})
    const [consulta, setConsulta] = useState(false)
    const {query} = useRouter()
    const {id} = query

    useEffect(() => {
        const consultarApi = async () => {
            const {data} = await getMensaje(id)

            setRegister(data)
            setConsulta(true)
        }

        if(id){
            consultarApi()
        }
    }, [id])

    return (
        <div className="bg-light p-4 rounded-5">
            <div className='mb-5 d-flex justify-content-start'>
                <Link
                    href={`/admin/mensajes`}
                >
                    <a className='btn btn-dark'>Volver</a>
                </Link>
            </div>
            {consulta && (
                <>
                    {register.id ? (
                        <Mensaje
                            register={register}
                        />
                    ) : (
                        <Redirect url={`/admin/mensajes`} />
                    )}
                </>
            )}
        </div>
    )
}

MensajePage.getLayout = function getLayout(page) {
    return (
        <LayoutDashboard
            page={'Mensaje'}
        >
            {page}
        </LayoutDashboard>
    )
}