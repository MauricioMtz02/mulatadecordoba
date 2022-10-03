import Link from 'next/link'
import { useRouter } from 'next/router'
import useDashboard from '../../../../hooks/useDashboard'

const Enlace = ({enlace}) => {
    const { name, href, icon, badge } = enlace
    const { pathname } = useRouter()

    const {handleSidebar} = useDashboard()

    return (
        <Link
            href={href}
        >
            <a 
                onClick={handleSidebar}
                className={`text-dark fw-bold text-decoration-none px-4 py-3 rounded-4 ${href === pathname && 'bg-white'}`}>
                <i className={`bi bi-${icon} me-3`}></i>

                <span className='pe-2 position-relative'>
                    {name}

                    {badge && (
                        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                            3
                        </span>
                    )}
                </span>
            </a>
        </Link>
    )
}

export default Enlace