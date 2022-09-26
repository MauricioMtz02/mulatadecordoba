import Image from 'next/image'

const Enlace = ({enlace}) => {
    const {name, href, icon} = enlace
    return (
        <a 
            className='text-decoration-none text-dark mb-3 d-flex align-items-center flex-wrap'
            href={href}
            rel="noreferrer"
            target="_blank"
        >
            <Image src={`/assets/${icon}`} width={18} height={18} alt={'icon'} /> <p className='mb-0 ms-2 text-decoration-underline'>{name}</p>
        </a>
    )
}

export default Enlace