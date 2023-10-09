import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";


const Register = () => {
    const { createUser } = useContext(AuthContext);



    const handelEventRegister = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);

        const name = form.get('text');
        const email = form.get('email');
        const password = form.get('password');
        console.log(name, email, password);
        createUser(email, password)
            .then(result => {
                console.log(result);
            })
            .then(error => {
                console.log(error);
            })

    }
    return (
        <div>
            <div className=" ">
                <div className="">
                    <h1 className="text-3xl my-10 text-center font-bold  ">Register Here </h1>
                    <form onSubmit={handelEventRegister} className="md:w-3/4 lg:w-1/2 mx-auto border p-4 rounded-md ">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="Name" className="input input-bordered" name="text" required />
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
                            <button className="btn btn-primary">Register</button>
                        </div>

                    </form>
                    <Link to="/login">
                        <p className=" mt-2 hover:cursor-pointer hover:text-blue-300 text-lg text-center">Already have an account? Please Log In</p>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Register;