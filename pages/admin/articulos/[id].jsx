import { getArticulo } from '../../../services/articulos'
import Link from 'next/link'
import Articulo from '../../../components/Articulo'
import Redirect from '../../../components/utilities/Redirect'
import LayoutDashboard from "../../../layouts/LayoutDashboard"

export default function ArticuloPage({articulo}) {
    return articulo.id ? (
        <>
            <div className="bg-light p-4 rounded-5">
                <div className='mb-5 d-flex justify-content-start'>
                    <Link
                        href={`/admin/articulos`}
                    >
                        <a className='btn btn-dark'>Volver</a>
                    </Link>
                </div>

                <Articulo
                    articulo={articulo}
                />
            </div>
        </>
    ) : <Redirect url={`/admin/articulos`} />
}

ArticuloPage.getLayout = function getLayout(page) {
    return (
        <LayoutDashboard
            page={'Crear Articulo'}
        >
            {page}
        </LayoutDashboard>
    )
}

export async function getServerSideProps(context) {
    const id = context.query.id
    const {data} = await getArticulo(id)
    const articulo = data

    return {
      props: {
        articulo
      }
    }
}