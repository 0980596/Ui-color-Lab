import Design from "../components/Design";
import Header from "../components/Header";
import Option from "../components/Option";
import Highlight from "../components/Highlights";

import style from "../styles/home.module.css";
import Plans from "../components/Plans";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Faq from "../components/Faq";

export default function Home() {
    return (
        <>
            <Header />
            <Hero />
            <Option />
            <Design />
            <Highlight />
            <Plans />
            <Faq />
            <Footer />
        </>
    )
}