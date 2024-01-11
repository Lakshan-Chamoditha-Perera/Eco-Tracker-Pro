import Footer from "../../../components/layout/Footer";
import AsideBar from "../../../components/layout/aside/AsideBar";
import {PathProperties} from "../../../util/PathProperties.ts";
import {Outlet} from "react-router-dom";

const list: PathProperties[] = [{
    name: 'Dashboard', path: '/client'
}, {
    name: 'Profile', path: '/client/manage_personal_details'
}, {
    name: 'Subscription', path: '/client/subscription'
}, {
    name: 'Booking', path: '/client/booking'
}, {
    name: 'Orders', path: '/client/orders'
}, {
    name: 'Feedback', path: '/client/feedback'
}];

const ClientDashboard = () => {

    return (<section>
        <section className={'flex-row flex bg-[#FBFBFB]  min-h-[900px]'}>
            {/*left*/}
            <AsideBar list={list}/>
            {/*right*/}
            <div className={'flex flex-col  w-[80%] max-h-fit  mx-[50px] overflow-y-scroll '}>
                <Outlet/>
            </div>
        </section>
        <Footer/>
    </section>)
}


export default ClientDashboard;