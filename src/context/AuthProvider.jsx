import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { createContext, useState } from "react";
import { app } from "../../public/Firebase/firebase.config";

export const authContext = createContext(null);

export default function AuthProvider({ children }) {
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

  const userInfo = {
    loading,
    gmailLogin,
    loginUser,
    user,
  };
  return (
    <div>
      <authContext.Provider value={userInfo}>{children}</authContext.Provider>
    </div>
  );
}
