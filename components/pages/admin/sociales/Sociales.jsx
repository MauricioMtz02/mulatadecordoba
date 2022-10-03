import Social from "./Social"

const Sociales = ({sociales}) => {
    return (
        <table className="table">
            <thead>
                <tr className="border-light opacity-75">
                    <th scope="col" className="fs-7 fw-light">#</th>
                    <th scope="col" className="fs-7 fw-light">Nombre</th>
                    <th scope="col" className="fs-7 fw-light">Icono</th>
                    <th scope="col" className="fs-7 fw-light">Enlace</th>
                    <th scope="col" className="fs-7 fw-light">Última Actualización</th>
                    <th scope="col" className="fs-7 fw-light">Estado</th>
                    <th scope="col" className="fs-7 fw-light">Acciones</th>
                </tr>
            </thead>
            <tbody>
                {sociales.map(social => (
                    <Social
                        key={social.id}
                        social={social}
                    />
                ))}
            </tbody>
        </table>
    )
}

export default Sociales