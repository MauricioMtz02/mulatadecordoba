import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import useDashboard from '../../../../hooks/useDashboard'

const Social = ({social}) => {
    const { id, name, icon, href, last_update, status } = social
    const [estado, setEstado] = useState(parseInt(status))

    const { handleStatus } = useDashboard()

    return (
        <tr className="border-light p-5 rounded-5 hover-bg-white">
            <th scope="row">{id}</th>
            <td>{name}</td>
            <td>
                <Image
                    src={`${process.env.BACKEND_IMAGES}/${icon}`}
                    alt={'icon red social'}
                    width={22}
                    height={22}
                />
            </td>
            <td>
                <a
                    href={`${href}`}
                    target={'_blank'}
                    rel="noreferrer"
                >
                    Visitar
                </a>
            </td>
            <td>{last_update}</td>
            <td>
                <button
                    onClick={() => {
                        handleStatus(id, 'redes-sociales')
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
                        href={`/admin/sociales/update/${id}`}
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

export default Social