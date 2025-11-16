import { initializeApp } from "firebase/app";
import { createContext, useContext,useState,useEffect } from "react";
import { getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword,GoogleAuthProvider,signInWithPopup ,onAuthStateChanged} from "firebase/auth";
const FirebaseContext = createContext(null);

const firebaseConfig = {
  apiKey: "AIzaSyAGx0iWD6QOvHm9-F6Rj6-rYnT9NAoBO5o",
  authDomain: "book-rack-7872e.firebaseapp.com",
  projectId: "book-rack-7872e",
  storageBucket: "book-rack-7872e.firebasestorage.app",
  messagingSenderId: "891821930246",
  appId: "1:891821930246:web:0fa8f83e47369e72619087"
};

export const useFirebase = () => {
  return useContext(FirebaseContext);
};

const firebaseApp = initializeApp(firebaseConfig);
const firebaseAuth = getAuth(firebaseApp);
const googleProvider= new GoogleAuthProvider();

export const FirebaseProvider = (props) =>{
  const [user,setUser]=useState(null);
  const signUserwithEmailandPassword = (email,password)=> createUserWithEmailAndPassword(firebaseAuth,email,password);
  const signInuserwithEmailandPassword= (email,password)=>signInWithEmailAndPassword(firebaseAuth,email,password);
  const signInwithGoogle=()=>signInWithPopup(firebaseAuth,googleProvider);
  
  useEffect(()=>{ onAuthStateChanged(firebaseAuth,(user)=>{
    // console.log("userr",user);
    if(user) setUser(user);
    else setUser(null);
  });
},[]);

const isLoggedIn = user?true:false;

    return(
        <FirebaseContext.Provider value={{signInwithGoogle,isLoggedIn,signUserwithEmailandPassword,signInuserwithEmailandPassword}}>
            {props.children}
        </FirebaseContext.Provider>
    );
};

