const Search = () => {
    return (
        <form
            className="position-relative"
        >
            <input 
                type={'text'}
                className={'form-control bg-light border-0 py-2 px-5 rounded-5'}
                placeholder={'Buscar'}
            />

            <i className="bi bi-search position-absolute start-0 top-0 ps-4 pt-2 opacity-75"></i>
        </form>
    )
}

export default Search