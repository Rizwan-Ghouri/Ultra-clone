import { Outlet } from "react-router"
import Footer from "../Footer/Footer"
import Header from "../Header/Header"

const AppLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

export default AppLayout
