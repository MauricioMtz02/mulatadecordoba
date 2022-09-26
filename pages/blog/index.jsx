import { getCategorias } from "../../services/categorias"
import useBlog from "../../hooks/useBlog"
import Layout from "../../layouts/Layout"
import Articulos from '../../components/pages/blog/Articulos'
import Search from "../../components/pages/blog/Search"

export default function BlogPage({categorias}) {
    const { handleCategoria, categoriaActual, search } = useBlog()
    
    return (
        <>
            <Search/>

            <section className="mt-5">
                <div className="d-flex justify-content-center flex-wrap">
                        <button
                            onClick={() => handleCategoria(0)}
                            className={`btn py-2 px-4 rounded-5 m-2 ${!categoriaActual && !search ? 'btn-info' : ''}`}
                        >
                            Todos
                        </button>
                    {categorias.map(categoria => (
                        <button
                            onClick={() => handleCategoria(categoria.id)}
                            key={categoria.id}
                            className={`btn py-2 px-4 rounded-5 m-2 ${categoriaActual === categoria.id && 'btn-info'}`}
                        >
                            {categoria.name}
                        </button>
                    ))}
                </div>
            </section>

            <Articulos/>
        </>
    )
}

BlogPage.getLayout = function getLayout(page) {
    return (
        <Layout
            page={'Blog'}
        >
            {page}
        </Layout>
    )
}

export async function getStaticProps() {    
    // Obtener categorias sin articulos
    const {data} = await getCategorias()

    return {
        props: {
            categorias: data
        }, // will be passed to the page component as props
        revalidate: 60
    }
}