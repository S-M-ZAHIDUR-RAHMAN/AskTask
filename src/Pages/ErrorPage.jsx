import { Link, useRouteError } from "react-router-dom";


const ErrorPage = () => {
    const error = useRouteError();
    return (

        <div className="mt-40 flex flex-col justify-center items-center">
            <h2 className="text-5xl text-bold">Oops!!!</h2>
            <h3>{error.statusText || error.message}</h3>
            {
                error.status === 404 && <div className="flex flex-col justify-center items-center">
                    <h3 className="text-3xl underline">Page not found</h3>
                    <p className="text-xl">Go back to Home</p>
                    <Link to="/"><button className="text-yellow-400 text-bold mt-20 btn-accent px-7 py-5 hover:rounded-full hover:shadow-blue-600">HOME</button></Link>
                </div>
            }
        </div>
    
    );
};

export default ErrorPage;