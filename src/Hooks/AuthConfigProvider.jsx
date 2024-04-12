import PropTypes from "prop-types";
import authConfigContext from "./authConfigContext";
import {GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword,onAuthStateChanged,signInWithEmailAndPassword,signInWithPopup,signOut,updateProfile,
} from "firebase/auth";
import auth from "../Utilities/firebaseConfig";
import { useEffect } from "react";
import { useState } from "react";
const AuthConfigProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const googleProvider = new GoogleAuthProvider()
  const githubProvider = new GithubAuthProvider()
  const handleSignInWithPopup = () =>{
    return signInWithPopup(auth, googleProvider)
  }
  const handleSignInWithgithub = () =>{
    return signInWithPopup(auth, githubProvider)
  }
  const handleCreateUser = (mail, pass) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, mail, pass);
  };
  const handleSignIn = (mail, pass) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, mail, pass);
  };
  const handleSignOut = () => {
    return signOut(auth);
  };
  const handleUpdateProfile = (name, url) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: url,
    })
      .then(() => {
        return setUser({...auth.currentUser});
      })
      .catch((error) => {
        console.error(error);
      });
  };
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (cUser) => {
      if (cUser) {
          setUser(cUser);
          setLoading(false);
      }
    });
    return () => {
      unSubscribe();
    };
  }, []);
  const val = {
    user,
    loading,
    handleCreateUser,
    handleSignIn,
    handleSignOut,
    handleUpdateProfile,
    handleSignInWithPopup,
    handleSignInWithgithub,
    setUser
  };
  return (
    <authConfigContext.Provider value={val}>
      {children}
    </authConfigContext.Provider>
  );
};

AuthConfigProvider.propTypes = {
  children: PropTypes.node,
};
export default AuthConfigProvider;
