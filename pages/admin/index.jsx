import LayoutDashboard from "../../layouts/LayoutDashboard"
import Cards from "../../components/pages/admin/Cards"
import CategoriasCard from "../../components/pages/admin/CategoriasCard"
import ArticulosCard from "../../components/pages/admin/ArticulosCard"

export default function DashboardPage() {
    return (
        <>
            <Cards/>

            <div className="mt-4">
                <div className="row gx-0 gx-lg-4 gy-4 gy-xxl-0">
                    <div className="col-lg-8 col-xl-6 col-xxl-3">
                        <CategoriasCard/>
                    </div>
                    <div className="col-xxl-9">
                        <ArticulosCard/>
                    </div>
                </div>
            </div>
        </>
    )
}

DashboardPage.getLayout = function getLayout(page) {
    return (
        <LayoutDashboard
            page={'Dashboard'}
        >
            {page}
        </LayoutDashboard>
    )
}