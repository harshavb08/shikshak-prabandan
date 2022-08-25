import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Notifications from "./pages/Notifications";
import About from "./pages/About";
import Demo from "./pages/Demo";
import Support from "./pages/Support";
import Admin from "./pages/Admin";

import "./App.css";
import Footer from "./components/Footer";
import Dashboard from "./pages/User/Dashboard";
import UserSupport from "./pages/User/UserSupport";
import Changepassword from "./pages/User/Changepassword";
import Leaves from "./pages/User/Leaves";
import Awards from "./pages/User/Awards";
import Addleaves from "./pages/User/Addleaves";
import ADashboard from "./pages/Admin/ADashboard";
import Adminsupport from "./pages/Admin/Adminsupport";
import Adminchangepassword from "./pages/Admin/Adminchangepassword";
import Addcertificates from "./pages/User/Addcertificates";
import ANotification from "./pages/Admin/ANotification";
import ViewCertificates from "./pages/User/ViewCertificates";
import AddTrainings from "./pages/User/AddTrainings";
import ViewTrainings from "./pages/User/ViewTrainings";
import ViewTeacherP from "./pages/Admin/ViewTeacherP";
import ASchooladd from "./pages/Admin/ASchooladd";
import ATranferteacher from "./pages/Admin/ATranferteacher";
import APunishment from "./pages/Admin/APunishment";
import AviewSchool from "./pages/Admin/AviewSchool";
import AviewNotification from "./pages/Admin/AviewNotification";
import ATransferHistory from "./pages/Admin/ATransferHistory";
import APunishmentHistory from "./pages/Admin/APunishmentHistory";
import ATeacherview from "./pages/Admin/ATeacherview";
import ATeacheradd from "./pages/Admin/ATeacheradd";
import Apromote from "./pages/Admin/Apromote";
import Apromotionhistory from "./pages/Admin/Apromotionhistory";
import AAward from "./pages/Admin/AAward";
import AAwardhistory from "./pages/Admin/AAwardhistory";
import ASchoolPview from "./pages/Admin/ASchoolPview";
import Usermanual from "./pages/User/Usermanual";
import Circulars from "./pages/User/Circulars";
import ActsAndRules from "./pages/User/ActsAndRules";
import Gos from "./pages/User/Gos";
import ForgotPass from "./pages/ForgotPass";
import Myfiles from "./pages/User/Myfiles";
import AGenerateSB from "./pages/Admin/AGenerateSB";
import Generate from "./pages/User/Generate";
import Aretirement from "./pages/Admin/Aretirement";
import Aretirementhistory from "./pages/Admin/Aretirementhistory";
import Main_Home from "./components/Main_Home";
import OtpPage from "./components/Otp";

const App = () => {
    return (
        <div className="page_container">
            <div className="content_wrap">
                <Switch>
                    <Route exact path="/">
                        {<Main_Home />}
                    </Route>
                    <Route exact path="/home">
                        {<Home />}
                    </Route>
                    <Route path="/adminlogin">{<Admin />}</Route>
                    <Route path="/notifications">{<Notifications />}</Route>
                    <Route path="/about">{<About />}</Route>
                    <Route path="/demo">{<Demo />}</Route>
                    <Route path="/support">{<Support />}</Route>
                    <Route path="/dashboard">{<Dashboard />}</Route>
                    <Route path="/usersupport">{<UserSupport />}</Route>
                    <Route path="/changepassword">{<Changepassword />}</Route>
                    <Route path="/leaves">{<Leaves />}</Route>
                    <Route path="/addleaves">{<Addleaves />}</Route>
                    <Route path="/awards">{<Awards />}</Route>
                    <Route path="/generate-sb">{<Generate />}</Route>
                    <Route path="/admin-generate-sb">{<AGenerateSB />}</Route>
                    <Route path="/addcertificates">{<Addcertificates />}</Route>
                    <Route path="/viewcertificates">
                        {<ViewCertificates />}
                    </Route>
                    <Route path="/addtrainings">{<AddTrainings />}</Route>
                    <Route path="/viewtrainings">{<ViewTrainings />}</Route>
                    <Route path="/admindashboard">{<ADashboard />}</Route>
                    <Route path="/admin-notification">
                        {<ANotification />}
                    </Route>
                    <Route path="/adminsupport">{<Adminsupport />}</Route>
                    <Route path="/adminchangepassword">
                        {<Adminchangepassword />}
                    </Route>
                    <Route path="/view-teacherprofile">
                        {<ViewTeacherP />}
                    </Route>
                    <Route path="/admin-retirement-history">
                        {<Aretirementhistory />}
                    </Route>
                    <Route path="/admin-retire-teacher">
                        {<Aretirement />}
                    </Route>
                    <Route path="/transfer-teacher">
                        {<ATranferteacher />}
                    </Route>
                    <Route path="/admin-transfer-history">
                        {<ATransferHistory />}
                    </Route>
                    <Route path="/promote-teacher">{<Apromote />}</Route>
                    <Route path="/admin-promotion-history">
                        {<Apromotionhistory />}
                    </Route>
                    <Route path="/add-school">{<ASchooladd />}</Route>
                    <Route path="/punish-teacher">{<APunishment />}</Route>
                    <Route path="/admin-view-school">{<AviewSchool />}</Route>
                    <Route path="/admin-view-notification">
                        {<AviewNotification />}
                    </Route>
                    <Route path="/admin-punishment-history">
                        {<APunishmentHistory />}
                    </Route>
                    <Route path="/admin-teacher">{<ATeacherview />}</Route>
                    <Route path="/admin-add-teacher">{<ATeacheradd />}</Route>
                    <Route path="/admin-award-teacher">{<AAward />}</Route>
                    <Route path="/admin-award-history">
                        {<AAwardhistory />}
                    </Route>
                    <Route path="/school-view-profile">
                        {<ASchoolPview />}
                    </Route>
                    <Route path="/downloads-gos">{<Gos />}</Route>
                    <Route path="/downloads-acts-and-rules">
                        {<ActsAndRules />}
                    </Route>
                    <Route path="/downloads-circulars">{<Circulars />}</Route>
                    <Route path="/downloads-usermanual">{<Usermanual />}</Route>
                    <Route path="/forgot-password">{<ForgotPass />}</Route>
                    <Route path="/my-files">{<Myfiles />}</Route>
                    <Route path="/otp">{<OtpPage />}</Route>
                </Switch>
            </div>
            <Footer />
        </div>
    );
};

export default App;