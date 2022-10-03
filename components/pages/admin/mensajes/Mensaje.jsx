import { useState } from 'react'
import Link from 'next/link'
import { cutContent } from '../../../../helpers'
import useDashboard from '../../../../hooks/useDashboard'

const Mensaje = ({mensaje}) => {
    const { id, fullname, email, subject, msg, status } = mensaje
    const [estado, setEstado] = useState(parseInt(status))

    const { handleStatus } = useDashboard()

    return (
        <tr className="border-light p-5 rounded-5 hover-bg-white">
            <th scope="row">{id}</th>
            <td>{fullname}</td>
            <td>{email}</td>
            <td>{subject}</td>
            <td>{cutContent(msg)}</td>
            <td>
                <button
                    onClick={() => {
                        handleStatus(id, 'mensajes')
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
                        href={`/admin/mensajes/${id}`}
                    >
                        <a className='btn btn-primary text-light d-block'>
                            Leer
                        </a>
                    </Link>
                    <a
                        href={`mailto:${email}?Subject=${subject}`}
                        className='btn btn-info d-block mt-2'
                    >
                        Responder
                    </a>
                </div>
            </td>
        </tr>
    )
}

export default Mensaje