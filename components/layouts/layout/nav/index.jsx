import Link from 'next/link'
import { useState } from 'react'
import Enlaces from './Enlaces'



const Nav = () => {
    const [navShow, setNavShow] = useState(false)

    const handleNav = () => {
        setNavShow(!navShow)
    } 

    const handleEnlace = () => {
        setNavShow(false)
    }

    return (
        <nav className='border-bottom py-4 nav-principal'>
            <div className='col-11 mx-auto d-flex justify-content-between align-items-center'>
                <Link
                    href={'/'}
                >
                    <h2 className='mb-0 cursor-pointer fs-3 fw-light text-primary'><span className='fw-bold'>La Mulata</span> De Córdoba</h2>
                </Link>

                <Enlaces
                    navShow={navShow}
                    handleEnlace={handleEnlace}
                />

                <div className='d-flex d-lg-none align-items-center'>
                    <div className="ms-3 position-relative z-index-10">
                        <div className="menu-activador">
                            <input 
                                type="checkbox" 
                                id="lanzador" 
                                onChange={handleNav}
                                checked={navShow}
                            />
                            <label htmlFor="lanzador">
                                <span className="menu-activador-linea bg-dark"></span>
                                <span className="menu-activador-linea bg-dark"></span>
                                <span className="menu-activador-linea bg-dark"></span>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
            
        </nav>
    )
}

export default Nav