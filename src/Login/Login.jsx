import { useContext, useState } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import auth from "../firebase/firebase.config";
import swal from "sweetalert";
import { FaGoogle } from "react-icons/fa";
import { GithubAuthProvider } from "firebase/auth";






const Login = () => {


    const { signInUser } = useContext(AuthContext);
    const navigate = useNavigate();

    const [registerLoginError, setRegisterLoginError] = useState('');
    const [successLogin, setSuccessLogin] = useState('');

    const handleLogin = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);


        setRegisterLoginError('');
        setSuccessLogin('');

        signInUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setSuccessLogin(swal("User logged in successfully!"))
                e.target.reset();
                navigate('/')

            })
            .catch(error => {
                setRegisterLoginError(error.message);
            })
    }
    //Google
    const provider = new GoogleAuthProvider();
    const handleGoogleSignIn = () => {
        signInWithPopup(auth, provider)
            .then(result => {
                console.log(result);
                const user = result?.user;
                console.log(user);

                setSuccessLogin(swal("User logged in successfully!"))

                navigate('/')
            })
            .catch(error => {
                setRegisterLoginError(error.message);
            })
    }
    //GitHub 

    const gitHubProvider = new GithubAuthProvider();
    gitHubProvider.addScope('user:email');
    const handleGitHubSignIn = () => {
        signInWithPopup(auth, gitHubProvider)
            .then(result => {
                console.log(result);
                const loggedInUser = result?.user;
                console.log(loggedInUser);
                const email = loggedInUser?.email || 'Email not available';
                console.log('user Email', email);

                setSuccessLogin(swal("User logged in successfully!"))

                navigate('/')
            })
            .catch(error => {
                setRegisterLoginError(error.message);
            })
    }




    return (
        <div className="hero min-h-screen" data-aos="slide-up" data-aos-anchor-placement="top-center" data-aos-duration="linear">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login to your AskTask-Dashboard!</h1>
                    <p className="py-6 hero-overlay text-white mt-2 p-2 text-2xl">You can login here and then get access to AskTask-Dashboard.</p>
                    <span className="text-blue-700 underline"><Link to="/"> Home</Link></span>

                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered text-black" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered text-black" required />
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn accent bg-slate-200" type="submit" value="Login" />
                        </div>
                    </form>
                    <div className="text-center font-bold text-red-700">
                        {
                            registerLoginError && <p>{registerLoginError}</p>
                        }
                        <div className="hidden">
                            {
                                successLogin && `${successLogin}`
                            }
                        </div>
                    </div>
                    <p className="text-center pb-2">Yet to get registered ? Please go to <span className="text-blue-700 underline"><Link to="/register">Register</Link></span></p>
                    <div className="flex justify-center pb-2">
                        <button className="btn accent bg-yellow-400" onClick={handleGoogleSignIn}><FaGoogle /> Google Sign in</button>
                        <button className="btn accent bg-yellow-400" onClick={handleGitHubSignIn}><FaGoogle /> GitHub Sign in</button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Login;