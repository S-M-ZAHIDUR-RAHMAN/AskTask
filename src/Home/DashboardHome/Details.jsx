import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import useTask from "../../Hooks/useTask";


const Details = () => {
    const [tasks] = useTask([]);
    const { id } = useParams();
    console.log(tasks, id);

    const [details, setDetails] = useState();

    useEffect(() => {
        const findDetails = tasks?.find(task => task?._id === id);
        setDetails(findDetails);
    }, [id, tasks])





    return (
        <div className="flex flex-col pl-5 pr-5 pb-5 border border-yellow-400 text-white">
            <div className="mt-14 px-0 lg:px-0">
                <div className="flex flex-col gap-5 lg:px-10 md:px-4 px-0">
                <div className="flex flex-row justify-center mb-5 text-4xl text-white font-bold hero-overlay py-4">
                        {details?.title}
                    </div>
                    <div className="gap-1">
                        <p>Status: {details?.status}</p>
                        <p>Deadline: {details?.deadline}</p>
                        <p>Priority: {details?.priority}</p>
                    </div>
                    <p>Description: {details?.description}</p>
                </div>
                <div className="flex flex-row justify-center gap-5">
                    <Link to={`/dashboard/dashboard`}>
                        <div className="flex justify-center mt-5">
                            <button className="btn btn-accent bg-yellow-500">Go Back to <br />DASHBOARD</button>
                        </div>
                    </Link>
                </div>

            </div>
        </div>
    );
};

export default Details;