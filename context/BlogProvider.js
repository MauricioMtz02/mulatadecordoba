import { useEffect, useState, createContext } from 'react'
import { getArticulos } from '../services/articulos'

const staticLimit = 10

const BlogContext = createContext()

const BlogProvider = ({children}) => {
    const [categoriaActual, setCategoriaActual] = useState(0)
    const [articulos, setArticulos] = useState([])
    const [meta, setMeta] = useState({})
    const [limit, setLimit] = useState(staticLimit)
    const [search, setSearch] = useState('')

    const redesSociales = [
        {
            icon: 'facebook.png',
            href: 'https://www.facebook.com/LaMulataDeCordoba',
            name: 'Facebook'
        },
        {
            icon: 'instagram.png',
            href: '#',
            name: 'Instagram'
        },
        {
            icon: 'twitter.png',
            href: '#',
            name: 'Twitter'
        },
        {
            icon: 'youtube.png',
            href: '#',
            name: 'Youtube'
        },
        {
            icon: 'tik-tok.png',
            href: '#',
            name: 'Tik Tok'
        }
    ]

    useEffect(() => {
        const obtenerArticulos = async () => {
            const config = {
                limit,
                where: []
            }
            
            if(categoriaActual){
                config.where = [ { column: 'categoriaId', value: categoriaActual } ]
            }

            if(search){
                config.where = [
                    ...config.where,
                    {
                        column: 'search',
                        value: search
                    } 
                ]
            }
    
            const {data, meta} = await getArticulos(config)
            setArticulos(data)
            setMeta(meta)
        }

        obtenerArticulos()
    }, [categoriaActual, limit, search])

    const handleLimit = () => {
        setLimit(limit+staticLimit)
    }

    const handleCategoria = id => {
        setSearch('')
        setLimit(staticLimit)
        setCategoriaActual(id)
    }

    const handleSearch = value => {
        handleCategoria(0)
        setSearch(value)
    }

    return(
        <BlogContext.Provider
            value={{
                categoriaActual,
                handleCategoria,
                articulos,
                meta,
                limit,
                handleLimit,
                search,
                handleSearch,
                redesSociales
            }}
        >
            {children}
        </BlogContext.Provider>
    )
}

export {
    BlogProvider
}

export default BlogContext