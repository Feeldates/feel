import {doc, getDoc} from "firebase/firestore";
import {firestoreDB} from "@/app/firebase";

const GetInvitationByLinkName = async (param) => {

    try {
        const docRef = doc(firestoreDB, "invitations", param);
        const snap = await getDoc(docRef);
        const invitation = snap.data();
        return { data: invitation, error: null };
    } catch (error) {
        console.error("Error en getInvitationByLinkName:", error);
        return { data: null, error: error.message || "Error fetching invitation" };
    }

}

export default GetInvitationByLinkName;