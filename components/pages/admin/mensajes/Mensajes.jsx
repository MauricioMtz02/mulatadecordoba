import Mensaje from "./Mensaje"

const Mensajes = ({mensajes}) => {
    return (
        <table className="table">
            <thead>
                <tr className="border-light opacity-75">
                    <th scope="col" className="fs-7 fw-light">#</th>
                    <th scope="col" className="fs-7 fw-light">Nombre</th>
                    <th scope="col" className="fs-7 fw-light">Correo</th>
                    <th scope="col" className="fs-7 fw-light">Asunto</th>
                    <th scope="col" className="fs-7 fw-light">Mensaje</th>
                    <th scope="col" className="fs-7 fw-light">Estado</th>
                    <th scope="col" className="fs-7 fw-light">Acciones</th>
                </tr>
            </thead>
            <tbody>
                {mensajes.map(mensaje => (
                    <Mensaje
                        key={mensaje.id}
                        mensaje={mensaje}
                    />
                ))}
            </tbody>
        </table>
    )
}

export default Mensajes