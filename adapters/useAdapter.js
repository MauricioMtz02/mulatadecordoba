export const  createCategoriaAdapter = categoria => {
    const { id, name, status, created_at, last_update, articulos } = categoria

    const articulosAdapter = []

    articulos.forEach(articulo => {
        articulosAdapter.push(createArticuloAdapter(articulo))  
    })

    return {
        id,
        name,
        status,
        created_at,
        last_update,
        articulos: articulosAdapter
    }
}

export const createArticuloAdapter = articulo => {
    const { id, title, content, img, description, keywords, url, categoriaId, status, created_at, last_update, categoria } = articulo
    return {
        id,
        title,
        content,
        img,
        description,
        keywords,
        url,
        categoriaId,
        status,
        created_at,
        last_update,
        categoria
    }
}

export const createMensajeAdapter = mensaje => {
    const { id, fullname, email, subject, msg, view, created_at, last_update, status } = mensaje

    return{
        id,
        fullname,
        email,
        subject,
        msg,
        view,
        created_at,
        last_update,
        status
    }
}

export const createUserAdapter = user => {
    const { id, username, email, phone_number, jwt, admin, created_at, last_update, status } = user

    return{
        id,
        username,
        email,
        phone_number,
        jwt,
        admin,
        created_at,
        last_update,
        status
    }
}

export const createRedSocialAdapter = redSocial => {
    const { id, name, icon, href, created_at, last_update, status } = redSocial

    return{
        id,
        name,
        icon,
        href,
        created_at,
        last_update,
        status
    }
}