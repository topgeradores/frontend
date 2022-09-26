import { Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { Home } from "./routes/Home";
import { Login } from "./routes/Login";
import { ResetPasswd } from "./routes/ResetPasswd";
import { RequireAuth } from "./components/RequireAuth";
import { NewClient } from "./routes/NewClient";
import { NotFound } from "./routes/NotFound";
import { UserContext } from "./context/UserProvider";
import { useContext } from "react";
import { Register } from "./routes/Register";
import { NewProduct } from "./routes/NewProduct";

export const App = () => {
  const { user } = useContext(UserContext);
    if (user === false) return <p>Loading...</p>;

  return (
    <div className="container">
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/reset-pwd" element={<ResetPasswd />} />
        <Route
          path="/register"
          element={
            <RequireAuth>
              <Register/>
            </RequireAuth>
          }
        />
        <Route 
          path="/new-client" 
          element={
            <RequireAuth>
              <NewClient />
            </RequireAuth>         
          } />
          <Route
            path="/new-product"
            element={
              <RequireAuth>
                <NewProduct/>
              </RequireAuth>
            }
          />
        <Route path="*" element={<NotFound />} />
      </Routes>
      
    </div>
  )
}
