import { useState } from "react";
import { Link } from "react-router-dom"
import { useFirestoreState } from "../hooks/useFirestoreState";

export const NewClient = () => {
    const { addData } = useFirestoreState();
    const [name, setName] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        await addData(name);
        setName("");
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="hv-center-v88 bg-light">
                <div className="card" style={{ width: '325px' }}>
                    <div className="card-header text-center">
                        <h5>Novo Cliente</h5>
                    </div>
                    <div className="card-body">
                        <div className="card-text">
                            <div className="mb-3">
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    placeholder="Nome fantasia" 
                                    required 
                                    autoFocus 
                                    autoComplete="false" 
                                    value={name}
                                    onChange={e => setName(e.target.value)}
                                />
                            </div>
                            <div className="text-center">
                                <button 
                                    type="submit" 
                                    className="btn btn-outline-primary"
                                >
                                    Salvar
                                </button>
                                <Link 
                                    className="btn btn-outline-secondary ms-2" 
                                    to="/"
                                >
                                    Cancelar
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    )
}