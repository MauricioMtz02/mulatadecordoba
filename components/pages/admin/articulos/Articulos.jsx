import Articulo from "./Articulo"

const Articulos = ({articulos}) => {
    return (
        <table className="table">
            <thead>
                <tr className="border-light opacity-75">
                    <th scope="col" className="fs-7 fw-light">#</th>
                    <th scope="col" className="fs-7 fw-light">Título</th>
                    <th colSpan={2} scope="col" className="fs-7 fw-light">Imagen</th>
                    <th scope="col" className="fs-7 fw-light">Descripción</th>
                    <th scope="col" className="fs-7 fw-light">Ultima Actualización</th>
                    <th scope="col" className="fs-7 fw-light">Estado</th>
                    <th scope="col" className="fs-7 fw-light">Acciones</th>
                </tr>
            </thead>
            <tbody>
                {articulos.map(articulo => (
                    <Articulo
                        key={articulo.id}
                        articulo={articulo}
                    />
                ))}
            </tbody>
        </table>
    )
}

export default Articulos