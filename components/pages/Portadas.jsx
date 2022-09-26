import Portada from "../Portada"

const Portadas = ({title, articulos}) => {
    return (
        <section className="py-5">
            <h3 className="text-center pb-2 text-uppercase fw-semibold text-dark">{title}</h3>

            <div className="row gy-4 justify-content-center mt-0 mt-lg-2">
                {articulos.map(articulo => (
                    <div 
                        key={articulo.id}
                        className="col-12 col-sm-6 col-lg-3"
                    >
                        <div className="h-25rem">
                            <Portada
                                articulo={articulo}
                            />
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Portadas