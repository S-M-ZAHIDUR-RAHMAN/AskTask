/* eslint-disable react/prop-types */

const MyDetails = ({task}) => {
    return (
        <div>
            <div className="card w-[100%] md:w-40 h-60 mt-1 md:m-1 bg-black border border-yellow-500 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">{task?.title}</h2>
                    <div className="card-actions justify-end">
                        <p>Deadline: {task?.deadline}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyDetails;