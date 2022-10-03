import { useState } from 'react'
import Link from 'next/link'
import useDashboard from '../../../../hooks/useDashboard'

const User = ({user}) => {
    const { id, username, email, phone_number, status } = user
    const [estado, setEstado] = useState(parseInt(status))

    const { handleStatus } = useDashboard()

    return (
        <tr className="border-light p-5 rounded-5 hover-bg-white">
            <th scope="row">{id}</th>
            <td>{username}</td>
            <td>{email}</td>
            <td>{phone_number}</td>
            <td>
                <button
                    onClick={() => {
                        handleStatus(id, 'users')
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
                        href={`/admin/users/update/${id}`}
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

export default User