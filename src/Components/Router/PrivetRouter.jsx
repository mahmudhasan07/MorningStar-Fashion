import { Children, useContext } from "react";
import { Context } from "../ContextAPI/ContextAPI";
import { NavLink, Navigate, useLocation } from "react-router-dom";


const PrivetRouter = ({children}) => {
    const {user, loader}= useContext(Context)
    const location = useLocation()
    console.log(location);

    if(loader){
        return <span className="loading loading-dots flex  mx-auto w-1/5"></span>
    }

    if(user){
        return children
    }

    return  <Navigate state={location.pathname} to={`/login`}></Navigate>
};

export default PrivetRouter;