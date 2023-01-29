import {
  createUserWithEmailAndPassword,
  FacebookAuthProvider,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updatePassword,
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
  const facebookProvider = new FacebookAuthProvider();

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

  const facebookSignIn = () => {
    setLoading(true);
    return signInWithPopup(auth, facebookProvider);
  };

  // Update User
  const updateUser = (data) => {
    return updateProfile(auth.currentUser, { ...data });
  };
  // Logout
  const logout = () => {
    setLoading(true);
    return signOut(auth);
  };

  // change password
  const changePassword = (newPassword) => {
    return updatePassword(auth.currentUser, newPassword);
  };

  // Reset Password
  const resetPassword = (email) => {
    return sendPasswordResetEmail(auth, email);
  };

  //   manage user
  useEffect(() => {
    const unsubcribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => {
      unsubcribe();
    };
  }, []);

  const authInfo = {
    loginModal,
    googleSignIn,
    user,
    loading,
    logout,
    signUp,
    updateUser,
    signIn,
    facebookSignIn,
    changePassword,
    resetPassword,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
