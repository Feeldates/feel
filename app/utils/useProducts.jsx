import {useEffect, useState} from "react";
import {collection, getDocs, limit, query, where} from "firebase/firestore";
import {firestoreDB} from "@/app/firebase";


const useProducts = (type, category) => {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {

        const fetchData = async () => {
            setLoading(true);
            console.log("hola");
            try{
                const q = query(collection(firestoreDB, "products"), where("metadata.tipo", "==", type), where("metadata.categoria", "==", category), limit(25))
                const documentos = await getDocs(q);

                for await (const snap of documentos.docs){
                    const producto = snap.data();
                    producto.id = snap.id;
                    const precioSnaps = await getDocs(collection(snap.ref, "prices"));
                    producto.price = precioSnaps.docs[0].data();
                    producto.priceId = precioSnaps.docs[0].id;
                    setData([producto, ...data]);
                }

                // documentos.forEach( (doc) => {
                //     setData([{id: doc.id, ...doc.data()}, ...data]);
                // })
            } catch (e) {
                setError(true)
            }
            setLoading(false);
        }

        fetchData();

    }, []);

    return {data, loading, error};

}

export default useProducts;