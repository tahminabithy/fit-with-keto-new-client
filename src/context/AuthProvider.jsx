import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { createContext, useState } from "react";
import { app } from "../../public/Firebase/firebase.config";

const authContext = createContext(null);
export default function AuthProvider({ children }) {
  const [loading, setLoading] = useState(false);
  const auth = getAuth(app);
  const googleProvider = new GoogleAuthProvider();
  const gmailLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };
  const userInfo = {
    loading,
    gmailLogin,
  };
  return (
    <div>
      <authContext.Provider value={userInfo}>{children}</authContext.Provider>
    </div>
  );
}
