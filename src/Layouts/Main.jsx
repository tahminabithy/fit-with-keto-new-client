import { Outlet } from "react-router-dom";
import Navigation from "../shared/Navigation/Navigation";
import Footer from "../shared/Footer/Footer";
import NavBar from "../shared/Navigation/NavBar";

export default function Main() {
  return (
    <div>
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
}
