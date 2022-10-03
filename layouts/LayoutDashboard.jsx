import { DashboardProvider } from '../context/DashboardProvider'
import useAuth from '../hooks/useAuth'
import Redirect from '../components/utilities/Redirect'
import Head from 'next/head'
import Notification from '../components/utilities/Notification'
import Header from '../components/layouts/layout-dashboard/header'
import Sidebar from '../components/layouts/layout-dashboard/sidebar'

const LayoutDashboard = ({children, page}) => {
    const { auth } = useAuth()

    return !auth ? <Redirect url={`/auth`} /> : (
        <DashboardProvider>
            <Head>
                <title>Admin - {page}</title>
                <link rel="shortcut icon" href="/favicon-dashboard.ico" type="image/x-icon" />
            </Head>
            
            <div className='p-2 py-3 p-md-4 p-xl-5 bg-white'>
                <div className="row g-0 gx-lg-4 gx-xxl-5">
                    <div className="col-lg-4 col-xxl-3">
                        <Sidebar/>
                    </div>

                    <div className='col-lg-8 col-xxl-9'>
                        <Header/>

                        <div className='mt-4'>
                            <h2 className='fw-semibold mb-4'>{page}</h2>
                            {children}
                        </div>
                    </div>
                </div>
            </div>

            <Notification/>
        </DashboardProvider>
    )
}

export default LayoutDashboard