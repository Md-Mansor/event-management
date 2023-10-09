import { Link } from "react-router-dom";

const LogIn = () => {
    const handelEventLogIn = e => {
        e.preventDefault();
        // console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);
        console.log(form.get('email'));
        console.log(form.get('password'));
    }

    return (
        <div>

            <div className="">
                <h1 className="text-3xl my-10 text-center font-bold  ">LogIn Now </h1>
                <form onSubmit={handelEventLogIn} className="md:w-3/4 lg:w-1/2 mx-auto border p-4 rounded-md ">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="email" className="input input-bordered" name="email" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" placeholder="password" className="input input-bordered" name="password" required />
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Log In</button>
                    </div>

                </form>
                <Link to="/register">
                    <p className=" mt-2 hover:cursor-pointer hover:text-blue-300 text-lg text-center">Do not have an Account ? Please Register</p>
                </Link>
            </div>

        </div >
    );
};

export default LogIn;