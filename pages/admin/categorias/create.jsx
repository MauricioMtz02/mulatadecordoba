import { useState } from 'react'
import Link from 'next/link'
import Form from "../../../components/pages/admin/categorias/Form"
import LayoutDashboard from "../../../layouts/LayoutDashboard"

export default function CreatePage() {
    const [register, setRegister] = useState({
        id: null,
        name: ''
    })

    const handleInput = e => {
        setRegister({
            ...register,
            [e.target.id]: e.target.value
        })
    }

    return (
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
    )
}

CreatePage.getLayout = function getLayout(page) {
    return (
        <LayoutDashboard
            page={'Crear Categoría'}
        >
            {page}
        </LayoutDashboard>
    )
}