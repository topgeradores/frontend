import { addDoc, collection, deleteDoc, doc, getDocs, orderBy, query } from "firebase/firestore";
import { useState } from "react";
import { db } from "../firebaseConfig";

export const useFirestoreState = () => {
    const [data, setData] = useState([]);
    const [error, setError] = useState();
    const [loading, setLoading] = useState({});

    const addData = async ({name, model, producer, description, imageUrl}) => {
        try {
            const clientsCollectionRef = collection(db, "products");
            await addDoc(clientsCollectionRef, {name, model, producer, description, imageUrl});
        } catch (error) {
            setError(error.code);
            console.log(error)
        } 
    };

    const getData = async () => {
        try {
            setLoading((prev) => ({ ...prev, getData: true }));
            const q = query(collection(db, "products"), orderBy("name"));
            const querySnapshot = await getDocs(q);
            //const dados = querySnapshot.docs.map((doc) => ({...doc.data(), id: doc.id}));
            setData(querySnapshot.docs.map((doc) => ({...doc.data(), id: doc.id})));
        } catch (error) {
            setError(error.code);
        } finally {
            setLoading((prev) => ({ ...prev, getData: false }));
        }
    };

    const deleteData = async (id) => {
        try {
            setLoading((prev) => ({ ...prev, [id]: true }));
            const docRef = doc(db, "products", id);
            await deleteDoc(docRef);
            setData(data.filter((doc) => doc.id !== id));
        } catch (error) {
            console.log(error);
            setError(error.code);
        } finally {
            setLoading((prev) => ({ ...prev, [id]: false }));
        }
    };

    return { data, error, loading, getData, addData, deleteData };
};