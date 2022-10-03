import { useState } from 'react'
import { cutContent } from '../../../../helpers'
import useDashboard from '../../../../hooks/useDashboard'
import Image from 'next/image'
import Link from 'next/link'

const Articulo = ({articulo}) => {
    const { id, title, description, img, last_update, status } = articulo
    const { handleStatus } = useDashboard()
    const [estado, setEstado] = useState(parseInt(status))

    return (
        <tr className="border-light p-5 rounded-5 hover-bg-white">
            <th scope="row">{id}</th>
            <td>{title}</td>
            <td 
                className='p-4'
                colSpan={2}
            >
                <Image
                    src={`${process.env.BACKEND_IMAGES}/${img}`}
                    alt={'img'}
                    width={200}
                    height={120}
                    className={'rounded-3 d-block'}
                />
            </td>
            <td>{cutContent(description)}</td>
            <td>{last_update}</td>
            <td>
                <button
                    onClick={() => {
                        handleStatus(id, 'articulos')
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
                        href={`/admin/articulos/${id}`}
                    >
                        <a className='btn btn-primary text-light d-block mb-2'>
                            Leer
                        </a>
                    </Link>
                    <Link
                        href={`/admin/articulos/update/${id}`}
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

export default Articulo