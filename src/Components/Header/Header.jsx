import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <div className="bg-opacity-10 p-12 bg-slate-950">
            <div className="flex gap-5 text-2xl font-bold justify-around">
                <NavLink to='/'
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "bg-black text-white" : ""}>
                    Home
                </NavLink>

                <NavLink to='/features'
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "bg-black text-white" : ""}>
                    Features
                </NavLink>
                <NavLink to='/about'
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "bg-black text-white" : ""}>
                    About Us
                </NavLink>

                <NavLink to='/contact'
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "bg-black text-white" : ""}>
                    Contact
                </NavLink>
            </div>


        </div>
    );
};

export default Header;