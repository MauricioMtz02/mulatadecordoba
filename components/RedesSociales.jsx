import useBlog from "../hooks/useBlog"
import Enlace from "./layouts/layout/footer/Enlace"

const RedesSociales = () => {
    const { redesSociales } = useBlog()

    return (
        <div className='d-flex flex-column'>
            {redesSociales.map(enlace => (
                <Enlace
                        key={enlace.name}
                        enlace={enlace}
                />
            ))}
        </div>
    )
}

export default RedesSociales