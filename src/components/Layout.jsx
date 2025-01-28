import { Outlet } from "react-router-dom"
import FooterComponent from "./FooterComponent"
import HeaderComponent from "./HeaderComponent"

const Layout = () => {

  return (
    <div  className='w-[100%] relative'>
        <HeaderComponent/>
            <Outlet/>
        <FooterComponent/>
    </div>
  )
}

export default Layout