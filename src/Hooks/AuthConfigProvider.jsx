import PropTypes from "prop-types";
import authConfigContext from "./authConfigContext";
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import auth from "../Utilities/firebaseConfig";
import { useEffect } from "react";
import { useState } from "react";
const AuthConfigProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();
  const handleSignInWithPopup = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };
  const handleSignInWithgithub = () => {
    setLoading(true);
    return signInWithPopup(auth, githubProvider);
  };
  const handleCreateUser = (mail, pass) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, mail, pass);
  };
  const handleSignIn = (mail, pass) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, mail, pass);
  };
  const handleSignOut = () => {
    setLoading(true);
    setUser(null);
    return signOut(auth);
  };
  const handleUpdateProfile = (name, url) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: url,
    })
      .then(() => {
        setLoading(false);
        return setUser({ ...auth.currentUser });
      })
      .catch((error) => {
        console.error(error);
      });
  };
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (cUser) => {
      setLoading(false);
      setUser(cUser);
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
