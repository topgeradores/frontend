import { FooterLink } from "../components/FooterLink"
import { Subtitle } from "../components/Subtitle"

export const Footer = () => {
    const dtCurrent = new Date().getFullYear();
    return (
        <div className="bg-light">
            <div className="row mt-2">
                <Subtitle
                    color="black"
                    text="TOP GERADORES"
                />
            </div>
            <div className="row">
                <Subtitle
                    color="success"
                    text="Profissionais dedicados para seu negócio funcionar com eficiência."
                />
            </div>
            <div className="row mt-1">
                <FooterLink
                    color="success"
                    url="https://api.whatsapp.com/send?phone=5524993275577&text=Ola%20TOP%20GERADORES!%20Preciso%20de%20um%20atendimento."
                    icon="ph-whatsapp-logo"
                    title="Fale conosco agora mesmo"
                />
                <FooterLink
                    color="primary"
                    url="mailto:topgeradores.eng@gmail.com"
                    icon="ph-envelope"
                    title="Relate seu problema por e-mail"
                />
                <FooterLink
                    color="danger"
                    url="https://www.youtube.com/channel/UCWAXFrFy2I066QeiiN8dQFQ"
                    icon="ph-youtube-logo"
                    title="Nosso canal no Youtube"
                />
            </div>
            <div className="row">
                <Subtitle
                    color="black"
                    text="Atendemos no Rio de Janeiro, São Paulo e Minas Gerais."
                />
            </div>
            <div className="row">
                <div className="col-12 text-center">
                    <p>
                        <i className="ph-copyright inline-block align-text-top" style={{ fontSize: 22 }}/>
                        { dtCurrent }
                        <a className="btn" href="https://www.linkedin.com/in/brunoasdev" target="_blank">
                            <i className="ph-laptop inline-block align-text-top" style={{ fontSize: 20 }} />
                            <span> by Bruno Almeida</span>
                        </a>
                    </p>
                </div>
            </div>
        </div>
    )
}