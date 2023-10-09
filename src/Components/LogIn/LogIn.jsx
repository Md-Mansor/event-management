import { Link } from "react-router-dom";

const LogIn = () => {
    const handelEventLogIn = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);
    }

    return (
        <div>
            <div className=" w-6/12  mx-auto ">
                <div className="p-4">
                    <h1 className="text-5xl font-bold text-center py-2">Login now!</h1>
                    <div className="card-body shadow-2xl  bg-sky-50">
                        <form onSubmit={handelEventLogIn} >
                            <div className="form-control">
                                <label className="label">
                                    <span className="text-base">Email</span>
                                </label>
                                <input type="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="text-base">Password</span>
                                </label>
                                <input type="password" placeholder="password" className="input input-bordered" required />
                            </div>
                            <Link to="/register">
                                <label className="label hover:text-blue-400 cursor-pointer">
                                    <span className="text-lg">Do not have an account? please register Here</span>
                                </label>
                            </Link>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LogIn;