import {useState, useEffect} from 'react'
import ArticuloCard from "../../ArticuloCard"
import Portada from "../../Portada"
import Button from "../../utilities/Button"

const Banner = ({data}) => {
    const [articulo, setArticulo] = useState({})
    const [articulos, setArticulos] = useState([])

    useEffect(() => {
        if(data.length){
            setArticulo(data[0])
            setArticulos(data.filter((row, i) => i != 0))
        }
    }, [data])

    return (
        <section className="row g-4 g-xl-5">
            <div className="col-12 col-lg-7 col-xl-8">
                <div
                    className="w-100 h-15rem h-lg-40rem"
                >
                    {articulo.id && (
                        <Portada
                            articulo={articulo}
                        />
                    )}
                </div>
            </div>

            {articulos && (
                <div className="col-lg-5 col-xl-4">
                    <h3 className="pb-2 text-uppercase fw-semibold text-dark">Articulos <span className="fw-normal text-secondary">Recientes</span></h3>

                    <div className="row gy-4 justify-content-center">
                        {articulos.map(articulo => (
                            <div key={articulo.id} className="col-12 col-md-6 col-lg-12">
                                <ArticuloCard
                                    articulo={articulo}
                                />
                            </div>
                        ))}
                        
                    </div>

                    <div className="d-flex justify-content-center pt-4">
                        <Button
                            config={{
                                name: 'Ver Más',
                                href: '/blog',
                                type: 'info'
                            }}
                        />
                    </div>
                </div>
            )}
            
        </section>
    )
}

export default Banner