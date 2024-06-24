// composables/useFirestore.js
import { useNuxtApp } from "#app";
import {
    collection,
    addDoc,
    getDocs,
    updateDoc,
    deleteDoc,
    doc,
} from "firebase/firestore";

const useFirestore = () => {
    const { $db } = useNuxtApp();
    const collectionRef = collection($db, "products");

    const getItems = async () => {
        const querySnapshot = await getDocs(collectionRef);
        return querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    };

    const addItem = async (product) => {
        const docRef = await addDoc(collectionRef, product);
        return docRef.id;
    };

    const updateItem = async (id, updatedProduct) => {
        const docRef = doc($db, "products", id);
        await updateDoc(docRef, updatedProduct);
    };

    const deleteItem = async (id) => {
        const docRef = doc($db, "products", id);
        await deleteDoc(docRef);
    };

    return {
        getItems,
        addItem,
        updateItem,
        deleteItem,
    };
};

export default useFirestore;
