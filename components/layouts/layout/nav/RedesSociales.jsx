import RedSocial from "./RedSocial"
import useBlog from "../../../../hooks/useBlog"

const RedesSociales = () => {
    const { redesSociales } = useBlog()
    return (
        <div className="d-flex flex-wrap m-3 m-lg-0">
            {redesSociales.map(redSocial => (
                <RedSocial
                    key={redSocial.icon}
                    redSocial={redSocial}
                />
            ))}
        </div>
    )
}

export default RedesSociales