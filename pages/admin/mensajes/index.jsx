import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { getMensajes } from '../../../services/mensajes'
import Pagination from '../../../components/Pagination'
import LayoutDashboard from "../../../layouts/LayoutDashboard"
import Mensajes from '../../../components/pages/admin/mensajes/Mensajes'

export default function MensajesPage() {
    const [mensajes, setMensajes] = useState([])
    const [consulta, setConsulta] = useState(false)
    const [status, setStatus] = useState(1)
    const [meta, setMeta] = useState({})
    const router = useRouter()
    const pageActual = parseInt(router.query.page ?? 1)

    useEffect(() => {
        const consultarApi = async () => {
            const {data, meta} = await getMensajes({
                page: pageActual,
                limit: 6,
                where: [
                    {
                        column: 'status',
                        value: status
                    }
                ]
            })

            setMensajes(data)
            setMeta(meta)
            setConsulta(true)
        }

        consultarApi()
    }, [status, pageActual])

    const handleStatus = e => {
        setStatus(e.target.value)
        router.push('/admin/mensajes')

    }

    return (
        <>
            <div className="bg-light p-4 rounded-5">
                <div className="d-flex justify-content-end">
                    <form>
                        <select
                            className="form-select border-0 rounded-5 py-2 shadow-sm"
                            value={status}
                            onChange={e => handleStatus(e)}
                        >
                            <option value="1">Activos</option>
                            <option value="0">Inactivos</option>
                        </select>
                    </form>
                </div>

                {consulta && (
                    <div className="mt-4">
                        <div className="overflow-x-auto">
                            <Mensajes
                                mensajes={mensajes}
                            />
                        </div>

                        <div>
                            <Pagination
                                meta={meta}
                            />
                        </div>
                    </div>
                )}
            </div>
        </>
    )
}

MensajesPage.getLayout = function getLayout(page) {
    return (
        <LayoutDashboard
            page={'Mensajes'}
        >
            {page}
        </LayoutDashboard>
    )
}