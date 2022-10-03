import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { saveArticulo } from '../../../../services/articulos'
import { getCategorias } from '../../../../services/categorias'
import useDashboard from '../../../../hooks/useDashboard'
import dynamic from "next/dynamic";

const Form = ({articulo, handleInput, handleContent}) => {
    const { categoriaId, title, img, description, keywords, content} = articulo
    const [categorias, setCategorias] = useState([])
    const [image, setImage] = useState(null)
    const [imgTemporal, setImgTemporal] = useState('')
    const [sending, setSending] = useState(false)
    const router = useRouter()
    const { printAlert } = useDashboard()

    const Editor = dynamic(() => import("../../../Editor.jsx"), { ssr: false });

    useEffect(() => {
        const consultarApi = async () => {
            const {data} = await getCategorias({
                where: [
                    {
                        column: 'status',
                        value: 1
                    }
                ]
            })

            setCategorias(data)
        }

        consultarApi()
    }, [])

    useEffect(() => {
        if(image){
            setImgTemporal(URL.createObjectURL(image))
        }
    }, [image])

    const handleSubmit = async e => {
        e.preventDefault()

        if(sending){
            return
        }
        
        setSending(true)

        const {data} = await saveArticulo(articulo, image)

        setSending(false)

        if(!data){
            console.log('¡Error Inesperado!')
            return
        }

        router.push('/admin/articulos')
        printAlert('Articulo Guardado Correctamente', 'success')
    }

    return (
        <form
            encType='multipart/form-data'
            className="col-xl-10 col-xxl-8"
            onSubmit={handleSubmit}
        >
            <div className="row mb-5 gy-4 gy-md-0 gx-xxl-5">
                <div className="col-sm-6">
                    <label htmlFor="categoriaId" className="form-label">Categoría</label>
                    <select 
                        id="categoriaId" 
                        className="form-select border-0 shadow-sm"
                        value={categoriaId}
                        onChange={handleInput}
                    >
                        <option>Seleccione una Categoría</option>
                        {categorias.map(categoria => (
                            <option
                                key={categoria.id}
                                value={categoria.id}
                            >
                                {categoria.name}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="col-sm-6">
                    <label htmlFor="title" className="form-label">Título</label>
                    <input
                        type="text" 
                        className="form-control border-0 shadow-sm" 
                        id="title"
                        placeholder="Ingresa el Título del Articulo"
                        value={title}
                        onChange={handleInput}
                    />
                </div>
            </div>

            <div className="row mb-5 gy-4 gy-md-0 gx-xxl-5">
                <div className="col-sm-6">
                    <label htmlFor="img" className="form-label">Imagen <span className="small opacity-75 fw-light">(1000px x 600px)</span></label>
                    <input
                        type="file"
                        accept="image/png,image/jpeg"
                        className="form-control border-0 shadow-sm" 
                        id="img"
                        onChange={e => setImage(e.target.files[0])}
                    />
                </div>

                <div className="col-sm-6">
                    <div
                        className="d-block rounded-4 bg-white bg-image"
                        style={{
                            width: '250px',
                            height: '150px',
                            backgroundImage: `url(${imgTemporal ? imgTemporal : process.env.BACKEND_IMAGES+'/'+img})`
                        }}
                    >
                    </div>
                </div>
            </div>

            <div className="row gy-4 gy-md-0 g-xxl-5">
                <div className="col-sm-6">
                    <label htmlFor="description" className="form-label">Breve Descripción</label>
                    <textarea 
                        className="form-control border-0 shadow-sm" 
                        id="description" 
                        rows="3"
                        value={description}
                        onChange={handleInput}
                    ></textarea>
                </div>

                <div className="col-sm-6">
                    <label htmlFor="keywords" className="form-label">Palabras Clave <span className="small opacity-75">(Ejem: Viaje, México, etc...)</span></label>
                    <textarea 
                        className="form-control border-0 shadow-sm" 
                        id="keywords" 
                        rows="3"
                        value={keywords}
                        onChange={handleInput}
                    ></textarea>
                </div>

                <div className="col-sm-12">
                    <label htmlFor="content" className="form-label">Contenido</label>
                    <Editor
                        value={content}
                        handleContent={handleContent}
                    />
                </div>
            </div>

            <div className="mt-5">
                {sending ? (
                    <div className="spinner-border text-info" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                ) : (
                    <button
                        type="submit"
                        className="btn btn-success"
                    >
                        Guardar
                    </button>
                )}
            </div>
            
            
        </form>
    )
}

export default Form