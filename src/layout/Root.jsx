import { Outlet, ScrollRestoration } from "react-router-dom";
import Footer from "../pages/Shared/Footer";
import Header from "../pages/Shared/Header";
import Navbar from "../pages/Shared/Navbar";

const Root = () => {
    return (
        <>
        <div className="max-w-6xl mx-auto font-poppins">
            <Header></Header>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
        <Footer></Footer>
        <ScrollRestoration></ScrollRestoration>
        </>

    );
};

export default Root;