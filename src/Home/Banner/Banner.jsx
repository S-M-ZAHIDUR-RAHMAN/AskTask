import { Link } from "react-router-dom";
import banner from "../../../images/banner.gif"
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";

const Banner = () => {
    const { user } = useContext(AuthContext);
    const bgStyle = {
        backgroundImage: `url(${banner})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
    }
    return (
        <div className="hero mx-auto min-h-[100vh] lg:min-h-[87.7vh]" style={bgStyle}>
            <div className="cover">
                {
                    user ? <Link to="dashboard/dashboard"><button className="btn btn-accent bg-yellow-500">Lets Explore</button></Link> : <Link to="/login"><button className="btn btn-accent bg-yellow-500">Lets Explore</button></Link>
                }

            </div>
        </div>
    );
};

export default Banner;