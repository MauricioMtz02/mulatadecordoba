import { useState, useEffect } from 'react'
import { getCategorias } from '../../../services/categorias'
import Categoria from "./Categoria"

const Categorias = () => {
    const [categorias, setCategorias] = useState([])

    useEffect(() => {
        const consultarApi = async () => {
            const {data} = await getCategorias({
                limit: '5',
                where: [
                    {
                        column: 'status',
                        value: 1
                    }
                ]
            })

            setCategorias(data)
        }

        consultarApi()
    }, [])

    return (
        <ul>
            {categorias.map(categoria => (
                <Categoria
                    key={categoria.name}
                    categoria={categoria}
                />
            ))}
        </ul>
    )
}

export default Categorias