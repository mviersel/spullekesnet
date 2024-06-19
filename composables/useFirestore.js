// composables/useFirestore.js
import { useNuxtApp } from "#app";
import {
    collection,
    getDocs,
} from "firebase/firestore";

const useFirestore = () => {
    const { $db } = useNuxtApp();
    const collectionRef = collection($db, "products");

    const getItems = async () => {
        const querySnapshot = await getDocs(collectionRef);
        return querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    };

    return {
        getItems,
    };
};

export default useFirestore;