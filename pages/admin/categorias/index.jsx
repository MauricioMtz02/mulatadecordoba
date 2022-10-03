import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { getCategorias } from '../../../services/categorias'
import Link from 'next/link'
import Categorias from '../../../components/pages/admin/categorias/Categorias'
import Pagination from '../../../components/Pagination'
import LayoutDashboard from "../../../layouts/LayoutDashboard"

export default function CategoriasPage() {
    const [categorias, setCategorias] = useState([])
    const [consulta, setConsulta] = useState(false)
    const [status, setStatus] = useState(1)
    const [meta, setMeta] = useState({})
    const router = useRouter()
    const pageActual = parseInt(router.query.page ?? 1)

    useEffect(() => {
        const consultarApi = async () => {
            const {data, meta} = await getCategorias({
                page: pageActual,
                limit: 6,
                where: [
                    {
                        column: 'status',
                        value: status
                    }
                ]
            })

            setCategorias(data)
            setMeta(meta)
            setConsulta(true)
        }

        consultarApi()
    }, [status, pageActual])

    const handleStatus = e => {
        setStatus(e.target.value)
        router.push('/admin/categorias')

    }

    return (
        <>
            <div className="bg-light p-4 rounded-5">
                <div className="d-flex justify-content-between">
                    <Link
                        href={'/admin/categorias/create'}
                    >
                        <a className='btn btn-success'>Crear Categoria</a>
                    </Link>
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
                            <Categorias
                                categorias={categorias}
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

CategoriasPage.getLayout = function getLayout(page) {
    return (
        <LayoutDashboard
            page={'Categorías'}
        >
            {page}
        </LayoutDashboard>
    )
}