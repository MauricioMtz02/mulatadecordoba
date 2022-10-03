import { useState } from 'react'
import Link from 'next/link'
import Form from "../../../components/pages/admin/articulos/Form"
import LayoutDashboard from "../../../layouts/LayoutDashboard"

export default function CreatePage() {
    const [articulo, setArticulo] = useState({
        id: null,
        categoriaId: '',
        title: '',
        img: null,
        description: '',
        keywords: '',
        content: ''
    })

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

    return (
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
    )
}

CreatePage.getLayout = function getLayout(page) {
    return (
        <LayoutDashboard
            page={'Crear Articulo'}
        >
            {page}
        </LayoutDashboard>
    )
}