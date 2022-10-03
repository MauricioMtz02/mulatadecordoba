import Categorias from "./Categorias"

const CategoriasCard = () => {
    return (
        <div className="rounded-5 bg-light p-4">
            <h3 className="fs-5 fw-semibold">Top Categorías</h3>
            <div className="d-flex justify-content-between">
                <p
                    className="mb-0 small fw-light opacity-75"
                    style={{
                        fontSize: '.85rem'
                    }}
                >
                    Categorías
                </p>

                <p
                    className="mb-0 small fw-light opacity-75"
                    style={{
                        fontSize: '.85rem'
                    }}
                >
                    Posts
                </p>
            </div>

            <div className="mt-2">
                <Categorias/>
            </div>
        </div>
    )
}

export default CategoriasCard