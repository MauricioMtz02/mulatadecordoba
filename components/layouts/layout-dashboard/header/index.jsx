import useDashboard from '../../../../hooks/useDashboard'
import Search from './Search'
import User from './User'

const Header = () => {
    const {sidebarView, handleSidebar} = useDashboard()

    return (
        <header className="row gx-0 justify-content-between align-items-center">
            <button
                onClick={handleSidebar}
                className='d-flex d-lg-none p-0 m-0 bg-none outline-none col-2 position-relative z-index-1001'
            >
                <i className={`sidebar-btn bi bi-${sidebarView ? 'x' : 'list'} fs-1 cursor-pointer ${sidebarView && 'view'}`}></i>
            </button>

            <div className='col-8 col-lg-6'>
                <Search/>
            </div>

            <div className='col-2 col-lg-4 d-flex justify-content-end'>
                <User/>
            </div>
        </header>
    )
}

export default Header