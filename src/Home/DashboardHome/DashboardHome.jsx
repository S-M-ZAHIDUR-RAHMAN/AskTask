import CreateTask from "./CreateTask";
import Done from "./Done";
import Ongoing from "./Ongoing";
import ToDo from "./ToDo";

const DashboardHome = () => {
    return (
        <div className="flex flex-col md:flex-row">
            <CreateTask></CreateTask>
            <ToDo></ToDo>
            <Ongoing></Ongoing>
            <Done></Done>
        </div>
    );
};

export default DashboardHome;