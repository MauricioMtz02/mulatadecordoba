import { useState } from 'react'
import { getArticulo } from '../../../../services/articulos'
import Link from 'next/link'
import Redirect from '../../../../components/utilities/Redirect'
import Form from "../../../../components/pages/admin/articulos/Form"
import LayoutDashboard from "../../../../layouts/LayoutDashboard"

export default function UpdatePage({register}) {
    const [articulo, setArticulo] = useState(register)

    const handleInput = e => {
        setArticulo({
            ...articulo,
            [e.target.id]: e.target.value
        })
    }

    const handleContent = value => {
        setArticulo({
            ...articulo,
            content: value
        })
    }

    return register.id ? (
        <>
            <div className="bg-light p-4 rounded-5">
                <div className='mb-5 d-flex justify-content-start'>
                    <Link
                        href={`/admin/articulos`}
                    >
                        <a className='btn btn-danger'>Cancelar</a>
                    </Link>
                </div>
                <Form
                    articulo={articulo}
                    handleInput={handleInput}
                    handleContent={handleContent}
                />
            </div>
        </>
    ) : <Redirect url={`/admin/articulos`} />
}

UpdatePage.getLayout = function getLayout(page) {
    return (
        <LayoutDashboard
            page={'Editar Articulo'}
        >
            {page}
        </LayoutDashboard>
    )
}

export async function getServerSideProps(context) {
    const id = context.query.id
    const {data} = await getArticulo(id)
    const register = data

    return {
      props: {
        register
      }
    }
}