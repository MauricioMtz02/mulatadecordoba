import { useState } from 'react'
import Link from 'next/link'
import Form from "../../../components/pages/admin/users/Form"
import LayoutDashboard from "../../../layouts/LayoutDashboard"

export default function CreatePage() {
    const [register, setRegister] = useState({
        id: null,
        username: '',
        email: '',
        phone_number: ''
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
                        href={`/admin/users`}
                    >
                        <a className='btn btn-danger'>Cancelar</a>
                    </Link>
                </div>
                <p className='border-bottom'>Los datos de acceso se enviarán al correo.</p>
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
            page={'Crear Usuario'}
        >
            {page}
        </LayoutDashboard>
    )
}