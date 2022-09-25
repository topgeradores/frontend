import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { useState } from "react";
import { Link } from "react-router-dom"
import { storage } from "../firebaseConfig";
import { useFirestoreState } from "../hooks/useFirestoreStateProducts";

export const NewProduct = () => {
    const { addData } = useFirestoreState();
    const [name, setName] = useState("");
    const [model, setModel] = useState("");
    const [producer, setProducer] = useState("");
    const [description, setDescription] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    const [progressPorcent, setPorgessPorcent] = useState(0);

    const handleSaveImage = (event) => {
        event.preventDefault();

        const file = event.target[0]?.files[0];
        console.log(file);
        if (!file) return;

        const storageRef = ref(storage, `product/${file.name}`);
        const uploadTask = uploadBytesResumable(storageRef, file);

        uploadTask.on(
            "state_changed",
            (snapshot) => {
                const progress = Math.round(
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                );
                setPorgessPorcent(progress);
            },
            (error) => {
                alert(error);
            },
            () => {
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                    setImageUrl(downloadURL);
                });
            }
        );

        //
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        await addData({name, model, producer, description, imageUrl});
    };
    return (
        <div>
            <div className="hv-center-v88 bg-light">
                <div className="card">
                    <div className="card-header text-center">
                        <h5>Novo Produto</h5>
                    </div>
                    <div className="card-body">
                        <div className="card-text">
                            <form onSubmit={handleSaveImage}>
                                <div className="row">
                                    <div className="col-12">
                                        <label className="form-label">Foto do Produto</label>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-10">
                                        <input type="file" className="form-control" />
                                    </div>
                                    <div className="col-sm-2">
                                        <button className="btn btn-outline-success">Enviar</button>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-12">
                                        {!imageUrl && <p>{progressPorcent}%</p>}
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-12">
                                        {imageUrl && <img src={imageUrl} alt="Imagem" height={200} />}
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="card-text">
                            <form onSubmit={handleSubmit}>
                                <div className="row">
                                    <div className="col-sm-6">
                                        <input 
                                            id="name" 
                                            type="text" 
                                            className="form-control mb-2" 
                                            autoComplete="false"
                                            placeholder="Nome"
                                            onChange={e => setName(e.target.value)}
                                        />
                                    </div>
                                    <div className="col-sm-6">
                                        <input 
                                            id="model" 
                                            type="text" 
                                            className="form-control mb-2" 
                                            autoComplete="false"
                                            placeholder="Modelo"
                                            onChange={e => setModel(e.target.value)}
                                        />
                                    </div>
                                    <div className="col-sm-6">
                                        <input 
                                            id="producer" 
                                            type="text" 
                                            className="form-control mb-2" 
                                            autoComplete="false"
                                            placeholder="Fabricante"
                                            onChange={e => setProducer(e.target.value)}
                                        />
                                    </div>
                                    <div className="col-sm-6">
                                        <input 
                                            id="description" 
                                            type="text" 
                                            className="form-control mb-2" 
                                            autoComplete="false"
                                            placeholder="Descrição"
                                            onChange={e => setDescription(e.target.value)}
                                        />
                                    </div>
                                    <div className="col-12">
                                        {imageUrl && <button>Salvar</button>}
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}