import Image from 'next/image'
import Valores from '../components/pages/about/Valores'
import Layout from "../layouts/Layout"

export default function AboutPage() {
    return (
        <>
            <section className="row justify-content-between align-items-center">
                <div className="col-lg-6 col-xl-5 text-dark">
                    <h2 className="fw-semibold">¿Qué es la mulata de Córdoba?</h2>
                    <p className="mt-4" style={{
                        lineHeight: '33px'
                    }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus quidem cum dolorem. Ipsum quidem debitis perferendis labore ex ratione non! Obcaecati reiciendis adipisci in, quaerat, quidem illum labore debitis temporibus voluptas perferendis cupiditate doloremque eaque ratione atque? Similique, necessitatibus facere!</p>
                </div>

                <div className="col-lg-6 col-xl-5">
                    <Image
                        src={'/assets/acerca.jpg'}
                        width={1000}
                        height={667}
                        alt='acerca de'
                        className='mw-100 rounded-3'
                    />
                </div>
            </section>

            <section className="mt-5 col-12 col-xl-10 mx-auto">
                <h3 className='text-center text-dark mb-4'>Valores</h3>

                <Valores/>
            </section>
        </>
    )
}

AboutPage.getLayout = function getLayout(page) {
    return (
        <Layout
            page={'Acerca De'}
        >
            {page}
        </Layout>
    )
}