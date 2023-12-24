import { useContext, useEffect, useState } from "react";
import useTask from "../../Hooks/useTask";
import { AuthContext } from "../../Providers/AuthProvider";
import EachOngoing from "./EachOngoing";

const Ongoing = () => {
    const [tasks] = useTask([]);
    const {user} = useContext(AuthContext);
    const [myTasks, setMyTasks] = useState([]);
    const [myToDos, setMyToDos] = useState([]);
    const email = user?.email;
   
    const status = "ongoing";
    useEffect(() => {
        const findMyTasks = tasks?.filter(task => task?.email === email);
        setMyTasks(findMyTasks || []);
    }, [email, tasks])
    useEffect(() => {
        const findMyToDos = myTasks?.filter(todo => todo?.status.toLowerCase() === status);
        setMyToDos(findMyToDos || []);
    }, [myTasks, status])
    return (
        <div className="w-[200px] h-[475px] flex flex-col bg-black border border-yellow-500 overflow-y-scroll">
            <div className="bg-yellow-400 sticky top-0 z-10">
            <th className="text-center w-[200px]">ONGOING</th>
            </div>
            <div className="mt-8">
                {myToDos.map((task, index) => (
                    <EachOngoing key={index} task={task} index={index}></EachOngoing>
                ))}
            </div>
        </div>
    );
};

export default Ongoing;