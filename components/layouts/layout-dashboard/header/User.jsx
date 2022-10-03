import Image from 'next/image'
import useAuth from '../../../../hooks/useAuth'

const User = () => {
    const { user } = useAuth()

    return (
        <div className=''>
            <div className='d-flex align-items-center' role="button">
                <span className='text-dark fw-normal me-2 d-none d-lg-inline'>{user.username}</span>

                <Image
                    src={`${process.env.URL_AVATAR}&name=${user.username}`}
                    width={44}
                    height={44}
                    alt={'user'}
                    className={'rounded-circle shadow-sm'}    
                />
            </div>

            
        </div>
        
    )
}

export default User