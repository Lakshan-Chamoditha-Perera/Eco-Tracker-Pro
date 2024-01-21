import AsideBar from "../../../components/layout/aside/AsideBar.tsx";
import {PathProperties} from "../../../util/PathProperties.ts";
import {Outlet} from "react-router-dom";

const AdminDashboard = () => {

    const list: PathProperties[] = [{
        name: 'Dashboard', path: '/admin'
    }, {
        name: 'Services', path: '/admin/services'
    }, {
        name: 'Sales', path: '/admin/manage_sales'
    }, {
        name: 'Feedbacks', path: '/admin/manage_feedbacks'
    }, {
        name: 'Subscriptions', path: '/admin/manage_subscriptions'
    }, {
        name: 'Users', path: '/admin/manage_users'
    }, {
        name: 'Wastage Reports', path: '/admin/wastage_reports'
    }]

    return (<section>
        <section className={'flex-row flex  bg-[#FBFBFB] min-h-[900px]'}>
            {/*left*/}
            <AsideBar list={list}/>

            {/*right*/}
            <div className={'flex flex-col  w-[80%] max-h-fit  mx-[50px] overflow-y-scroll '}>
                <Outlet/>
            </div>

        </section>
    </section>)
}

export default AdminDashboard;