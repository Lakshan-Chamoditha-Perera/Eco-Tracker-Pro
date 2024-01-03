import Nav from "./views/nav/Nav";
import Footer from "./components/layout/Footer";
import Contact from "./views/contact/Contact";
import SignIn from "./views/signin/SignIn";
import Questions from "./views/q&a/Q&A";
import SignUp from "./views/signup/SignUp";
import Services from "./views/services/Services";
import OnlineShopItems from "./views/shop/OnlineShopItems";
import HeroSection1 from "./components/layout/hero/HeroSection1";
import NotFoundPage from "./views/error/notfound/NotFoundPage";

export default function App() {


    return (<>
        <Nav/>
        <NotFoundPage/>
        <SignUp/>
        <SignIn/>
        <Services/>
        <HeroSection1/>
        <OnlineShopItems/>
        <Questions/>
        <Contact/>
        <Footer/>
    </>)
}
