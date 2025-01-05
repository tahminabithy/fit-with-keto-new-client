import { Outlet } from "react-router-dom";
import Navigation from "../shared/Navigation/Navigation";
import Footer from "../shared/Footer/Footer";

export default function Main() {
  return (
    <div>
        <Navigation/>
        <Outlet/>
        <Footer/>
    </div>
  )
}
