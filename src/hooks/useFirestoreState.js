import { collection, getDocs, orderBy, query, doc, deleteDoc, addDoc } from "firebase/firestore";
import { useState } from "react";
import { db } from "../firebaseConfig";

export const useFirestoreState = () => {
    const [data, setData] = useState([]);
    const [error, setError] = useState();
    const [loading, setLoading] = useState({});

    const addData = async (name) => {
        try {
            const clientsCollectionRef = collection(db, "clients");
            await addDoc(clientsCollectionRef, {name});
        } catch (error) {
            setError(error.code);
            console.log(error)
        } 
    };

    const getData = async () => {
        try {
            setLoading((prev) => ({ ...prev, getData: true }));
            const q = query(collection(db, "clients"), orderBy("name"));
            const querySnapshot = await getDocs(q);
            const dados = querySnapshot.docs.map((doc) => ({...doc.data(), id: doc.id}));
            setData(dados);
        } catch (error) {
            setError(error.code);
        } finally {
            setLoading((prev) => ({ ...prev, getData: false }));
        }
    };

    const deleteData = async (id) => {
        try {
            setLoading((prev) => ({ ...prev, [id]: true }));
            const docRef = doc(db, "clients", id);
            await deleteDoc(docRef);
            setData(data.filter((doc) => doc.id !== id));
        } catch (error) {
            console.log(error);
            setError(error.code);
        } finally {
            setLoading((prev) => ({ ...prev, [id]: false }));
        }
    };

    return { data, error, loading, addData, getData, deleteData };
};