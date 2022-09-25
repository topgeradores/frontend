import { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserProvider";

export const Header = () => {
    const { user, logOutUser } = useContext(UserContext);
    const navegate = useNavigate();

    const handleLogout = async () => {
        try {
            await logOutUser();
            navegate("/");
        } catch (error) {
        }
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className="container-fluid">
                <NavLink className="navbar-brand brand-title" to="/">
                    <img 
                        src="https://res.cloudinary.com/top-geradores/image/upload/v1639701600/site/logotipo.png" 
                        alt="logotipo" 
                        height="35"/>
                </NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mt-2 mb-1 mb-lg-0">
                        {
                            !user
                                ? <>
                                    <li className="nav-item">
                                        <a className="nav-link" aria-current="page" href="/#clients">
                                            <i className="ph-users-three inline-block align-text-top" style={{fontSize: 22}}></i>
                                            <span> Clientes</span>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" aria-current="page" href="/#products">
                                            <i className="ph-lightning inline-block align-text-top" style={{fontSize: 22}}></i>
                                            <span> Produtos</span>
                                        </a>
                                    </li>
                                </>
                                : <>
                                    <li className="nav-item">
                                        <NavLink className="nav-link" aria-current="page" to="/new-client">
                                            <i className="ph-plus-circle inline-block align-text-top" style={{fontSize: 22}}></i>
                                            <span> Novo Cliente</span>
                                        </NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link" aria-current="page" to="/new-product">
                                            <i className="ph-plus-circle inline-block align-text-top" style={{fontSize: 22}}></i>
                                            <span> Novo Produto</span>
                                        </NavLink>
                                    </li>
                                </>
                        }

                        <li className="nav-item">
                            {
                                user
                                    ? <button className="nav-link btn" onClick={handleLogout}>
                                        <i className="ph-sign-out" style={{ fontSize: 24, color: 'white' }}></i>
                                    </button>
                                    : <NavLink className="nav-link" to="/login">
                                        <i className="ph-user-circle" style={{ fontSize: 24 }}></i>
                                    </NavLink>
                            }
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}   