import { useState } from 'react'
import { getCategoria } from '../../../../services/categorias'
import Link from 'next/link'
import Redirect from '../../../../components/utilities/Redirect'
import Form from "../../../../components/pages/admin/categorias/Form"
import LayoutDashboard from "../../../../layouts/LayoutDashboard"

export default function UpdatePage({categoria}) {
    const [register, setRegister] = useState(categoria)

    const handleInput = e => {
        setRegister({
            ...register,
            [e.target.id]: e.target.value
        })
    }

    return register.id ? (
        <>
            <div className="bg-light p-4 rounded-5">
                <div className='mb-5 d-flex justify-content-start'>
                    <Link
                        href={`/admin/categorias`}
                    >
                        <a className='btn btn-danger'>Cancelar</a>
                    </Link>
                </div>
                <Form
                    register={register}
                    handleInput={handleInput}
                />
            </div>
        </>
    ) : <Redirect url={`/admin/categorias`} />
}

UpdatePage.getLayout = function getLayout(page) {
    return (
        <LayoutDashboard
            page={'Editar Categoría'}
        >
            {page}
        </LayoutDashboard>
    )
}

export async function getServerSideProps(context) {
    const id = context.query.id
    const {data} = await getCategoria(id)
    const categoria = data

    return {
      props: {
        categoria
      }
    }
}