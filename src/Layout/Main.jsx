import { Outlet } from "react-router-dom";
import Footer from "../shered/Footer";
import Navbar from "../shered/Navbar";

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;