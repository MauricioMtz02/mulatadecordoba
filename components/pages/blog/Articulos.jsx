import useBlog from '../../../hooks/useBlog'
import ArticuloCard from "../../ArticuloCard"

const Articulos = () => {
    const { articulos, handleLimit, limit, meta, search, handleSearch } = useBlog()

    const comprobarArticulos = () => {
        return articulos.length >= limit && articulos.length != meta.rows
    }

    return (
        <>
            {search && (
                <div className='d-flex justify-content-center mt-4'>
                    <button
                        onClick={() => handleSearch('')}
                        type='button'
                        className='btn btn-danger'
                    >
                        Eliminar Filtro
                    </button>
                </div>
            )}
            <section className="mt-5 mx-auto col-12 col-xl-10 col-xxl-9">
                {articulos.length ? (
                    <>
                        <div className="row g-4 mb-5">
                            {articulos.map(articulo => (
                                <div key={articulo.id} className="col-12 col-md-6 col-xl-4">
                                    <ArticuloCard
                                        articulo={articulo}
                                    />
                                </div>
                            ))}
                        </div>

                        {comprobarArticulos() && (
                            <div className={'d-flex justify-content-center'}>
                                <button
                                    className={'btn btn-primary text-light'}
                                    onClick={handleLimit}
                                >
                                    Cargar Más
                                </button>
                            </div>
                        )}
                    </>
                ) : (
                    <>
                        <h4 className='text-center text-dark'>¡Parece que no hay resultados!</h4>
                    </>
                )}
                
            </section>
        </>
    )
}

export default Articulos