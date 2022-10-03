import { useEffect } from 'react'
import { useRouter } from 'next/router'

const Redirect = ({url}) => {
    const router = useRouter()

    useEffect(() => {
        router.push(url)
    }, [router, url])

    return (
        <div>Redirect</div>
    )
}

export default Redirect