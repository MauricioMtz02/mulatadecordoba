import { useState, useEffect } from "react"
import Image from "next/image"
import Link from 'next/link'
import { obtenerFecha } from "../helpers"

const ArticuloCard = ({articulo}) => {
    const [desc, setDesc] = useState('')
    const {categoria, title, description, content, img, url, created_at} = articulo

    useEffect(() => {
        cutContent()
    })

    const cutContent = () => {
        if(content){
            setDesc(description.length > 50 ? `${description.substring(0, 50)}...` : '')
        }
    }

    return (
        <Link
            href={`/blog/${url}`}
        >
            <div className="cursor-pointer bg-white rounded shadow-sm p-3">
                <div className="row">
                    <div className="order-last order-lg-first mx-auto col-8 col-lg-6">
                        <Image
                            src={`${process.env.BACKEND_IMAGES}/${img ? img : 'articuloNone.jpg'}`}
                            width={1000}
                            height={600}
                            alt={'hola'}
                            className={'square-path mw-100 rounded shadow border'}
                        />
                    </div>

                    <div className="text-center text-dark text-lg-start mx-auto col-12 col-lg-6">
                        <p className="mb-0 fs-7 text-primary">{categoria}</p>
                        <h5 title={title}>{title}</h5>
                        <p className="fw-light mb-1">{desc}</p>
                    </div>
                </div>
                
                <p className="m-0 mt-2 text-center text-secondary fs-7 fw-light fst-italic">Publicado el {obtenerFecha(created_at)}</p>
            </div>
        </Link>
        
    )
}

export default ArticuloCard