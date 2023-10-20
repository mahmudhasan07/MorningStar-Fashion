import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { Context } from "../ContextAPI/ContextAPI";


const NavBar = ({ handletheme }) => {
    const { user, logOut, loader } = useContext(Context)
    console.log(user);
    loader
    const handlelogout = () => {
        logOut()
    }
    return (
        <div className=" border border-black border-gray-400 bg-orange-300 shadow-xl ">
            <div className="navbar bg-transparent bg-opacity-40  bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <NavLink className={({ isActive, isPending }) =>
                                isActive ? "bg-white" : ""}><li>Home</li></NavLink>
                            <li>
                                <a>Brands</a>
                                <ul className="p-2 bg-orange-500">
                                    <NavLink to={`/nike`}><li className="">Nike</li></NavLink>
                                    <NavLink to={`/adidas`}><li className="">Adidas</li></NavLink>
                                    <NavLink to={`/gucci`}><li className="">Gucci</li></NavLink>
                                    <NavLink to={`/zara`}><li className="">Zara</li></NavLink>
                                    <NavLink to={`/ck`}><li className="">Calvin Klein</li></NavLink>
                                    <NavLink to={`/h&m`}><li className="">H&M</li></NavLink>
                                </ul>
                            </li>
                            <NavLink><li>Add Items</li></NavLink>
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl">MorningStart Fashion</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 text-base">
                        <NavLink to={`/`} className={({ isActive, isPending }) =>
                            isPending ? "" : isActive ? "bg-white p-1 rounded-xl" : ""}><li className="my-2 mr-2">Home</li></NavLink>
                        <li tabIndex={0}>
                            <details>
                                <summary >Brands</summary>
                                <ul className="p-4 border-2 bg-orange-300 z-10">


                                    <NavLink className={({ isActive, isPending }) =>
                                    isPending ? "" :    isActive ? "bg-white p-1 rounded-xl" : ""} to={`/all-items`}><li className="">All Category</li></NavLink>
                                    <NavLink className={({ isActive, isPending }) =>
                                    isPending ? "" :    isActive ? "bg-white p-1 rounded-xl" : ""} to={`/Nike`}><li className="">Nike</li></NavLink>
                                    <NavLink className={({ isActive, isPending }) =>
                                     isPending ? "" :   isActive ? "bg-white p-1 rounded-xl" : ""} to={`/Adidas`}><li className="">Adidas</li></NavLink>
                                    <NavLink className={({ isActive, isPending }) =>
                                      isPending ? "" :  isActive ? "bg-white p-1 rounded-xl" : ""} to={`/Gucci`}><li className="">Gucci</li></NavLink>
                                    <NavLink className={({ isActive, isPending }) =>
                                      isPending ? "" :  isActive ? "bg-white p-1 rounded-xl" : ""} to={`/Zara`}><li className="">Zara</li></NavLink>
                                    <NavLink className={({ isActive, isPending }) =>
                                     isPending ? "" :   isActive ? "bg-white p-1 rounded-xl" : ""} to={`/Calvin Klein`}><li className="">Calvin Klein</li></NavLink>
                                    <NavLink className={({ isActive, isPending }) =>
                                        isActive ? "bg-white p-1 rounded-xl" : ""} to={`/H&M`}><li className="">H&M</li></NavLink>


                                </ul>
                            </details>
                        </li>
                        <NavLink className={({ isActive, isPending }) =>
                         isPending ? "" :   isActive ? "bg-white p-1 rounded-xl" : ""} to={`/additems`}><li className="my-2 m-3">Add Items</li></NavLink>
                        <NavLink className={({ isActive, isPending }) =>
                          isPending ? "" :  isActive ? "bg-white p-1 rounded-xl" : ""} to={`/mycarts`}><li className="my-2 m-3">My carts</li></NavLink>
                        <NavLink className={({ isActive, isPending }) =>
                          isPending ? "" :  isActive ? "bg-white p-1 rounded-xl" : ""} to={`/contact-us`}><li className="my-2 m-2">Contact Us</li></NavLink>
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user ? <div className="flex gap-2"> <img className="w-10 rounded-full" src={user.photoURL} alt="" /> <p className="my-auto font-bold">{user.displayName}</p> <NavLink onClick={handlelogout} className="btn bg-orange-500">LogOut</NavLink></div>
                            :
                            <NavLink className={({ isActive, isPending }) =>
                                isActive ? "bg-white p-1 rounded-xl btn" : "btn bg-orange-500"} to={`/login`}>login</NavLink>
                    }
                </div>
                <div>
                    <button onClick={handletheme} className="btn bg-orange-500">hi</button>
                </div>
            </div>
        </div>
    );
};

export default NavBar;