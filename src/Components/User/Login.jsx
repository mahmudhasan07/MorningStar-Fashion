import { Link } from "react-router-dom";


const Login = () => {
    const handlelogin =(e)=>{
        e.preventDefault()
        const form = event.target
        const email = form.email.value
        const password = form.password.value
    
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
                            <div className="form-control mt-6">
                                <button  className="btn btn-primary">Login</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Login;