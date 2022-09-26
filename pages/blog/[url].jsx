import Head from 'next/head'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { obtenerFecha } from '../../helpers'
import { getArticulos } from "../../services/articulos"
import Layout from "../../layouts/Layout"
import Portadas from '../../components/pages/Portadas'

export default function ArticuloPage({articulo}) {
    const {id, categoria, title, description, content, keywords, img, categoriaId, created_at, last_update} = articulo
    const [articulos, setArticulos] = useState([])

    useEffect(() => {
        const consultarArticulos = async () => {
            const {data} = await getArticulos({
                where: [
                    {
                        column: 'categoriaId',
                        value: categoriaId
                    }
                ],
                limit: 4
            })
    
            setArticulos(data.filter(a => a.id != id))
        }

        consultarArticulos()
    }, [id, categoriaId])

    const printContent = () => {
        return {__html: content}
    }

    return (
        <>
            <Head>
                <title>{title} - La Mulata de Córdoba</title>
                <meta
                    name='description'
                    content={title}
                />
                <meta name="robots" content="index" />
                <meta name="keywords" content={keywords} />
                <meta property="og:image" content={`${process.env.BACKEND_IMAGES}/${img ? img : 'articuloNone.jpg'}`}/>
                <meta property="og:image:url" content={`${process.env.BACKEND_IMAGES}/${img ? img : 'articuloNone.jpg'}`}/>
                <meta property="og:image:secure_url" content={`${process.env.BACKEND_IMAGES}/${img ? img : 'articuloNone.jpg'}`}/>
                <meta property="article:published_time" content={created_at}/>
                <meta property="article:modified_time" content={last_update} />

                <meta itemprop="name" content={title}/>
                <meta itemprop="headline" content={title}/>
                <meta itemprop="description" content={description}/>
                <meta itemprop="image" content={`${process.env.BACKEND_IMAGES}/${img ? img : 'articuloNone.jpg'}`}/>
                <meta itemprop="datePublished" content={created_at}/>
                <meta itemprop="dateModified" content={last_update} />
                <meta itemprop="author" content="La Mulata de Córdoba"/>
            </Head>

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

            {articulos.length && (
                <section className='mt-5'>
                    <Portadas
                        title={'Tambien te puede interesar'}
                        articulos={articulos}
                    />
                </section>
            )}
        </>
    )
}

ArticuloPage.getLayout = function getLayout(page) {
    return (
        <Layout
            page={'Blog'}
        >
            {page}
        </Layout>
    )
}

// Generates `/posts/1` and `/posts/2`
export async function getStaticPaths() {

    const articulos = await getArticulos()

    const paths = articulos.data.map( articulo => ({
        params: { url: articulo.url }
    }))

    return {
        paths,
        fallback: false, // can also be true or 'blocking'
    }
}
  
// `getStaticPaths` requires using `getStaticProps`
export async function getStaticProps({params: {url}}) {
    const {data} = await getArticulos({
        where: [
            {
                column: 'url',
                value: url
            }
        ]
    })

    return {
        // Passed to the page component as props
        props: {
            articulo: data[0]
        },
        revalidate: 60
    }
}