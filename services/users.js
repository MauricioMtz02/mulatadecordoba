import { createUserAdapter } from "../adapters/useAdapter"
import { generateUrlConfig } from "../helpers"

const res = {
    data: [],
    meta: {},
    msg: '',
    status: null
}

export const getUsers = async (config) => {

    const url = generateUrlConfig(`${process.env.URL_BACKEND}/users`, {
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
            res.data.push(createUserAdapter(row))
        })
        res.meta = result.meta
    } catch (error) {
        console.log(error)
    }

    return res
}

export const getUser = async (id) => {
    const url = `${process.env.URL_BACKEND}/users/${id}`

    try {
        const response = await fetch(url)
        const result = await response.json()

        if(result.status == 200){
            res.data = createUserAdapter(result.data)
            res.meta = result.meta
        }
    } catch (error) {
        console.log(error)
    }

    return res
}

export const saveUser = async (user) => {
    const register = user
    const url = `${process.env.URL_BACKEND}/users`
    const res = {
        data: [],
        meta: {},
        msg: '',
        status: null
    }

    const columns = [
        'username',
        'email',
        'phone_number'
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

export const getAuth = async jwt => {
    const url = `${process.env.URL_BACKEND}/users/profile`

    try {
        const response = await fetch(url, {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${jwt}`
            }
        })
        const result = await response.json()

        if(result.status == 200){
            res.data = createUserAdapter(result.data)
            res.meta = result.meta
            res.msg = result.msg
            res.status = result.status
        }

        
    } catch (error) {
        console.log(error)
    }

    return res
}

export const auth = async credentials => {
    const {identifier, password} = credentials
    const url = `${process.env.URL_BACKEND}/auth`
    
    try {
        const data = new FormData()
        data.append('identifier', identifier)
        data.append('password', password)

        const response = await fetch(url, {
            method: 'POST',
            body: data
        })
        const result = await response.json()

        res.msg = result.msg
        res.status = result.status

        if(result.status == 200){
            res.data = createUserAdapter(result.data)
            res.meta = result.meta
        }
        
    } catch (error) {
        console.log(error)
    }

    return res
}