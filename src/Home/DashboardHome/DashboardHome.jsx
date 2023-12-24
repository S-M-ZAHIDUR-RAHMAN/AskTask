
import { Link } from "react-router-dom";
import Done from "./Done";
// import KanbanBoard from "./KanbanBoard";
import Ongoing from "./Ongoing";
// import Task from "./Task";
import ToDo from "./ToDo";


const DashboardHome = () => {
    return (
        <div className="flex flex-col md:flex-row gap-2 ">
           
           <Link to="createTask"><button className="btn btn-accent bg-yellow-500">Create Task</button></Link>
            <ToDo></ToDo>
            <Ongoing></Ongoing>
            <Done></Done>
            
        </div>
    );
};

export default DashboardHome;