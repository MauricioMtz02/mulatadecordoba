import Image from 'next/image'
import Inputs from './Inputs'

const Formulario = () => {
    return (
        <div className="shadow-sm bg-white rounded-3 p-4 py-5 p-lg-5">
            <h3 className="fw-semibold text-dark mb-4">Contactame</h3>
            
            <div className="row gy-4">
                <div className="order-last order-md-first col-md-6">
                    <Image
                        src={'/assets/contacto.jpg'}
                        width={1000}
                        height={667}
                        alt={'imagen contacto'}
                        className='mw-100 rounded-3'
                    />
                </div>

                <div className="col-md-6">
                    <Inputs/>
                </div>
            </div>
        </div>
    )
}

export default Formulario