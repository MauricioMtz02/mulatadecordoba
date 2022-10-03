import { useEffect, useState, createContext } from 'react'
import { getArticulos } from '../services/articulos'
import { getRedesSociales } from '../services/redSocial'

const staticLimit = 10

const BlogContext = createContext()

const BlogProvider = ({children}) => {
    const [categoriaActual, setCategoriaActual] = useState(0)
    const [articulos, setArticulos] = useState([])
    const [meta, setMeta] = useState({})
    const [limit, setLimit] = useState(staticLimit)
    const [search, setSearch] = useState('')
    const [redesSociales, setRedesSociales] = useState([])

    useEffect(() => {
        const consultarApi = async () => {
            const {data} = await getRedesSociales({
                where: [
                    {
                        column: 'status',
                        value: 1
                    }
                ]
            })
            setRedesSociales(data)
        }

        consultarApi()
    }, [])

    useEffect(() => {
        const obtenerArticulos = async () => {
            const config = {
                limit,
                where: []
            }
            
            if(categoriaActual){
                config.where = [ { column: 'categoriaId', value: categoriaActual }, { column: 'status', value: 1 } ]
            }

            if(search){
                config.where = [
                    ...config.where,
                    {
                        column: 'search',
                        value: search
                    },
                    {
                        column: 'status',
                        value: 1
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