import Formulario from "../components/pages/contact/Formulario"
import RedesSociales from "../components/RedesSociales"
import Layout from "../layouts/Layout"

export default function ContactoPage() {
    return (
        <>
            <div className="row gy-4">
                <div className="col-lg-8 col-xl-9">
                    <Formulario/>
                </div>

                <div className="col-lg-4 col-xl-3">
                    <div className="bg-white rounded-3 p-4 py-5 p-lg-5 shadow-sm">
                        <h5 className="fw-semibold mb-4">Medios de Contacto</h5>

                        <RedesSociales/>
                    </div>
                </div>
            </div>
        </>
    )
}

ContactoPage.getLayout = function getLayout(page) {
    return (
        <Layout
            page={'Contacto'}
        >
            {page}
        </Layout>
    )
}