import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { getUsers } from '../../../services/users'
import Link from 'next/link'
import Pagination from '../../../components/Pagination'
import LayoutDashboard from "../../../layouts/LayoutDashboard"
import Users from '../../../components/pages/admin/users/Users'

export default function UsersPage() {
    const [users, setUsers] = useState([])
    const [consulta, setConsulta] = useState(false)
    const [status, setStatus] = useState(1)
    const [meta, setMeta] = useState({})
    const router = useRouter()
    const pageActual = parseInt(router.query.page ?? 1)

    useEffect(() => {
        const consultarApi = async () => {
            const {data, meta} = await getUsers({
                page: pageActual,
                limit: 6,
                where: [
                    {
                        column: 'status',
                        value: status
                    }
                ]
            })

            setUsers(data)
            setMeta(meta)
            setConsulta(true)
        }

        consultarApi()
    }, [status, pageActual])

    const handleStatus = e => {
        setStatus(e.target.value)
        router.push('/admin/users')

    }

    return (
        <>
            <div className="bg-light p-4 rounded-5">
                <div className="d-flex justify-content-between">
                    <Link
                        href={'/admin/users/create'}
                    >
                        <a className='btn btn-success'>Crear Usuario</a>
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
                            <Users
                                users={users}
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

UsersPage.getLayout = function getLayout(page) {
    return (
        <LayoutDashboard
            page={'Usuarios'}
        >
            {page}
        </LayoutDashboard>
    )
}