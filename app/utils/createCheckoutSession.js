import {collection, addDoc, onSnapshot, doc} from "firebase/firestore";
import {firestoreDB} from "@/app/firebase";

async function createCheckoutSession(uid, cart){

    const fechaCompra = new Date();

    const collectionRef = collection(firestoreDB, `customers/${uid}/checkout_sessions`);
    const {id} = await addDoc(collectionRef, {
        mode: "payment",
        success_url: window.location.origin + "?session_id={CHECKOUT_SESSION_ID}",
        cancel_url: window.location.origin,
        collect_shipping_address: true,
        allow_promotion_codes: true,
        metadata: {
            date: fechaCompra.toDateString()
        },
        line_items: cart.map(item => {
            return {
                quantity: 1,
                price: item.priceId,
            }
        })
    });

    const cancelarStreaming = onSnapshot(doc(firestoreDB, `customers/${uid}/checkout_sessions/${id}`), (snapshot) => {
        let url = snapshot.data().url;
        if (url){
            cancelarStreaming();
            window.location.href = url;
        }
    })
}

export default createCheckoutSession;