import { NavLink } from "react-router-dom";
import NavLogo from '../../Asset/NavLogo.jpg'


const Header = () => {
    const navBar = <>
        <NavLink to="/">Home </NavLink>
        <NavLink to="/features">Features </NavLink>
    </>
    return (
        <div className="bg-slate-400 p-5" >
            <div className="navbar ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns='' className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navBar}
                        </ul>
                    </div>
                    <img src={NavLogo} alt="" className="h-28 w-52 border rounded-2xl " />
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navBar}
                    </ul>
                </div>
                <div className="navbar-end">
                    <img src="" alt="" />
                    <button className="btn">LOGIN</button>
                </div>
            </div>
        </div>
    );
};

export default Header;