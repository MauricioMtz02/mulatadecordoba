import Banner from "../components/pages/home/Banner"
import Facebook from "../components/pages/home/Facebook"
import Instagram from "../components/pages/home/Instagram"
import Portadas from "../components/pages/Portadas"
import Portada from "../components/Portada"
import Button from "../components/utilities/Button"
import Layout from "../layouts/Layout"
import { getArticulos } from "../services/articulos"
import { getCategorias } from "../services/categorias"

export default function HomePage({articulos, categorias}) {
    return (
        <>
            <Banner
                data={articulos}
            />

            {categorias.length && (
                <Portadas
                    title={categorias[0].name}
                    articulos={categorias[0].articulos}
                />
            )}
            
            <section className="row mt-3 mt-md-5">
                {categorias.length > 1 && (
                    <div className="col-12 col-md-6 col-lg-7 col-xl-8">
                        <div>
                            <h3 className="text-center pb-2 fw-semibold text-dark">{categorias[1].name}</h3>

                            <div className="row gy-4 justify-content-start mt-0 mt-lg-2">
                                {categorias[1].articulos.map((articulo, i) => i<3 && (
                                    <div 
                                        key={articulo.id}
                                        className="col-12 col-sm-6 col-xl-4"
                                    >
                                        <div className="h-20rem">
                                            <Portada
                                                articulo={articulo}
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="d-flex justify-content-center mt-4">
                            <Button
                                config={{
                                    name: 'Ver Más',
                                    href: '/blog',
                                    type: 'info'
                                }}
                            />
                            </div>
                        </div>
                    </div>
                )}
                

                <div className="mt-5 mt-md-0 col-12 col-md-6 col-lg-5 col-xl-4">
                    <div>
                        <h3 className="text-center text-md-end pb-2 fw-semibold text-dark"><span className="fw-normal text-secondary">Siguenos en</span> Facebook</h3>
                        <Facebook/>
                    </div>
                </div>
                
            </section>

            {categorias.length > 2 && (
                <section className="py-5">
                    <h3 className="text-center pb-2 text-uppercase fw-semibold text-dark">{categorias[2].name}</h3>

                    <div className="row gy-4 justify-content-center mt-0 mt-lg-2">
                        {categorias[2].articulos.map(articulo => (
                            <div 
                                key={articulo.id}
                                className="col-12 col-sm-6"
                            >
                                <div className="h-20rem">
                                    <Portada
                                        articulo={articulo}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            )}

            <Instagram/>
        </>
    )
}

HomePage.getLayout = function getLayout(page) {
    return (
        <Layout
            page={'Inicio'}
        >
            {page}
        </Layout>
    )
}

export async function getServerSideProps() {
    // Obtener al menos 4 registros de articulos recientes
    const configArticulos = {
        limit: 4,
        where: [
            {
                column: 'status',
                value: 1
            }
        ]
    }
    
    // Obtener al menos 3 categorias junto con articulos
    const configCategorias = {
        limit: 3,
        where: [
            {
                column: 'articulos_limit',
                value: 4
            },
            {
                column: 'status',
                value: 1
            }
        ]
    }

    const [articulos, categorias] = await Promise.all([
        getArticulos(configArticulos),
        getCategorias(configCategorias)
    ])

    return {
        props: {
            articulos: articulos.data,
            categorias: categorias.data
        }, // will be passed to the page component as props
    }
}