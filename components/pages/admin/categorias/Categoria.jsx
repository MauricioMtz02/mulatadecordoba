import { useState } from 'react'
import Link from 'next/link'
import useDashboard from '../../../../hooks/useDashboard'

const Categoria = ({categoria}) => {
    const { id, name, created_at, last_update, status } = categoria
    const [estado, setEstado] = useState(parseInt(status))

    const { handleStatus } = useDashboard()

    return (
        <tr className="border-light p-5 rounded-5 hover-bg-white">
            <th scope="row">{id}</th>
            <td>{name}</td>
            <td>{created_at}</td>
            <td>{last_update}</td>
            <td>
                <button
                    onClick={() => {
                        handleStatus(id, 'categorias')
                        setEstado(!estado)
                    }}
                    className={`btn btn-${estado ? 'success' : 'danger'} text-light`}
                >
                    {estado ? 'Activo' : 'Inactivo'}
                </button>
            </td>
            <td>
                <div className="d-flex flex-column">
                    <Link
                        href={`/admin/categorias/update/${id}`}
                    >
                        <a className='btn btn-info d-block'>
                            Editar
                        </a>
                    </Link>
                </div>
            </td>
        </tr>
    )
}

export default Categoria