import { createContext, useState, useEffect } from "react";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  updateProfile,
  updateEmail,
  signInWithEmailAndPassword,
} from "firebase/auth";
import app from "../firebase/firebase.config";

export const Auth_Context = createContext();

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

function AuthContext({ children }) {
  const [user, setUser] = useState(null);
  const [createdUser, setCreatedUser] = useState(null);
  const [googleLoading, setGoogleLoading] = useState(false);
  const [loading, setLoading] = useState(true);

  const emailSignUp = async ({ name, email, password, photo_URL }) => {
    try {
      setLoading(true);

      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const createdUser = userCredential.user;

      setCreatedUser(createdUser);

      await updateProfile(createdUser, {
        displayName: name,
        photoURL: photo_URL,
      });

      setUser({
        name,
        email,
        image: photo_URL,
      });

      // console.log("Register user ==> ", name, email, photo_URL);

      alert("✅ Registration successful!");
      return { success: true };
    } catch (error) {
      console.error("❌ Registration Error:", error.message);
      alert(error.message);
      return { success: false, error };
    } finally {
      setLoading(false);
    }
  };

  const emailLogin = async ({ email, password }) => {
    try {
      setLoading(true);
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const loggedUser = userCredential.user;

      setUser({
        name: loggedUser.displayName || "",
        image: loggedUser.photoURL || "",
        email: loggedUser.email || "",
      });

      alert("✅ Login successful!");
      console.log("Register user ==> ", userCredential.user);
      return { success: true };
    } catch (error) {
      console.error("❌ Login Error:", error.message);
      alert(error.message);
      return { success: false, error };
    } finally {
      setLoading(false);
    }
  };

  const update = async ({ name, email, image }) => {
    try {
      const currentUser = auth.currentUser;
      
      if (!currentUser) throw new Error("No authenticated user found.");

      if (currentUser.email !== email) {
        await updateEmail(currentUser, email);
      }

      if (currentUser.displayName !== name || currentUser.photoURL !== image) {
        await updateProfile(currentUser, {
          displayName: name,
          photoURL: image,
        });
      }

      setUser({
        name,
        email,
        image,
      });

      alert("✅ Profile updated successfully!");
      return { success: true };
    } catch (error) {
      console.error("Update Error =>", error.message);
      alert("❌ Update failed: " + error.message);
      return { success: false, error };
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser({
          name: currentUser.displayName || "",
          image: currentUser.photoURL || "",
          email: currentUser.email || "",
        });
      } else {
        setUser(null);
      }
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const googleSignIn = async () => {
    try {
      setGoogleLoading(true);
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      setUser({
        name: user.displayName || "",
        image: user.photoURL || "",
        email: user.email || "",
      });

      alert("✅ Google login successful!");
      return { success: true, user };
    } catch (error) {
      console.error("❌ Google Sign-in Error:", error.message);
      alert("Sign-in failed: " + error.message);
      return { success: false, error };
    } finally {
      setGoogleLoading(false);
    }
  };

  const logOut = async () => {
    try {
      await signOut(auth);
      setTimeout(() => setUser(null), 0);

      alert("👋 Logged out successfully");
      return { success: true };
    } catch (error) {
      console.error("Logout Error:", error.message);
      alert("Logout failed: " + error.message);
      return { success: false };
    }
  };

  return (
    <Auth_Context.Provider
      value={{
        user,
        googleSignIn,
        logOut,
        googleLoading,
        loading,
        emailLogin,
        emailSignUp,
        createdUser,
        update,
      }}
    >
      {children}
    </Auth_Context.Provider>
  );
}

export default AuthContext;
