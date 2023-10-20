import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Context } from "../ContextAPI/ContextAPI";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FcGoogle } from 'react-icons/fc';



const Login = () => {
    const { signUser, googlelogin } = useContext(Context)
    const location = useLocation()
    const navigate = useNavigate()
    const handlelogin = (e) => {
        e.preventDefault()
        const form = event.target
        const email = form.email.value
        const password = form.password.value

        signUser(email, password)
            .then(result => {
                console.log(result.user);
                location.state ? navigate(`${location.state}`) : navigate('/')
            })
            .catch(error => {
                toast.error(error.message)
                // console.log();
            })

    }

    const handlegoogle = () => {
        googlelogin()
            .then(result => {
                location.state ? navigate(`${location.state}`) : navigate('/')
            })
            .catch(error => {
                console.log(error.message);
            })
    }
    return (
        <section>
            <div className="">
                <div className=" flex-col my-10 mx-auto">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl text-center mb-5 font-bold">Login now!</h1>
                    </div>
                    <div className="card mx-auto  w-2/3 shadow-2xl bg-base-100">
                        <form onSubmit={handlelogin} className="card-body">
                            <div className="form-control ">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input name="email" type="email" placeholder="email" className="input input-bordered " required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input name="password" type="password" placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="flex justify-end">
                                <Link to={`/registration`} className="text-orange-500 font-semibold">New User??</Link>
                            </div>
                            <div className=" mx-auto">
                                <p onClick={handlegoogle} className=" border-2 rounded-xl border-orange-400 py-1 px-3 flex gap-3"> <span className="text-xl my-auto"><FcGoogle></FcGoogle></span> LogIn with Google</p>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <ToastContainer></ToastContainer>
        </section>
    );
};

export default Login;