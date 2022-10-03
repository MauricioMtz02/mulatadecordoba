import Link from 'next/link'
import useDashboard from '../../../../hooks/useDashboard'
import Enlaces from "./Enlaces"

const Sidebar = () => {
    const {sidebarView} = useDashboard()

    return (
        <aside className={`sidebar-dashboard bg-light p-5 rounded-5 ${sidebarView && 'view'}`}>
            <div className='d-flex justify-content-center mb-5'>
                <Link href={`/`}>
                    <h1 className='fw-bold fs-2 cursor-pointer'>La Mulata <span className='fw-light'>de Córdoba</span></h1>
                </Link>
            </div>

            <Enlaces/>
        </aside>
    )
}

export default Sidebar