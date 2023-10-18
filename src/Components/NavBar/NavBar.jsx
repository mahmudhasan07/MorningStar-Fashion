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
                        <NavLink><li className="my-2 mr-2">Home</li></NavLink>
                        <li tabIndex={0}>
                            <details>
                                <summary className="mr-2">Brands</summary>
                                <ul className="p-4 border-2 z-10">

                                    <NavLink to={`/nike`}><li className="">Nike</li></NavLink>
                                    <NavLink to={`/adidas`}><li className="">Adidas</li></NavLink>
                                    <NavLink to={`/gucci`}><li className="">Gucci</li></NavLink>
                                    <NavLink to={`/zara`}><li className="">Zara</li></NavLink>
                                    <NavLink to={`/ck`}><li className="">Calvin Klein</li></NavLink>
                                    <NavLink to={`/h&m`}><li className="">H&M</li></NavLink>


                                </ul>
                            </details>
                        </li>
                        <NavLink to={`/additems`}><li className="my-2 m-3">Add Items</li></NavLink>
                        <NavLink to={`/myitems`}><li className="my-2 m-3">My Items</li></NavLink>
                        <NavLink><li className="my-2 m-2">Contact Us</li></NavLink>
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