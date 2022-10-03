import { useRouter } from 'next/router'
import Link from 'next/link'

const Pagination = ({meta}) => {
    const {pageSize} = meta
    const {query} = useRouter()
    const pageActual = parseInt(query.page ?? 1)

    const generarPages = () => {
        const pages = []

        for (let i = 1; i <= pageSize; i++) {
            pages.push(i)    
        }

        return pages
    }

    return pageSize > 1 ? (
        <nav>
            <ul className="pagination justify-content-center flex-wrap">
                {pageActual > 1 && (
                    <li className="page-item">
                        <Link
                            href={{
                                query: { page: pageActual - 1 }
                            }}
                        >
                            <a className={`page-link`}>Anterior</a>
                        </Link>
                    </li>
                )}
                
                {generarPages().map(page => (
                    <li key={page} className="page-item">
                        <Link
                            href={{
                                query: { page }
                            }}
                        >
                            <a className={`page-link ${pageActual === page && 'active'}`}>{page}</a>
                        </Link>
                    </li>
                ))}
                
                {pageActual < pageSize && (
                    <li className="page-item">
                        <Link
                            href={{
                                query: { page: pageActual + 1 }
                            }}
                        >
                            <a className={`page-link`}>Siguiente</a>
                        </Link>
                    </li>
                )}
            </ul>
        </nav>
    ) : ''
}

export default Pagination