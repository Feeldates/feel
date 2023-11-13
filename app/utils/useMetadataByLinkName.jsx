import {doc, getDoc} from "firebase/firestore";
import {firestoreDB} from "@/app/firebase";

const UseMetadataByLinkName = async (param) => {

    try {
        const docRef = doc(firestoreDB, `invitations/${param}/Metadata`, "Metadata");
        const snap = await getDoc(docRef);
        const invitation = snap.data();
        return { data: invitation, error: null };
    } catch (error) {
        console.error("Error en UseMetadataByLinkName:", error);
        return { data: null, error: error.message || "Error fetching Metadata" };
    }

}

export default UseMetadataByLinkName;