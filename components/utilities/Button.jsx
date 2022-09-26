import Link from 'next/link'

const Button = ({config}) => {
    const {name, href, type} = config

    return (
        <Link
            href={href}
        >
            <a
                className={`px-4 btn btn-${type}`}
            >
                {name}
            </a>
        </Link>
    )
}

export default Button