import Footer from "./Footer"
import Navbar from "./Navbar"

const Layout = ({children}) => {
  return (
    <>
        <Navbar />

        <main className="container py-4">
            {children}
        </main>

        <Footer />
    </>
  )
}

export default Layout