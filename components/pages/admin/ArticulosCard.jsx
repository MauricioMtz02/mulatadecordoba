import { useState, useEffect } from 'react'
import { getArticulos } from '../../../services/articulos'
import Articulos from './articulos/Articulos'

const ArticulosCard = () => {
    const [articulos, setArticulos] = useState([])

    useEffect(() => {
        const consultarApi = async () => {
            const {data} = await getArticulos({
                limit: 6,
                where: [
                    {
                        column: 'status',
                        value: 1
                    }
                ]
            })

            setArticulos(data)
        }

        consultarApi()
    }, [])

    return (
        <div className="rounded-5 bg-light p-4">
            <div className="overflow-x-auto">
                <h3 className="fs-5 fw-semibold">Articulos Recientes</h3>

                {articulos && (
                    <div className="mt-2">
                        <Articulos
                            articulos={articulos}
                        />
                    </div>
                )}
            </div>
        </div>
    )
}

export default ArticulosCard