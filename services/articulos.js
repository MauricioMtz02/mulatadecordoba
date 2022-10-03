import { createArticuloAdapter } from "../adapters/useAdapter"
import { generateUrlConfig } from "../helpers"

export const getArticulos = async (config) => {
    const url = generateUrlConfig(`${process.env.URL_BACKEND}/articulos`, {
        limit: config?.limit ? config.limit : 500,
        page: config?.page ? config.page : 1,
        where: config?.where ? config.where : []
    })

    const res = {
        data: [],
        meta: {}
    }

    try {
        const response = await fetch(url)
        const result = await response.json()

        if(result.status != 200){
            return res
        }

        result.data.forEach(row => {
            res.data.push(createArticuloAdapter(row))
        })

        res.meta = result.meta
    } catch (error) {
        console.log(error)
    }

    return res
}

export const getArticulo = async (id, config) => {
    const url = generateUrlConfig(`${process.env.URL_BACKEND}/articulos/${id}`, {
        limit: config?.limit ? config.limit : 500,
        page: config?.page ? config.page : 1,
        where: config?.where ? config.where : []
    })

    const res = {
        data: {},
        meta: {}
    }

    try {
        const response = await fetch(url)
        const result = await response.json()

        if(result.status != 200){
            return res
        }

        res.data = createArticuloAdapter(result.data)

        res.meta = result.meta
    } catch (error) {
        console.log(error)
    }

    return res
}

export const getArticulosCount = async (config) => {
    const url = generateUrlConfig(`${process.env.URL_BACKEND}/articulos/count`, {
        limit: config?.limit ? config.limit : 500,
        page: config?.page ? config.page : 1,
        where: config?.where ? config.where : []
    })

    const res = {
        data: [],
        meta: {}
    }

    try {
        const response = await fetch(url)
        const result = await response.json()

        if(result.status != 200){
            return res
        }

        res.data = result.data

        res.meta = result.meta
    } catch (error) {
        console.log(error)
    }

    return res
}

export const saveArticulo = async (articulo, img) => {
    const register = createArticuloAdapter(articulo)
    const url = `${process.env.URL_BACKEND}/articulos`
    const res = {
        data: [],
        meta: {}
    }

    const columns = [
        'categoriaId',
        'title',
        'description',
        'keywords',
        'content'
    ]

    try {
        // Preparar data a enviar
        const data = new FormData()
        columns.forEach(column => {
            data.append(column, register[column])
        })

        if(register.id){
            data.append('id', register.id)
        }

        if(img){
            data.append('img', img)
        }

        const response = await fetch(url, {
            method: 'POST',
            body: data
        })

        const result = await response.json()

        if(result.status != 200){
            return res
        }

        res.data = result.data

        res.meta = result.meta
    } catch (error) {
        console.log(error)
    }

    return res
}