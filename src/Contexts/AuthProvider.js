import React from 'react';
import { createContext, useState, useEffect } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from 'firebase/auth';
import app from '../Firebase/Firebase.init';


export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState('');
    const [loading, setLoading] = useState(true);


    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
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


    const authInfo = { user, createUser, loginUser, logoutUser };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;