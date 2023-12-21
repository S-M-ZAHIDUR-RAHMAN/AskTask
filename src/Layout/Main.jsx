import { Outlet, useLocation } from "react-router-dom";
import NavBar from "../Home/NavBar/NavBar";
import Footer from "../Home/Footer/Footer";

const Main = () => {
    const location = useLocation();
    const noHeaderFooter = location.pathname.includes('login') || location.pathname.includes('register')
    return (
        <div className="bg-black text-white">
            { noHeaderFooter || <NavBar></NavBar>}
            <Outlet></Outlet>
            { noHeaderFooter || <Footer></Footer>}
        </div>
    );
};

export default Main;