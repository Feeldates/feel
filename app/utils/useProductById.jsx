import {useEffect, useState} from "react";
import {collection, doc, getDoc, getDocs, limit, query, where} from "firebase/firestore";
import {firestoreDB} from "@/app/firebase";

const useProductsById = (id) => {

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {

        const fetchData = async () => {
            setLoading(true);
            try{
                const docRef = doc(firestoreDB, `products/${id}`)
                const snap = await getDoc(docRef);

                const producto = snap.data();
                producto.id = snap.id;
                const precioSnaps = await getDocs(collection(snap.ref, "prices"));
                producto.price = precioSnaps.docs[0].data();
                producto.priceId = precioSnaps.docs[0].id;

                setData(producto);

            } catch (e) {
                setError(true)
            }
            setLoading(false);
        }

        fetchData();

    }, []);

    return {data, loading, error};

}

export default useProductsById;