import React, { useEffect } from "react";
import { ToastContainer } from "react-toastify";
import { useChannelStore } from "./store/useChannelStore";
import Home from "./pages/Home";
import Stream from "./pages/Stream";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./compoents/navbar/NavBar";
import Footer from "./compoents/footer/Footer";
import ScrollToTop from "./lib/ScrollToTop";
import PageNotFound from "./pages/PageNotFound";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";

const AppLayout = () => {
    return (
        <>
            <NavBar />
             <Routes>
                   <Route path="/" element={<Home/>} />
                   <Route path="/about-us" element={<AboutUs/>} />
                   <Route path="/contact-us" element={<ContactUs/>} />
                   <Route path="/stream/:id" element={<Stream/>} />
                   <Route path="/*" element={<PageNotFound/>} />
             </Routes>
             <Footer/>
        </>
    )
}

const App = () => {
    const { getChannelData } = useChannelStore();

    useEffect(() => {
        getChannelData();
    }, []);

    return (
        <BrowserRouter>
            <ScrollToTop />
            <AppLayout />
        </BrowserRouter>
    );
};

export default App;
