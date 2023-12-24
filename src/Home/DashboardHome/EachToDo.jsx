/* eslint-disable react/prop-types */

import swal from "sweetalert";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import useTask from "../../Hooks/useTask";
import { Link } from "react-router-dom";
import { FaArrowAltCircleRight } from "react-icons/fa";

const EachToDo = ({ task }) => {
    const [, refetch] = useTask();
    const axiosPublic = useAxiosPublic();

    const handleDelete = id => {
        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    axiosPublic.delete(`/tasks/${id}`)
                        .then(res => {
                            if (res.data.deletedCount > 0) {
                                refetch();
                                swal("Your task has been deleted!", {
                                    icon: "success",
                                });
                            }
                        })
                }
            })
    };
    const handleMove = id => {
        axiosPublic.patch(`/tasks/${id}/ongoing`)
            .then(res => {
                // console.log(res.data);
                if (res.data.modifiedCount > 0) {
                    refetch();
                    swal("Good job!", `Its ongoing now`, "success");

                }
            })
    }
    return (

        <div className=" p-2 mb-2 min-h-[90px] mx-2 bg-black cursor-pointer flex flex-col justify-between border border-yellow-500 hover:rounded-xl">

            <div className="flex flex-col justify-center p-1">
                <h2 className="text-center text-lg uppercase text-white">{task.title}</h2>
                <div className="flex flex-col gap-1">
                    <p className="text-red-500 text-center"><small>Deadline: {task?.deadline}</small></p>
                    <button onClick={() => handleMove(task?._id)} className="btn btn-xs"><small className="flex flex-row items-center justify-center gap-1"><span className="uppercase">Move to Ongoing</span> <span><FaArrowAltCircleRight /></span></small></button>
                    <Link className="btn btn-xs" to={`details/${task?._id}`}><button >Details</button></Link>
                    <Link className="btn btn-xs" to={`update/${task?._id}`}><button>Update</button></Link>
                    <button onClick={() => handleDelete(task?._id)} className="btn btn-xs">Delete</button>
                </div>

            </div>

        </div>

    );
};

export default EachToDo;