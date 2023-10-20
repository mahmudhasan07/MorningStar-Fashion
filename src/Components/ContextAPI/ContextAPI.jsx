import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, updateProfile, onAuthStateChanged, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import app from "../User/Login.config";

export const Context = createContext()

const ContextAPI = ({ children }) => {
    const [user, setuser] = useState()
    const [loader, setloader] = useState(true)
    const auth = getAuth(app)

    const Provider = new GoogleAuthProvider()

    const createUser = (email, password) => {
        setloader(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signUser = (email, password) => {
        setloader(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const logOut = () => {
        setloader(true)
        return signOut(auth)
    }
    const updateInfo = (name, photo) => {
        setloader(true)
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        })
    }

    const googlelogin = () => {
        return signInWithPopup(auth, Provider)
    }

    useEffect(() => {
        onAuthStateChanged(auth, (customar) => {
            setuser(customar)
            setloader(false)
        })
    }, [])

    const data = { createUser, signUser, logOut, updateInfo, googlelogin, user, loader }

    return (
        <Context.Provider value={data}>
            {children}
        </Context.Provider>
    );
};

ContextAPI.propType =
{
    children: PropTypes.node
}


export default ContextAPI;
