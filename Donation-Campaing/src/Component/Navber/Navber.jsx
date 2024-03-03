import { NavLink } from "react-router-dom";
import logo from "../../assets../../assets/Logo.png"
const Navber = () => {
    const navLinks = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/donationDone">Donations</NavLink></li>
        <li><NavLink to="/about">Statistics</NavLink></li>
    </>
    return (
        <div>
            <div className="navbar rounded-lg mt-5">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content font-semibold mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navLinks}
                        </ul>
                    </div>
                    <img className="normal-case lg:h-12 font-bold text-[#83326f]" src={logo} alt="" />
                </div>
                <div className="navbar-center hidden lg:flex font-semibold">
                    <ul className="menu menu-horizontal px-1 gap-8">
                        {navLinks}
                    </ul>
                </div>
                {/* <div className="navbar-end"> */}
            </div>
        </div>
    );
};

export default Navber;