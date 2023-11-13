"use client"

import {useContext, createContext, useState, useEffect} from "react";
import {authentication, firestoreDB} from "@/app/firebase";

import {doc, getDoc, setDoc} from "firebase/firestore";
import {createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider} from "firebase/auth";

const AuthContext = createContext();

export const AuthContextProvider = ({children}) => {
    // CONSTANTES
    const googleProvider = new GoogleAuthProvider()

    // USE STATES
    const [isLoading, setIsLoading] = useState(true);
    const [currentUser, setCurrentUser] = useState(null);

    // FUNCIONES
    async function getDataFromDocument(uid){
        const docuRef = doc(firestoreDB, `users/${uid}`);
        const docuCifrada = await getDoc(docuRef);
        return docuCifrada.data();
    }

    // AUTHSTATECHANGED
    const authStateChanged = async (authState) => {
        if (!authState){
            setCurrentUser(null);
            setIsLoading(false);
            return;
        }

        setIsLoading(true);
        await getDataFromDocument(authState.uid).then((data) => {
            const userData = {
                uid: authState.uid,
                name: authState.displayName,
                email: authState.email,
                photo: authState.photoURL,
            }
            setCurrentUser(userData);
        });
        setIsLoading(false);
    }

    useEffect(() => {
        const unsubscribe = authentication.onAuthStateChanged(authStateChanged);
        return () => unsubscribe();
    }, []);



    async function googleSignIn(){
        const usuario = await signInWithPopup(authentication, googleProvider).then( (user) => {return user} );
        const docuRef = doc(firestoreDB, "users/${infoUsuario.user.uid}");
        await setDoc(docuRef, {"correo": usuario.user.email, "rol":"user"});
    }

    async function emailSignIn(email, password){
        const usuario = await signInWithEmailAndPassword(authentication, email, password).then(user => user);
        // const docuRef = doc(firestoreDB, "users/${infoUsuario.user.uid}");
        // await setDoc(docuRef, {"correo": usuario.user.email, "rol":"user"});
    }

    async function logout(){
        await authentication.signOut();
    }

    
    return (
        <AuthContext.Provider
            value={{currentUser, isLoading, googleSignIn, emailSignIn, logout}}
        >{children}</AuthContext.Provider>
    )
    
}


export const UserAuth = () => useContext(AuthContext);
