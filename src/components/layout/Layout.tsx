import { Outlet } from "react-router-dom";
import Header from "../header/header/Header";
import Footer from "../footer/footer/Footer";


export default function Layout() {
  return (
    <div>
    <Header/>
    <Outlet/>
    <Footer/>
      
    </div>
  )
}
