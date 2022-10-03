import Categoria from "./Categoria"

const Categorias = ({categorias}) => {
    return (
        <table className="table">
            <thead>
                <tr className="border-light opacity-75">
                    <th scope="col" className="fs-7 fw-light">#</th>
                    <th scope="col" className="fs-7 fw-light">Name</th>
                    <th scope="col" className="fs-7 fw-light">Fecha de Creación</th>
                    <th scope="col" className="fs-7 fw-light">Ultima Actualización</th>
                    <th scope="col" className="fs-7 fw-light">Estado</th>
                    <th scope="col" className="fs-7 fw-light">Acciones</th>
                </tr>
            </thead>
            <tbody>
                {categorias.map(categoria => (
                    <Categoria
                        key={categoria.id}
                        categoria={categoria}
                    />
                ))}
            </tbody>
        </table>
    )
}

export default Categorias