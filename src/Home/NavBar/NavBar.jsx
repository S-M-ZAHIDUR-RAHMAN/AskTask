import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import swal from "sweetalert";
import { Link, NavLink } from "react-router-dom";



const NavBar = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(swal("User Logged out successfully!"))
            .catch()
    }

    const navLinks = <div className="lg:flex text-white">
        <li><NavLink to="/">Home</NavLink></li>
        {
            user ? <>
                <li><NavLink to="dashboard">AskTask-Dashboard</NavLink></li>
              
            </>
                : <>
                    <li><NavLink to="/register">Register</NavLink></li>
                    <li><NavLink to="/login">Login</NavLink></li>
                </>
        }
    </div>


    return (
        <div>
            <div className="navbar">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 bg-blue-400 rounded-sm" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navLinks}
                        </ul>
                    </div>
                    <div className="normal-case text-white py-0 px-2 text-lg font-extrabold flex flex-col items-center lg:flex lg:flex-row lg:items-center lg:gap-2">

                        <div className="flex flex-row justify-center items-center gap-2">

                            <svg className="w-4 bg-white h-4 rounded-lg" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 50 50">
                                <path d="M36.009,5.074H13.991C9.025,5.074,5,9.099,5,14.064V36c0,4.965,4.025,8.991,8.991,8.991h22.019	C40.975,44.99,45,40.965,45,36V14.064C45,9.099,40.975,5.074,36.009,5.074z M16.171,36.755c-0.372,0.636-1.041,0.989-1.728,0.989	c-0.343,0-0.691-0.088-1.009-0.274c-0.953-0.559-1.273-1.784-0.714-2.736l0.291-0.497c0.515-0.162,1.057-0.25,1.614-0.234l0.005,0	c1.023,0.03,1.879,0.493,2.464,1.176L16.171,36.755z M27.413,32H12c-1.104,0-2-0.896-2-2s0.896-2,2-2h4.665l5.866-10.01	l-1.811-3.091c-0.559-0.953-0.239-2.178,0.714-2.737c0.953-0.558,2.178-0.239,2.737,0.714l0.678,1.157l0.678-1.157	c0.558-0.953,1.783-1.272,2.737-0.714c0.953,0.559,1.273,1.784,0.714,2.737L21.301,28h4.18c0.625,0.416,1.162,0.966,1.549,1.64	l0.003,0.004C27.473,30.409,27.57,31.237,27.413,32z M38,32h-2.623l1.602,2.733c0.559,0.952,0.239,2.178-0.714,2.736	c-0.318,0.187-0.666,0.274-1.009,0.274c-0.687,0-1.355-0.354-1.728-0.989l-6.151-10.497c-0.834-1.549-0.803-3.427,0.109-4.943	l0.826-1.373L33.033,28H38c1.104,0,2,0.896,2,2S39.104,32,38,32z"></path>
                            </svg>

                            <p className="text-white">AskTask</p>
                        </div>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navLinks}
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user ? <div className="flex flex-col items-center lg:flex-row lg:items-center lg:gap-2 md:flex-row md:gap-2">
                            <a onClick={handleLogOut} className="btn accent bg-slate-200">Log out</a>
                        </div>
                            : <Link to="/login" className="btn accent bg-slate-200">Log in</Link>
                    }
                </div>
            </div>
             <hr className="border border-yellow-400 w-[100%]" />
        </div>
    );
};

export default NavBar;