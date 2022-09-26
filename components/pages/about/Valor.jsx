import Image from 'next/image'
const Valor = ({valor}) => {
    const { name, desc, icon } = valor

    return (
        <div className="col-sm-11 col-md-10 col-lg-6 col-xl-4">
            <div className="bg-white rounded-3 shadow-sm p-4 py-5 p-lg-5">
                <div className='d-flex justify-content-center'>
                    <Image
                        src={`/assets/${icon}`}
                        width={55}
                        height={55}
                        alt={`icon ${name}`}
                    />
                </div>

                <div className="d-flex flex-column align-items-center justify-content-center text-dark text-center mt-3">
                    <h5>{name}</h5>
                    <p className='mb-0 mt-2'>{desc}</p>
                </div>
            </div>
        </div>
    )
}

export default Valor