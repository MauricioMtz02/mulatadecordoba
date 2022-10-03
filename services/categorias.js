import { createCategoriaAdapter } from "../adapters/useAdapter"
import { generateUrlConfig } from "../helpers"

export const getCategorias = async (config) => {

    const url = generateUrlConfig(`${process.env.URL_BACKEND}/categorias`, {
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
            res.data.push(createCategoriaAdapter(row))
        })
        res.meta = result.meta
    } catch (error) {
        console.log(error)
    }

    return res
}

export const getCategoria = async (id, config) => {
    const url = generateUrlConfig(`${process.env.URL_BACKEND}/categorias/${id}`, {
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

        res.data = createCategoriaAdapter(result.data)

        res.meta = result.meta
    } catch (error) {
        console.log(error)
    }

    return res
}

export const saveCategoria = async (categoria) => {
    const register = categoria
    const url = `${process.env.URL_BACKEND}/categorias`
    const res = {
        data: [],
        meta: {}
    }

    const columns = [
        'name'
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