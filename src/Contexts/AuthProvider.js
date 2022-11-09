import React from 'react';
import app from '../Firebase/Firebase.init';
import { createContext, useState, useEffect } from 'react';
import { 
        getAuth, createUserWithEmailAndPassword,
        signInWithEmailAndPassword, 
        onAuthStateChanged, signOut,
        updateProfile, 
        signInWithPopup
    } from 'firebase/auth';
    

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState('');
    const [loading, setLoading] = useState(true);


    const providerLogin = (provider)=>{
        return signInWithPopup(auth, provider)
    }




    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const updateUserProfile = (profile)=> {
        return updateProfile(auth.currentUser, profile); 
    }


    const loginUser = (email, password)=> {
        return signInWithEmailAndPassword(auth, email, password); 
    }

    const logoutUser = ()=> {
        return signOut(auth);
    } 


    useEffect(()=> {
        const unSubscribe = onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser);
        });
        return ()=> {
            unSubscribe();
        }
    },[])

    const authInfo = { user, createUser, loginUser, logoutUser, updateUserProfile, providerLogin };
    
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;