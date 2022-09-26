import Link from 'next/link'
import { dateFormat } from '../../../../helpers'
import Enlace from './Enlace'
import RedesSociales from '../../../RedesSociales'

const enlaces = [
    {
        icon: 'gmail.png',
        name: 'contacto@gmail.com',
        href: '#'
    },
    {
        icon: 'paypal.png',
        name: 'Paypal',
        href: '#'
    }
]

const Footer = () => {
    const printYear = () => {
        return dateFormat(new Date()).year
    }

    return (
        <footer className="bg-white py-4 py-lg-5 border-top">
            <div className="col-11 col-xxl-10 mx-auto">
                <div className='row gy-4 justify-content-between'>
                    <div className='col-12 col-lg-4 col-xxl-3'>
                        <Link
                            href={'/'}
                        >
                            <h5 className="cursor-pointer text-primary fw-normal"><span className="fw-bold">La Mulata</span> de Córdoba</h5>
                        </Link>

                        <p className='mt-3 lead fs-7'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi mollitia culpa repellat repellendus est ad et odit ea nesciunt, dolorem at, porro, modi voluptas tempora?</p>
                    </div>

                    <div className="col-12 col-lg-4 col-xxl-3">
                        <h6>Acerca De</h6>

                        <div className='d-flex flex-column mt-3'>
                            {enlaces.map(enlace => (
                               <Enlace
                                    key={enlace.name}
                                    enlace={enlace}
                               />
                            ))}
                        </div>
                    </div>

                    <div className="col-12 col-lg-4 col-xxl-3">
                        <h6 className='mb-3'>Redes Sociales</h6>

                        <RedesSociales/>
                    </div>
                </div>

                <div className='mt-3 d-flex justify-content-center'>
                    <p className='small'>Todos los derechos reservados {printYear()}</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer