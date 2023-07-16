import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Root() {
    return (
        <section className="bg-slate-800 w-full ">
            <Navbar />
            
            <Outlet />
            <Footer/>           
        </section>
    );
}