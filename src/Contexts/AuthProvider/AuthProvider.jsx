import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import React, { createContext, useEffect, useRef, useState } from "react";
import app from "../../firebase/firebase.config.init";

// Create context
export const AuthContext = createContext();

// Provide App auth
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const loginModal = useRef();
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);

  // PRoviders
  const googleProvider = new GoogleAuthProvider();

  // Email SignIn
  const signUp = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //   Google SignIn
  const googleSignIn = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  // Logout
  const logout = () => {
    setLoading(true);
    return signOut(auth);
  };

  const authInfo = {
    loginModal,
    googleSignIn,
    user,
    loading,
    logout,
    signUp,
  };

  //   manage user
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
    });

    return () => {
      unSubscribe();
    };
  }, []);

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
