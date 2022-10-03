import { generateUrlConfig } from "../../helpers"

export const getCount = async (catalogo, config) => {

    const url = generateUrlConfig(`${process.env.URL_BACKEND}/${catalogo}/count`, {
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

export const setStatus = async (id, catalogo) => {

    const url = `${process.env.URL_BACKEND}/${catalogo}/${id}`
    
    const res = {
        data: [],
        meta: {}
    }

    try {
        const response = await fetch(url, {
            method: 'POST'
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