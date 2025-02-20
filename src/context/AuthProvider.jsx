import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { app } from "../../public/Firebase/firebase.config";

export const authContext = createContext(null);

export default function AuthProvider({ children }) {
  // const axiosPublic = useAxiosPublic();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const auth = getAuth(app);
  const googleProvider = new GoogleAuthProvider();
  const gmailLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };
  const loginUser = (user) => {
    setUser(user);
  };

  const logOut = () => {
    setLoading(true);
    signOut(auth);
    setUser(null);
    console.log(user, "logged out");
    localStorage.removeItem("accessToken");
    setLoading(false);
  };
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
      // localStorage.setItem("accessToken", user.accessToken);
      if (user) {
        const userInfo = {
          name: user.displayName,
          email: user.email,
        };
      } else {
        localStorage.removeItem("accessToken");
        setUser(null);
        setLoading(false);
      }
      return unsubscribe;
    });
  }, []);
  const userInfo = {
    loading,
    gmailLogin,
    loginUser,
    user,
    setUser,
    logOut,
  };
  return (
    <div>
      <authContext.Provider value={userInfo}>{children}</authContext.Provider>
    </div>
  );
}
