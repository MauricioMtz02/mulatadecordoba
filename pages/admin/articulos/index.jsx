import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { getArticulos } from '../../../services/articulos'
import Link from 'next/link'
import Articulos from "../../../components/pages/admin/articulos/Articulos"
import Pagination from '../../../components/Pagination'
import LayoutDashboard from "../../../layouts/LayoutDashboard"

export default function ArticulosPage() {
    const [articulos, setArticulos] = useState([])
    const [consulta, setConsulta] = useState(false)
    const [status, setStatus] = useState(1)
    const [meta, setMeta] = useState({})
    const router = useRouter()
    const pageActual = parseInt(router.query.page ?? 1)

    useEffect(() => {
        const consultarApi = async () => {
            const {data, meta} = await getArticulos({
                page: pageActual,
                limit: 6,
                where: [
                    {
                        column: 'status',
                        value: status
                    }
                ]
            })

            setArticulos(data)
            setMeta(meta)
            setConsulta(true)
        }

        consultarApi()
    }, [status, pageActual])

    const handleStatus = e => {
        setStatus(e.target.value)
        router.push('/admin/articulos')

    }

    return (
        <>
            <div className="bg-light p-4 rounded-5">
                <div className="d-flex justify-content-between">
                    <Link
                        href={'/admin/articulos/create'}
                    >
                        <a className='btn btn-success'>Crear Articulo</a>
                    </Link>
                    <form className='me-3'>
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
                            <Articulos
                                articulos={articulos}
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

ArticulosPage.getLayout = function getLayout(page) {
    return (
        <LayoutDashboard
            page={'Articulos'}
        >
            {page}
        </LayoutDashboard>
    )
}