import { createRedSocialAdapter } from "../adapters/useAdapter"
import { generateUrlConfig } from "../helpers"

export const getRedesSociales = async (config) => {

    const url = generateUrlConfig(`${process.env.URL_BACKEND}/redes-sociales`, {
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
            res.data.push(createRedSocialAdapter(row))
        })
        res.meta = result.meta
    } catch (error) {
        console.log(error)
    }

    return res
}

export const getRedSocial = async (id) => {
    const url = `${process.env.URL_BACKEND}/redes-sociales/${id}`

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

        res.data = createRedSocialAdapter(result.data)

        res.meta = result.meta
    } catch (error) {
        console.log(error)
    }

    return res
}

export const saveRedSocial = async (redSocial) => {
    const register = redSocial
    const url = `${process.env.URL_BACKEND}/redes-sociales`
    const res = {
        data: [],
        meta: {},
        msg: '',
        status: null
    }

    const columns = [
        'href'
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

        res.data = result.data
        res.meta = result.meta
        res.msg = result.msg
        res.status = result.status
    } catch (error) {
        console.log(error)
    }

    return res
}