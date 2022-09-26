import { useState, useEffect } from "react"
import useBlog from "../../../hooks/useBlog"

const Search = () => {
    const {handleSearch, categoriaActual, search} = useBlog()
    const [value, setValue] = useState('')

    useEffect(() => {
        if(!search){
            setValue('')
        }
    }, [search])

    useEffect(() => {
        setValue('')
    }, [categoriaActual])

    const handleSubmit = e => {
        e.preventDefault()

        // Validar que search no esté vacio
        if(!value){
            return
        }

        handleSearch(value)
    }

    return (
        <section className="p-3 py-4 p-md-4 p-md-5 bg-primary rounded-5 shadow">
            <h2 className="text-center fw-semibold text-light">Blog</h2>

            <form 
                onSubmit={handleSubmit}
                className="col-12 col-sm-9 col-md-8 col-lg-6 col-xl-5 col-xxl-4 mx-auto"
            >
                <div className="d-flex justify-content-between mt-4 bg-white rounded-4">
                    <input
                        onChange={e => setValue(e.target.value)}
                        value={value}
                        type="text" 
                        id="q" 
                        className="form-control rounded-0 rounded-4 shadow py-3 border-0" 
                        aria-describedby="searchBlog"
                        placeholder="Buscar"
                    />

                    <button
                        disabled={!value}
                        type="submit"
                        className="btn btn-light rounded-0 rounded-4"
                    >
                        Buscar
                    </button>
                </div>
            </form>
        </section>
    )
}

export default Search