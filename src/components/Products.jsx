import { useContext, useEffect } from "react";
import { UserContext } from "../context/UserProvider";
import { useFirestoreState } from "../hooks/useFirestoreStateProducts";

export const Products = () => {
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
      {data.length > 0 && (
        <>
          <div id="products" className="row justify-content-sm-center text-center mb-2">
            <div className="col-sm-3">
              <span class="badge text-bg-primary fs-6">Nossos Produtos</span>
            </div>
          </div>

          <div className="row">
            {data?.map(
              ({ id, name, model, imageUrl, producer, description }) => (
                <div key={id} className="col-sm-4">
                  <div className="card">
                    <div className="card-header text-center">
                      <h5>
                        {name} {producer}
                      </h5>
                    </div>
                    <div className="card-body">
                      <div className="row">
                        <div className="col-sm-5 hv-center">
                          <img
                            src={imageUrl}
                            alt={`${name} + ${model}`}
                            height={100}
                            width="100%"
                          />
                        </div>
                        <div className="col-sm-7">
                          <div className="row">
                            <div className="col-12">
                              <p>
                                Modelo: <strong>{model}</strong>
                              </p>
                              <p>Descrição: {description}</p>
                              {user && (
                                <button
                                  className="btn btn-sm btn-outline-danger"
                                  onClick={() => handleDelete(id)}
                                >
                                  <i
                                    className="ph-trash"
                                    style={{ fontSize: 22 }}
                                  ></i>
                                </button>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )
            )}
          </div>
        </>
      )}
    </>
  );
};
