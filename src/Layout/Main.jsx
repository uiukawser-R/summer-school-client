import { Outlet } from "react-router-dom";
import Footer from "../shered/Footer";
import Navbar from "../shered/Navbar";

const Main = () => {
    return (
        <div>
            <div><Navbar></Navbar></div>
            <div><Outlet></Outlet></div>
            <Footer></Footer>
        </div>
    );
};

export default Main;