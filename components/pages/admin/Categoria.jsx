import { useState, useEffect } from 'react'
import { getArticulosCount } from '../../../services/articulos'

const Categoria = ({categoria}) => {
    const { id, name } = categoria
    const [count, setCount] = useState(0)

    useEffect(() => {
        const consultarApi = async () => {
            const {data} = await getArticulosCount({
                where: [
                    {
                        column: 'categoriaId',
                        value: id
                    }
                ]
            })
            setCount(data)
        }

        consultarApi()
    }, [id])

    return (
        <li 
            className="d-flex justify-content-between py-2 px-2 hover-bg-white rounded-4"
        >
            <span>{name}</span>
            <span>{count}</span>
        </li>
    )
}

export default Categoria