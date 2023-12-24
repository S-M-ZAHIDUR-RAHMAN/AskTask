import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Home/Home/Home";
import ErrorPage from "../Pages/ErrorPage";
import Login from "../Login/Login";
import Register from "../Register/Register";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../Layout/Dashboard";
import DashboardHome from "../Home/DashboardHome/DashboardHome";
import MyProfile from "../Home/DashboardHome/MyProfile";
import CreateTask from "../Home/DashboardHome/CreateTask";
import Details from "../Home/DashboardHome/Details";
import Update from "../Home/DashboardHome/Update";
// import KanbanBoard from "../Home/DashboardHome/KanbanBoard";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/register",
                element: <Register></Register>
            }
        ]
    },
    {
        path: "dashboard",
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
        children: [
            {
                path: 'dashboard',
                element: <PrivateRoute><DashboardHome></DashboardHome></PrivateRoute>
            },
            {
                path: 'myProfile',
                element: <PrivateRoute><MyProfile></MyProfile></PrivateRoute>
            },
            {
                path: 'dashboard/createTask',
                element: <PrivateRoute><CreateTask></CreateTask></PrivateRoute>,
                // loader: () => fetch('http://localhost:5000/tasks')
            },
            {
                path: "dashboard/update/:id",
                element: <PrivateRoute><Update></Update></PrivateRoute>,
                
            },
            {
                path: "dashboard/details/:id",
                element: <PrivateRoute><Details></Details></PrivateRoute>,
            
            },
        ]
    }
]);