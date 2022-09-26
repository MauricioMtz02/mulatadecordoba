import Image from "next/image"

const RedSocial = ({redSocial}) => {
    const { icon, href } = redSocial

    return (
        <a
            href={href}
            rel="noreferrer"
            target="_blank"
            className="text-decoration-none text-info fs-5 mx-3 mx-lg-2"
        >
            <Image src={`/assets/${icon}`} width={22} height={22} alt={'icon'} />
        </a>
    )
}

export default RedSocial