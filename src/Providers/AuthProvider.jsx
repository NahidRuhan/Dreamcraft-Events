import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types'; // ES6
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged, updateProfile } from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext = createContext(null)

const auth = getAuth(app)




const AuthProvider = ({children}) => {

    const [user,setUser] = useState(null)
    const [loading,setLoading] = useState(true);

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,currentUser =>{

            setUser(currentUser)
            setLoading(false);
            
        })
        return () => {
            unsubscribe();
        }
    },[])


    
const createUser=(email,password)=>{
    setLoading(true);
    return createUserWithEmailAndPassword(auth,email,password)
}

const userSignIn=(email,password)=>{
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password)
}

const googleSignIn = () =>{
    setLoading(true);
    return signInWithPopup(auth, provider)
}

const logOut = () => {
    setLoading(true);
    return signOut(auth);
}

const handleUpdateProfile = (name, photo) => {
    setLoading(true);
    return updateProfile(auth.currentUser, {
        displayName: name, photoURL: photo
    })
}

const provider = new GoogleAuthProvider();

    const authInfo = {
        createUser,
        userSignIn,
        googleSignIn,
        logOut,
        handleUpdateProfile,
        user,
        loading,
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children : PropTypes.element
}

export default AuthProvider