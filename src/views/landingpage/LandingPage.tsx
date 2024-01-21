import Services from "../services/Services.tsx";
import HeroSection1 from "../../components/layout/hero/HeroSection1.tsx";
import OnlineShopItems from "../shop/OnlineShopItems.tsx";
import Questions from "../q&a/Q&A.tsx";
import Contact from "../contact/Contact.tsx";
import Footer from "../../components/layout/Footer.tsx";
import Nav from "../../components/nav/Nav.tsx";

const LandingPage = () => {
    return (<section>
        <Nav/>
        <Services/>
        <HeroSection1/>
        <OnlineShopItems/>
        <Questions/>
        <Contact/>
        <Footer/>
    </section>)
}

export default LandingPage;