import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
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

  // Email SignUP
  const signUp = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // Email SignIn
  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  //   Google SignIn
  const googleSignIn = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  // Update User

  const updateUser = (name) => {
    setLoading(true);
    return updateProfile(auth.currentUser, { displayName: name });
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
    updateUser,
    signIn,
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
