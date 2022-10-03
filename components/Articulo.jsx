import { obtenerFecha } from '../helpers'
import Image from 'next/image'

const Articulo = ({articulo}) => {
    const { title, categoria, content, img, created_at } = articulo

    const printContent = () => {
        return {__html: content}
    }

    return (
        <article className='col-xl-10'>
            <div
                title={title}
            >
                <h5 className='text-primary'>{categoria}</h5>
                <h1>{title}</h1>
                <p className='fs-7 fw-light text-secondary'>Publicado el {obtenerFecha(created_at)}</p>
            </div>

            <section>
                <Image
                    src={`${process.env.BACKEND_IMAGES}/${img ? img : 'articuloNone.jpg'}`}
                    alt={`Articulo ${title}`}
                    width={1000}
                    height={600}
                    className='rounded-3'
                />
            </section>

            <section
                className='mt-4' 
                dangerouslySetInnerHTML={printContent()}></section>
        </article>
    )
}

export default Articulo