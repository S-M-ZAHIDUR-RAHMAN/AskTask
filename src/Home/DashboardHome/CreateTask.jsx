import { useForm } from "react-hook-form";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { useContext, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const CreateTask = () => {
    const axiosPublic = useAxiosPublic();
    const [startDate, setStartDate] = useState(new Date());
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm();
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
   

    const onSubmit = data => {
        const taskInfo = {
            email: user?.email,
            title: data.title,
            description: data.description,
            deadline: startDate,
            priority: data.priority,
            status: data.status
        }
        axiosPublic.post('/tasks', taskInfo)
            .then(res => {
                if (res.data.insertedId) {
                    console.log('Task added to the database');
                    reset();
                    swal("Good job!", "Task created!", "success");

                    navigate('/dashboard')
                }
            })

    };
    return (
        <div className="pt-5 lg:pt-10 md:pt-10 flex flex-col text-white  items-center">
            <div className="flex flex-row justify-center mb-5 text-4xl text-white font-bold hero-overlay py-4">
                <h2>Create a Task</h2>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className="card-body md:w-1/2">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-white">Title</span>
                    </label>
                    <input type="text" {...register("title", { required: true })} name="title" placeholder="Title" className="input input-bordered text-black" />
                    {errors.title && <span className="text-red-600">Title is required</span>}
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-white">Description</span>
                    </label>
                    <input type="text" {...register("description", { required: true })} name="description" placeholder="Description" className="input input-bordered text-black" />
                    {errors.description && <span className="text-red-600">Description is required</span>}
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-white">Priority</span>
                    </label>
                    <input type="text" {...register("priority", { required: true })} name="priority" placeholder="email" className="input input-bordered text-black" />
                    {errors.priority && <span className="text-red-600">Priority is required</span>}
                    <h2>type: low, moderate or high</h2>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-white">Status</span>
                    </label>
                    <input type="text" {...register("status", {
                        required: true
                    })} name="status" placeholder="status"readOnly defaultValue="todo" className="input input-bordered text-black" />
                </div>
                <div className="mb-10">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-white">Deadline</span>
                        </label>
                        <div className="text-black border border-black">
                            <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
                        </div>
                    </div>
                </div>
                <div className="form-control mt-6">
                    <input className="btn btn-accent bg-yellow-500" type="submit" value="Create Task" />
                </div>
            </form>
        </div>
    );
};

export default CreateTask;