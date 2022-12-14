import { useEffect, useState } from "react"
import useAuth from "../../../../hooks/useAuth"
import Enlace from "./Enlace"
import RedesSociales from "./RedesSociales"

const enlaces = [
    {
        name: 'Inicio',
        href: '/'
    },
    {
        name: 'Blog',
        href: '/blog'
    },
    {
        name: 'Acerca De',
        href: '/about'
    },
    {
        name: 'Contacto',
        href: '/contacto'
    }
]

const Enlaces = ({navShow, handleEnlace}) => {
    const [enlaceAdmin, setEnlaceAdmin] = useState({})
    const {auth} = useAuth()

    useEffect(() => {
        if(auth){
            setEnlaceAdmin({
                name: 'Panel Administrador',
                href: '/admin'
            })
        }
    }, [auth])

    return (
        <ul className={`enlaces d-flex flex-column flex-lg-row justify-content-center align-items-center text-center text-lg-start bg-light bg-lg-none ${navShow ? 'show' : ''}`}>
            {enlaces.map(enlace => (
                <li 
                    key={enlace.name}
                    className='mx-1 py-2 py-lg-0'
                >
                    <Enlace
                        handleEnlace={handleEnlace}
                        enlace={enlace}
                    />
                </li>
            ))}

            {enlaceAdmin.href && (
                <li className='mx-1 py-2 py-lg-0'>
                    <Enlace
                        handleEnlace={handleEnlace}
                        enlace={enlaceAdmin}
                    />
                </li>
            )}

            <li className='mx-1 py-2 py-lg-0'>
                <RedesSociales/>
            </li>
        </ul>
    )
}

export default Enlaces