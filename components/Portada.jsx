import Link from 'next/link'
import { obtenerFecha } from '../helpers'

const Portada = ({articulo}) => {
    const { categoria, title, img, url, created_at } = articulo

    return (
        <Link
            href={`/blog/${url}`}
        >
            <div className="cursor-pointer position-relative z-index-1 w-100 h-100">
                <div 
                    className="bg-image rounded mw-100"
                    style={{
                        backgroundImage: `url(${process.env.BACKEND_IMAGES}/${img ? img : 'articuloNone.jpg'})`,
                        width: '100%',
                        height: '100%'
                    }}
                ></div>
                <div className="cortina-negra w-100 rounded shadow"></div>

                <div
                    className="position-absolute bottom-0 p-3 p-lg-4 text-light z-index-2"
                >
                    <h6 className="text-primary">{categoria}</h6>
                    <h2 className="fw-bold">{title}</h2>
                    <p className="small fw-light fst-italic">Publicado el {obtenerFecha(created_at)}</p>
                </div>
            
            </div>
        </Link>
    )
}

export default Portada