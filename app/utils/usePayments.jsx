"use client"
import {useEffect, useState} from "react";
import {collection, getDocs} from "firebase/firestore";
import {firestoreDB} from "@/app/firebase";

const usePayments = (uid) => {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {

        const fetchData = async () => {
            setLoading(true);
            try{
                const refCollection = collection(firestoreDB, `customers/${uid}/payments`)
                const documentos = (await getDocs(refCollection)).docs;
                const payments = documentos.map(document => document.data());
                setData(payments);
            } catch (e) {
                setError(true)
            }
            setLoading(false);
        }

        fetchData();

    }, []);

    return {data, loading, error};

}

export default usePayments;