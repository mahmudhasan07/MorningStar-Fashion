import { NavLink } from "react-router-dom";


const NavBar = () => {
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <NavLink><li>Home</li></NavLink>
                            <li>
                                <a>Brands</a>
                                <ul className="p-2">
                                    <NavLink><li className="">Nike</li></NavLink>
                                    <NavLink><li className="">Adidas</li></NavLink>
                                    <NavLink><li className="">Gucci</li></NavLink>
                                    <NavLink><li className="">Zara</li></NavLink>
                                    <NavLink><li className="">Calvin Klein</li></NavLink>
                                </ul>
                            </li>
                            <NavLink><li>Add Items</li></NavLink>
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl">MorningStart Fashion</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 text-base">
                        <NavLink><li className="my-2 mr-2">Home</li></NavLink>
                        <li tabIndex={0}>
                            <details>
                                <summary className="mr-2">Brands</summary>
                                <ul className="p-4 border-2 z-10">

                                    <NavLink><li className="py-1">Nike</li></NavLink>
                                    <NavLink><li className="py-1">Adidas</li></NavLink>
                                    <NavLink><li className="py-1">Gucci</li></NavLink>
                                    <NavLink><li className="py-1">Zara</li></NavLink>
                                    <NavLink><li className="py-1">Calvin Klein</li></NavLink>


                                </ul>
                            </details>
                        </li>
                        <NavLink to={`/additems`}><li className="my-2 mr-3">Add Items</li></NavLink>
                        <NavLink><li className="my-2 mr-2">Contact Us</li></NavLink>
                    </ul>
                </div>
                <div className="navbar-end">
                    <NavLink className="btn">Login</NavLink>
                </div>
            </div>
        </div>
    );
};

export default NavBar;