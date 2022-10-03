import { useState, useEffect } from 'react'
import { getCount } from '../../../services/helpers'

const Card = ({card}) => {
    const {icon, title, catalogo} = card
    const [count, setCount] = useState(0)

    useEffect(() => {
        const consultarApi = async () => {
            const {data} = await getCount(catalogo, {
                where: [
                    {
                        column: 'status',
                        value: 1
                    }
                ]
            })

            setCount(data)
        }

        consultarApi()
    }, [catalogo])

    return (
        <div className="bg-light py-4 px-3 d-flex align-items-center rounded-5">
            <div 
                className="shadow-sm bg-white rounded-circle p-2 d-flex justify-content-center align-items-center me-3"
                style={{
                    width: '50px',
                    height: '50px'
                }}
            >
                <i className={`bi bi-${icon} text-primary`}></i>
            </div>

            <div className="d-flex flex-column">
                <p className="mb-0 fs-5 fw-bold">{count}</p>
                <p className="mb-0 small">{title}</p>
            </div>
        </div>
    )
}

export default Card