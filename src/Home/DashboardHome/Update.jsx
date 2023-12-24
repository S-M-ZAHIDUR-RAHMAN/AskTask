
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useParams } from "react-router-dom";
import useTask from "../../Hooks/useTask";
import { useEffect, useState } from "react";
import swal from "sweetalert";


const Update = () => {

    const [tasks] = useTask([]);
    const { id } = useParams();
    console.log(tasks, id);
    const [update, setUpdate] = useState();
    const [startDate, setStartDate] = useState(new Date());

    useEffect(() => {
        const findUpdate = tasks?.find(task => task?._id === id);
        setUpdate(findUpdate);
    }, [id, tasks])
    console.log(update);


    const handleUpdateAssignment = e => {
        e.preventDefault();
        const form = e.target;
        const title = form.title.value;
        const priority = form.priority.value;
        const description = form.description.value;


        const updatedTask = { title, priority, description, startDate};
        console.log(updatedTask);

        //update assignment data in the server
        fetch(` https://ask-task-server-9cr8rl0l7-s-m-zahidur-rahmans-projects.vercel.app/${update._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedTask)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    swal("Task updated successfully!")
                }
            })

    }

    return (
        <div className="pt-5 lg:pt-10 md:pt-10 flex flex-col text-white  items-center">
            <div className="flex flex-row justify-center mb-5 text-4xl text-white font-bold hero-overlay py-4">
                <h2>Update a Task</h2>
            </div>

            <form onSubmit={handleUpdateAssignment}>
                {/* Form Row */}
                <div className="md:flex md:mb-8 md:gap-5">
                    <div className="form-control md:w-1/2 ">
                        <label className="label">
                            <span className="label-text text-white ">Title</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="title" defaultValue={update?.title} className="input input-bordered w-full text-black" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ">
                        <label className="label">
                            <span className="label-text text-white ">Priority</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="priority" defaultValue={update?.priority} placeholder="Priority" className="input input-bordered w-full text-black" />
                        </label>
                    </div>
                </div>
                {/* Form Row */}
                <div className="md:flex md:mb-8 md:gap-5">
                    <div className="form-control md:w-full ">
                        <label className="label">
                            <span className="label-text text-white ">Description</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="description" defaultValue={update?.description} placeholder="Description" className="input input-bordered w-full text-black" />
                        </label>
                    </div>
                </div>
                {/* Form Row */}
                <div className="mb-10">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-white ">Deadline</span>
                        </label>
                        <div>
                            <DatePicker className="rounded-lg text-black p-3" selected={startDate} onChange={(date) => setStartDate(date)} />
                        </div>
                    </div>
                </div>
                <input type="submit" value="Update Task" className="btn btn-accent bg-yellow-500" />
            </form>
        </div>
    );
};

export default Update;