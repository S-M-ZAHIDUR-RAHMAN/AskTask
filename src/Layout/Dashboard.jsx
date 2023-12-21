import { FaAdn, FaBoltLightning, FaBullhorn, FaEnvelope, FaFaceSmile, FaHouse, FaList, FaPeopleGroup } from "react-icons/fa6";
import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
    return (
        <div className="flex-row md:flex-row lg:flex">
            {/* dashboard sidebar */}
            <div className="min-w-screen lg:w-64 md:min-h-screen bg-slate-500">
                <ul className="menu md:p-4">
                    {
                        <>
                            <li>
                                <NavLink to="dashboard">
                                <FaList></FaList>
                                    AskTask-Dashboard
                                </NavLink>
                            </li>

                        </>
                    }
                    {/* Shared nav links */}
                    <div className="divider"></div>
                    <li>
                        <NavLink to="/">
                            <FaHouse></FaHouse>
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="myProfile">
                            <FaFaceSmile></FaFaceSmile>
                            My Profile
                        </NavLink>
                    </li>
                </ul>
            </div>
            {/* dashboard content */}
            <div className="flex-1 p-8">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;