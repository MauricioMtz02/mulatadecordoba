import useAuth from "../../../../hooks/useAuth"
import useDashboard from '../../../../hooks/useDashboard'

const Logout = () => {
    const { logout } = useAuth()
    const {handleSidebar} = useDashboard()

    const handleClick = () => {
        handleSidebar()
        logout()
    }

    return (
        <button
            type='button' 
            onClick={handleClick}
            className={`bg-none border-0 text-dark fw-bold text-decoration-none px-4 py-3 rounded-4`}>
            <i className={`bi bi-box-arrow-left me-3`}></i>

            <span className='pe-2 position-relative'>
                Cerrar Sesión
            </span>
        </button>
    )
}

export default Logout