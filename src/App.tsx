import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import SignUp from "./views/signup/SignUp.tsx";
import SignIn from "./views/signin/SignIn.tsx";
import LandingPage from "./views/landingpage/LandingPage.tsx";
import ClientDashboard from "./views/dashboard/client/ClientDashboard.tsx";
import ManagePersonalDetails from "./views/dashboard/client/sub/ManagePersonalDetails.tsx";
import NotFoundPage from "./views/error/notfound/NotFoundPage.tsx";
import ClientDashboardContent from "./views/dashboard/client/sub/ClientDashboardContent.tsx";
import Booking from "./views/services/client/Booking.tsx";
import PlaceOrder from "./views/shop/PlaceOrder.tsx";
import ManageFeedbacks from "./views/dashboard/client/sub/ManageFeedbacks.tsx";
import ClientsSubscription from "./views/dashboard/client/sub/ClientsSubscription.tsx";
import AdminDashboard from "./views/dashboard/admin/AdminDashboard.tsx";
import AdminDashboardContent from "./views/dashboard/admin/sub/AdminDashboardContent.tsx";
import ManageServices from "./views/dashboard/admin/sub/ManageServices.tsx";
import ManageSubscriptions from "./views/dashboard/admin/sub/ManageSubscriptions.tsx";
import ManageSales from "./views/dashboard/admin/sub/ManageSales.tsx";
import ManageCustomers from "./views/dashboard/admin/sub/ManageCustomers.tsx";

export default function App() {
    // @ts-ignore
    // @ts-ignore
    return (<Router>
            <Routes>
                <Route path="/signin" element={<SignIn/>}/>
                <Route path="/client" element={<ClientDashboard/>}>
                    <Route path="" element={<ClientDashboardContent/>}/>
                    <Route path="manage_personal_details" element={<ManagePersonalDetails/>}/>
                    <Route path={"booking"} element={<Booking/>}/>
                    <Route path={"orders"} element={<PlaceOrder/>}/>
                    <Route path={"feedback"} element={<ManageFeedbacks/>}/>
                    <Route path={"subscription"} element={<ClientsSubscription/>}/>
                </Route>
                <Route path="/admin" element={<AdminDashboard/>}>
                    <Route path="" element={<AdminDashboardContent/>}/>
                    <Route path={"services"} element={<ManageServices/>}/>
                    <Route path={"manage_subscriptions"} element={<ManageSubscriptions/>}/>
                    <Route path={"manage_sales"} element={<ManageSales/>}/>
                    <Route path={"manage_users"} element={<ManageCustomers/>}/>
                </Route>
                <Route path="/signup" element={<SignUp/>}/>
                <Route path="" element={<LandingPage/>}/>
                <Route path="*" element={<NotFoundPage/>}/>
            </Routes>
    </Router>);
}
