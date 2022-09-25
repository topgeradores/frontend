import { useContext, useEffect } from "react";
import { UserContext } from "../context/UserProvider";
import { useFirestoreState } from "../hooks/useFirestoreState";
import { Subtitle } from "./Subtitle";

export const Clients = () => {
    const { data, loading, error, getData, deleteData } = useFirestoreState();    
    const { user } = useContext(UserContext);

    useEffect(() => {
        getData();
    }, []);

    const loadingData = loading.getData && <p>Loading data...</p>;
    const errorData = error && <p>{error}</p>;

    const handleDelete = async (id) => {
        await deleteData(id);
    };

    return (
        <>
            {loadingData}
            {errorData}
            {
                data.length > 0
                &&
                <>
                    <div id="clients" className="row text-center mt-1 mb-2">
                        <Subtitle
                            color="black"
                            text="Nossos Clientes" />
                    </div>

                    <div className="row">
                        {data?.map(({ id, name }) => (
                            <div key={id} className="col-sm-4 text-center">
                                <div className="alert alert-warning text-black" role="alert" >
                                    <i className="ph-handshake inline-block align-text-top" style={{ color: 'orange', fontSize: 24 }}></i>
                                    <span className="fs-5 fst-italic fw-bolder"> {name} </span>
                                    {
                                        user && <button 
                                                    className="btn btn-sm btn-outline-danger"
                                                    onClick={() => handleDelete(id)}
                                                >
                                                    <i className="ph-trash" style={{fontSize: 22}}></i>
                                                </button>
                                    }
                                </div>
                            </div>
                        ))}
                    </div>
                </>
            }
        </>
    )
}