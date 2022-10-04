import { useState, useEffect } from 'react'
import { getArticulos } from "../../services/articulos"
import Head from 'next/head'
import Layout from "../../layouts/Layout"
import Portadas from '../../components/pages/Portadas'
import Meta from '../../components/pages/blog/articulo/Meta'
import Articulo from '../../components/Articulo'

export default function ArticuloPage({articulo}) {
    const {id, title, categoriaId} = articulo
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

    return (
        <>
            <Head>
                <title>{title} - La Mulata de Córdoba</title>
                <Meta
                    articulo={articulo}
                />
            </Head>

            <Articulo
                articulo={articulo}
            />

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

    const articulos = await getArticulos({
        where: [
            {
                column: 'status',
                value: 1
            }
        ]
    })

    const paths = articulos.data.map( articulo => ({
        params: { url: articulo.url }
    }))

    return {
        paths,
        fallback: 'blocking', // can also be true or 'blocking'
    }
}
  
// `getStaticPaths` requires using `getStaticProps`
export async function getStaticProps({params: {url}}) {
    const {data} = await getArticulos({
        where: [
            {
                column: 'url',
                value: url
            },
            {
                column: 'status',
                value: 1
            }
        ]
    })

    if(!data){
        return {
            redirect: {
                destination: '/',
                permanent: false
            }
        }
    }

    return {
        // Passed to the page component as props
        props: {
            articulo: data[0]
        },
        revalidate: 60
    }
}