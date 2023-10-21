import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { Context } from "../ContextAPI/ContextAPI";
import { MdDarkMode } from 'react-icons/md';
import { BsSun } from 'react-icons/bs';



const NavBar = ({ theme, handlelight, handledark }) => {
    const { user, logOut, loader } = useContext(Context)
    // console.log(user);
    loader
    const handlelogout = () => {
        logOut()
    }
    return (
        <div className=" border text-black border-gray-400 bg-orange-500 shadow-xl ">
            <div className=" flex  flex-wrap  justify-around ">
                <div className="">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-50 p-2 shadow bg-base-100 rounded-box w-40">
                            <NavLink className={({ isActive, isPending }) =>
                                isActive ? "bg-white" : ""}><li>Home</li></NavLink>
                            <li>
                                <a>Brands</a>
                                <ul className="p-2">
                                    <NavLink to={`/Nike`}><li className="">Nike</li></NavLink>
                                    <NavLink to={`/Adidas`}><li className="">Adidas</li></NavLink>
                                    <NavLink to={`/Gucci`}><li className="">Gucci</li></NavLink>
                                    <NavLink to={`/Zara`}><li className="">Zara</li></NavLink>
                                    <NavLink to={`/Calvin Klein`}><li className="">Calvin Klein</li></NavLink>
                                    <NavLink to={`/H&M`}><li className="">H&M</li></NavLink>
                                </ul>
                            </li>
                            <NavLink><li>Add Items</li></NavLink>
                        </ul>
                    </div>
                </div>
                    <p className=" my-auto text-2xl font-bold">MorningStart Fashion</p>
                <div className=" hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 text-base">
                        <NavLink to={`/`} className={({ isActive, isPending }) =>
                            isPending ? "" : isActive ? "bg-white p-1 rounded-xl" : ""}><li className="my-2 mr-2">Home</li></NavLink>
                        <li tabIndex={0}>
                            <details>
                                <summary >Brands</summary>
                                <ul className="p-4 border-2 bg-orange-300 z-10">


                                    <NavLink to={`/all-items`}><li className="">All Category</li></NavLink>
                                    <NavLink  to={`/Nike`}><li className="">Nike</li></NavLink>
                                    <NavLink  to={`/Adidas`}><li className="">Adidas</li></NavLink>
                                    <NavLink to={`/Gucci`}><li className="">Gucci</li></NavLink>
                                    <NavLink  to={`/Zara`}><li className="">Zara</li></NavLink>
                                    <NavLink  to={`/Calvin Klein`}><li className="">Calvin Klein</li></NavLink>
                                    <NavLink to={`/H&M`}><li className="">H&M</li></NavLink>


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
                <div className=" flex gap-2  ">
                <div className="my-auto ">
                    {
                        theme == "white" ? <button onClick={handledark} className=" text-3xl bg-orange-500"><MdDarkMode className=""></MdDarkMode></button>
                        :
                        <button onClick={handlelight} className=" text-3xl  bg-orange-500"><BsSun className="my-auto"></BsSun></button>
                    }
                </div>
                    {
                        user ? <div className="flex flex-wrap gap-2"> <img className="w-10  my-auto rounded-full" src={user.photoURL} alt="" /> <p className="my-auto font-bold">{user.displayName}</p> <NavLink onClick={handlelogout} className="btn my-auto bg-orange-500">LogOut</NavLink></div>
                            :
                            <NavLink className={({ isActive, isPending }) =>
                                isActive ? "bg-white p-1 rounded-xl btn my-auto " : "my-auto btn bg-orange-500"} to={`/login`}>login</NavLink>
                    }
                <div>
                    
                </div>
                </div>
            </div>
        </div>
    );
};

export default NavBar;