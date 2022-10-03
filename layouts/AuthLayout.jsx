import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

const AuthLayout = ({children, page}) => {
    return (
        <>
            <Head>
                <title>{page} - La Mulata de Córdoba</title>
            </Head>

            <div className="min-vh-100 bg-white p-lg-4 p-xl-0">
                <div className='row g-0 gx-lg-4 gx-xl-0'>
                    <div className="mx-auto col-11 col-sm-10 col-lg-6 col-xl-4">
                        <main className='p-xl-5 min-vh-100 d-flex flex-column align-items-center justify-content-center'>
                            <Link
                                href={`/`}
                            >
                                <a className='text-decoration-none fw-light fs-2'><span className='fw-bold'>La Mulata</span> de Córdoba</a>
                            </Link>
                            <div className='mt-3 w-100'>
                                {children}
                            </div>
                        </main>
                    </div>

                    <div className="col-lg-6 col-xl-8">
                        <div className='p-xl-5 min-vh-100 d-none d-lg-flex align-items-center justify-content-center'>
                            <Image
                                src={`/assets/auth.png`}
                                alt='Iniciar Sesión'
                                width={1033}
                                height={712}
                                className={'rounded-4'}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AuthLayout