import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'

const Enlace = ({enlace, handleEnlace}) => {
    const [view, setView] = useState(false)
    const {name, href} = enlace
    const {pathname} = useRouter()

    useEffect(() => {
        validarPath()
    })

    const validarPath = () => {
        setView(pathname === href)
        
        if(pathname.includes('blog')){
            setView(name === 'Blog')
        }
    }

    return (
        <Link href={href}>
            <a
                onClick={() => handleEnlace()}
                className={`btn outline-none rounded-0 ${view ? 'border-bottom border-primary text-primary' : 'text-dark'}`}
            >
                {name}
            </a>
        </Link>
    )
}

export default Enlace