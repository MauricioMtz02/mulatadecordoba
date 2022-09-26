import { createMensajeAdapter } from "../adapters/useAdapter"

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