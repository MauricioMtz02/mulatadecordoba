import User from "./User"

const Users = ({users}) => {
    return (
        <table className="table">
            <thead>
                <tr className="border-light opacity-75">
                    <th scope="col" className="fs-7 fw-light">#</th>
                    <th scope="col" className="fs-7 fw-light">Username</th>
                    <th scope="col" className="fs-7 fw-light">Correo</th>
                    <th scope="col" className="fs-7 fw-light">Teléfono</th>
                    <th scope="col" className="fs-7 fw-light">Estado</th>
                    <th scope="col" className="fs-7 fw-light">Acciones</th>
                </tr>
            </thead>
            <tbody>
                {users.map(user => (
                    <User
                        key={user.id}
                        user={user}
                    />
                ))}
            </tbody>
        </table>
    )
}

export default Users