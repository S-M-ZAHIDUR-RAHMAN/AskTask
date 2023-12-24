import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import useTask from "../../Hooks/useTask";
import MyDetails from "./MyDetails";

const MyProfile = () => {
    const [tasks] = useTask([]);
    const { user } = useContext(AuthContext);
    const email = user?.email;
    const [profile, setProfile] = useState();

    useEffect(() => {
        const findProfile = tasks?.filter(task => task?.email === email);
        setProfile(findProfile);
    }, [email, tasks])
    console.log(profile);
    return (
        <div className="text-white">
            <div className="flex flex-col justify-center items-center">
                <img className="rounded-full" src={user?.photoURL} alt="" />
                <div className="text-yellow-500 underline">{user?.displayName}</div>
            </div>
            <div className="text-white mt-2 grid lg:grid-cols-5 md:grid-cols-3 grid-cols-1 justify-center">
                {
                    profile?.map((task) => (
                        <MyDetails key={task._id} task={task}></MyDetails>
                    ))
                }
            </div>
        </div>
    );
};

export default MyProfile;