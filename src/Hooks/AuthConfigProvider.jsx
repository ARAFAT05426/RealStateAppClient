import PropTypes from 'prop-types';
import authConfigContext from './authConfigContext';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';
import auth from '../Utilities/firebaseConfig';
import { useEffect } from 'react';
import { useState } from 'react';
const AuthConfigProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const handleCreateUser = (mail, pass) =>{
        return createUserWithEmailAndPassword(auth, mail, pass)
    }
    const handleSignIn = (mail, pass) =>{
        return signInWithEmailAndPassword(auth, mail, pass)
    }
    const handleSignOut = () =>{
        return signOut(auth)
    }
    const handleUpdateProfile = (name, url) => {
        updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: url
        })
        .then(() => {
            // Profile updated!
            // ...
          }).catch((error) => {
            // An error occurred
            // ...
            console.log(error);
          })
    }
    useEffect(() =>{
        const unSubscribe = onAuthStateChanged(auth, (cUser) => {
            setUser(cUser)
        })  
        return () =>{
            unSubscribe()
        }
    }, [])
    const val = {user, handleCreateUser, handleSignIn, handleSignOut, handleUpdateProfile}
    return (
        <authConfigContext.Provider value={val}>
            {
                children
            }
        </authConfigContext.Provider>
    );
};

AuthConfigProvider.propTypes = {
    children: PropTypes.node
}
export default AuthConfigProvider;