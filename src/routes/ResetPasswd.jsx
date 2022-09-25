import { Link } from "react-router-dom"

export const ResetPasswd = () => {
    return (
        <form>
            <div className="hv-center-v88 bg-light">
                <div className="card" style={{ width: '325px' }}>
                    <div className="card-body">
                        <div className="card-title text-center">
                            <i className="ph-envelope" style={{ fontSize: 54, color: 'blue' }}></i>
                            <h3>Redefinir senha</h3>
                        </div>
                        <div className="mb-3 card-text">
                            <input type="email" className="form-control" id="email" autoFocus required placeholder="E-mail" />
                        </div>
                        <div className="text-center">
                            <button type="submit" className="btn btn-outline-primary">Enviar</button>
                            <Link className="btn btn-outline-secondary ms-2" to="/login">Voltar</Link>
                        </div>
                    </div>
                </div>
            </div>

        </form>
    )
}