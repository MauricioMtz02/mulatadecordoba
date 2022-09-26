export const generateUrlConfig = (url, config) => {
    let str = url

    const { limit, page, where } = config

    str+= `?limit=${limit}&page=${page}`

    // Generar where
    where.forEach(obj => {
        const { column, value } = obj
        str+= `&${column}=${value}` 
    })

    return str
}

export const obtenerFecha = datetime => {
    const date = dateFormat(datetime)
    return date.full
} 

export const dateFormat = datetime => {
    //FORMATEAR FECHA
    const fechaObj = new Date(datetime);
    const mes = fechaObj.getMonth();
    const dia = fechaObj.getDate();
    const year = fechaObj.getFullYear();
    const hora = fechaObj.getHours();
    const minutos = fechaObj.getMinutes();
  
    const fechaUTC = new Date( Date.UTC(year, mes, dia, hora, minutos) );
    const opciones = { weekDay: 'long', year: 'numeric', month: 'long', day: 'numeric'}
  
    return {
        year: fechaUTC.toLocaleDateString('es-MX', {year: 'numeric'}),
        mes: fechaUTC.toLocaleDateString('es-MX', {month: 'long'}),
        mesNumero: fechaUTC.toLocaleDateString('es-MX', {month: '2-digit'}),
        mesCorto: fechaUTC.toLocaleDateString('es-MX', {month: 'short'}),
        dia: fechaUTC.toLocaleDateString('es-MX', {day: '2-digit'}),
        full: fechaUTC.toLocaleDateString('es-MX', opciones),
        time: fechaObj.getTime()
    }
}