"use client"
import React, {createContext, useContext, useEffect, useState} from "react";
import {updateDoc, doc, getDoc, getDocs, collection, setDoc} from "firebase/firestore";
import {firestoreDB} from "@/app/firebase";
import {UserAuth} from "@/app/context/AuthContext";

const Context = createContext();

export const BagProvider = ({children}) => {
    const {currentUser} = UserAuth();

    const [bag, setBag] = useState([]);

    useEffect(() => {
        if (currentUser) {

            const obtenerCarrito = async () => {

                const docRef = doc(firestoreDB, `customers/${currentUser.uid}/cart_products/carrito`)
                const carritoDoc = await getDoc(docRef);

                if (!carritoDoc.exists()) {
                    return;
                }

                const carritoData = carritoDoc.data();

                const productos = [];
                // OBTENER PRODUCTOS

                carritoData.carrito.forEach(async productId => {
                    const docRef = doc(firestoreDB, "products", productId);
                    const snap = await getDoc(docRef);

                    if (snap.exists()) {
                        const producto = snap.data();
                        producto.id = snap.id;
                        const precioSnaps = await getDocs(collection(snap.ref, "prices"));
                        producto.price = precioSnaps.docs[0].data();
                        producto.priceId = precioSnaps.docs[0].id;

                        productos.push(producto)
                        setBag(productos);
                    }

                });

            }

            obtenerCarrito();


        } else {
            setBag([]);
        }

    }, [currentUser]);

    const addProduct = async (product) => {
        console.log(product);
        if (!bag.some(element => element.id === product.id)){
            // Agregar a firebase y a la bolsa
            try{
                const docRef = doc(firestoreDB, `customers/${currentUser.uid}/cart_products`, "carrito");
                await setDoc(docRef, {"carrito": [product.id, ...bag.map(p => p.id)]}).then( () => {
                    setBag(prevState => ([...prevState, product]))
                })
            } catch (e) {
            }

        } else{
            // TODO ASIGNAR UN SNACKBAR
        }

    }

    const removeProduct = async (id) => {

        const carritoNuevo = bag.filter(product => product.id !== id);

        try{
            const docRef = doc(firestoreDB, `customers/${currentUser.uid}/cart_products`, "carrito");
            await updateDoc(docRef, {"carrito": [...carritoNuevo.map(p => p.id)]}).then( () => {
                setBag(prevState => prevState.filter(product => product.id !== id));
            })
        } catch (e) {
        }
    }

    const clearBag = async () => {
        if (bag.length > 0){
            const docRef = doc(firestoreDB, `customers/${currentUser.uid}/cart_products`, "carrito");
            await updateDoc(docRef, {"carrito": []}).then( () => {
                setBag([]);
            })
        }
    }

    return (
        <Context.Provider
            value={{bag, addProduct, removeProduct, clearBag}}
        >
            {children}
        </Context.Provider>
    );

}

export const BagContext = () => useContext(Context);