import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from "./components/pages/Home";
import AdminDashboard from "./components/pages/AdminDashboard";
import Employee from "./components/pages/Employee";
import Login from "./components/pages/Login";
import Projects from "./components/pages/Projects";
import Clients from "./components/pages/Clients";
import ContactUs from "./components/pages/ContactUs";
import AboutUs from "./components/pages/Aboutus";
import ClientsProfile from "./components/pages/ClientsProfile";
import Leaves from "./components/pages/Leaves";
import Attendance from "./components/pages/Attendance";
import EmployeeProfile from "./components/pages/EmployeeProfile";
import EmployeeDashboard from "./components/pages/EmployeeDashboard";
import AttendaceEmp from "./components/pages/AttendaceEmp";
import { useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
import { loadUser } from "./components/store/actions/auth-actions";

function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        if (localStorage.getItem("jwttoken")) {
            dispatch(loadUser());
        }
    }, [dispatch]);

    const { user } = useSelector((state) => state.auth);
    // console.log(user);
    // console.log(isAuth);
    let useremail = '';
    let adminrole = false;
    const dashboardrender = () => {
        // console.log("dashb r ", user);
        if (user) {
            // console.log("in if");
            // console.log(user.email);
            useremail = String(user.email)
            adminrole = useremail.includes("@manager")
            if (user.email.includes("@employeewo.com")) return <EmployeeDashboard user={user} />;
            else if (user.email.includes("@managerwo.com")) {
                // console.log("in manager");
                return <AdminDashboard user={user} />;
            } else {
                return <div> Some error </div>;
            }
        } else return rolefail;
    };

    const rolefail = <div> You need to login or may be you aren't Allowed. </div>;

    return (
        <div className='App'>
            <Router>
                <Routes>
                    <Route index element={<Home />} />
                    <Route path='/dashboard' element={dashboardrender()} />
                    <Route path='/employee' element={user ? <Employee user={user} /> : rolefail} />
                    <Route
                        path='/login'
                        element={
                            localStorage.getItem("jwttoken") === null ? <Login /> : <Navigate to='/dashboard' />
                        }
                    />
                    <Route path='/projects' element={user ? <Projects user={user} /> : rolefail} />
                    <Route path='/clients' element={user ? <Clients />: rolefail} />
                    <Route path='/clientprofile' element={user ? <ClientsProfile /> : rolefail} />
                    <Route path='/contactus' element={<ContactUs />} />
                    <Route path='/aboutus' element={<AboutUs />} />
                    <Route path='/leaves' element={user ? <Leaves /> : rolefail} />
                    <Route path='/attendance' element={ adminrole ? <Attendance /> : <AttendaceEmp/>} />
                    <Route path='/employeeprofile' element={user ? <EmployeeProfile /> : rolefail} />
                </Routes>
            </Router>
        </div>
    );
}
export default App;
