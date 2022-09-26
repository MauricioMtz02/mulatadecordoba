import Head from "next/head"
import Footer from "../components/layouts/layout/footer"
import Nav from "../components/layouts/layout/nav"
import { BlogProvider } from "../context/BlogProvider"

const Layout = ({children, page}) => {
    return (
        <BlogProvider>
            <Head>
                <title>La Mulata de Córdoba - {page}</title>
                <meta charSet="UTF-8"/>
            </Head>
            
            <header>
                <Nav/>
            </header>

            <main className="bg-light">
                <div className="col-11 col-xxl-10 mx-auto pt-3 pt-lg-5 pb-5">
                    {children}
                </div>
            </main>

            <Footer/>
        </BlogProvider>
    )
}

export default Layout