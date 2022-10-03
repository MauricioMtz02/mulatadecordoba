import { createMensajeAdapter } from "../adapters/useAdapter"
import { generateUrlConfig } from "../helpers"

export const getMensajes = async (config) => {

    const url = generateUrlConfig(`${process.env.URL_BACKEND}/mensajes`, {
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
            res.data.push(createMensajeAdapter(row))
        })
        res.meta = result.meta
    } catch (error) {
        console.log(error)
    }

    return res
}

export const getMensaje = async (id) => {
    const url = `${process.env.URL_BACKEND}/mensajes/${id}`

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

        res.data = createMensajeAdapter(result.data)

        res.meta = result.meta
    } catch (error) {
        console.log(error)
    }

    return res
}

export const createMensaje = async mensaje => {
    const register = createMensajeAdapter(mensaje)
    const url = `${process.env.URL_BACKEND}/mensajes`
    const res = {
        data: [],
        meta: {}
    }

    const columns = [
        'fullname',
        'email',
        'subject',
        'msg'
    ]

    try {
        // Preparar data a enviar
        const data = new FormData()
        columns.forEach(column => {
            data.append(column, register[column])
        })

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