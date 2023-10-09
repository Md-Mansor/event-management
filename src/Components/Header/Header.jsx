import { Link, NavLink } from "react-router-dom";
import NavLogo from '../../Asset/NavLogo.jpg'
import png from '../../Asset/user.png'
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const Header = () => {
    const { logOut, user } = useContext(AuthContext)

    const handelSignOut = () => {
        logOut()
            .then()
            .catch()
    }

    const navBar = <>
        <NavLink to="/" className="px-4">Home </NavLink>
        <NavLink to="/features">Features </NavLink>
    </>
    return (
        <div className="bg-cyan-100 rounded-sm glass p-5" >
            <div className="navbar ">
                <div className="navbar-start ">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost md:hidden">
                            <svg xmlns='' className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navBar}
                        </ul>
                    </div>
                    <img src={NavLogo} alt="" className="h-28 w-52 border rounded-2xl  " />
                </div>
                <div className="navbar-center">
                    <ul className="text-2xl font-bold hidden md:block">
                        {navBar}
                    </ul>
                </div>
                <div className="navbar-end">


                    <img src={png} alt="" className="rounded-full h-12" />

                    {
                        user ? <button onSubmit={handelSignOut} className="btn btn-secondary">Log Out </button> : <Link to="/login"> <button className="btn btn-secondary">log In </button></Link>

                    }

                </div>
            </div>
        </div>
    );
};

export default Header;