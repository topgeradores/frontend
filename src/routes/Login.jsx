import { useNavigate } from "react-router-dom"
import { useContext, useState } from "react";
import { UserContext } from "../context/UserProvider";

export const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const { user, loginUser, logOutUser } = useContext(UserContext);
    const navegate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("processando form..." + email + password);
        try {
            await loginUser(email, password);
            navegate("/");
        } catch (error) {
            console.log(error.code);
        }
    };

    const handleLogout = async () => {
        try {
            await logOutUser();
            navegate("/");
        } catch (error) {
            console.log(error.code);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="hv-center-v88 bg-light">
                <div className="card" style={{width: '325px'}}>
                    <div className="card-body">
                        {
                            user
                                ? <>
                                    <div className="card-title text-center">
                                        <i className="ph-user-circle" style={{ fontSize: 54, color: 'blue' }}></i>
                                        <div className="card-text">
                                            <div className="text-center">
                                                <button className="btn btn-primary" onClick={logOutUser}>Logout</button>
                                            </div>
                                        </div>
                                    </div>
                                </>
                                : <>
                                    <div className="card-title text-center">
                                        <i className="ph-user-circle" style={{ fontSize: 54, color: 'blue' }}></i>
                                        <h3>Login</h3>
                                    </div>
                                    <div className="card-text">
                                        <div className="mb-3">
                                            <input
                                                type="email"
                                                className="form-control"
                                                placeholder="Usuário"
                                                autoFocus
                                                required
                                                autoComplete="false"
                                                onChange={(e) => setEmail(e.target.value)}
                                            />
                                        </div>
                                        <div className="mb-3">
                                            <input
                                                type="password"
                                                className="form-control"
                                                placeholder="Senha"
                                                onChange={(e) => setPassword(e.target.value)}
                                            />
                                        </div>
                                        <div className="text-center">
                                            <button
                                                type="submit"
                                                className="btn btn-outline-primary"
                                            >
                                                Acessar
                                            </button>
                                            
                                        </div>
                                    </div>
                                </>
                        }
                    </div>
                </div>
            </div>
        </form>
    )
}