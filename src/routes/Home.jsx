import { Alert } from "../components/Alert";
import { Card } from "../components/Card";
import { Clients } from "../components/Clients";
import { Products } from "../components/Products";
import { Subtitle } from "../components/Subtitle";
import { Footer } from "./Footer";

export const Home = () => {
  return (
    <>
      <Alert />
      <div className="row justify-content-sm-center text-center mb-2">
        <div className="col-sm-3">
          <span class="badge text-bg-primary fs-6">Oferecemos</span>
        </div>
      </div>
      
      <div className="row justify-content-sm-center text-center mb-4">
        <div className="col-sm-8">
          <ul className="list-group">
            <li className="list-group-item list-group-item-light">
              <strong style={{ fontSize: 17 }}>
                <i class="ph-atom align-middle" style={{ fontSize: 17 }} />
                <span> Venda e instalação de Geradores </span>
              </strong>
            </li>
            <li className="list-group-item list-group-item-light">
              <strong style={{ fontSize: 17 }}>
                <i class="ph-atom align-middle" style={{ fontSize: 17 }} />
                <span> Manutenção Preventiva e Corretiva</span>
              </strong>
            </li>
            <li className="list-group-item list-group-item-light">
              <strong style={{ fontSize: 17 }}>
                <i class="ph-atom align-middle" style={{ fontSize: 17 }} />
                <span> Revitalização elétrica e mecânica de Geradores</span>
              </strong>              
            </li>
            <li className="list-group-item list-group-item-light">
              <strong style={{ fontSize: 17 }}>
                <i class="ph-atom align-middle" style={{ fontSize: 17 }} />
                <span> Automação</span>
              </strong>              
            </li>
            <li className="list-group-item list-group-item-light">
              <strong style={{ fontSize: 17 }}>
                <i class="ph-atom align-middle" style={{ fontSize: 17 }} />
                <span> Instalação de chave de transferência de carga</span>
              </strong>              
            </li>
            <li className="list-group-item list-group-item-light">
              <strong style={{ fontSize: 17 }}>
                <i class="ph-atom align-middle" style={{ fontSize: 17 }} />
                <span> Abrigo para atenuação de ruído moderado ou crítico de Geradores</span>
              </strong>              
            </li>
            <li className="list-group-item list-group-item-light">
              <strong style={{ fontSize: 17 }}>
                <i class="ph-atom align-middle" style={{ fontSize: 17 }} />
                <span> Sistema de monitoramento remoto</span>
              </strong>              
            </li>
            <li className="list-group-item list-group-item-light">
              <strong style={{ fontSize: 17 }}>
                <i class="ph-atom align-middle" style={{ fontSize: 17 }} />
                <span> Aterramento e equipotencialização elétrica</span>
              </strong>              
            </li>
          </ul>
        </div>
      </div>

      <div className="row justify-content-sm-center">
        <Card
          position="col-sm-3"
          url="https://res.cloudinary.com/top-geradores/image/upload/v1665591558/site/quadro-aberto.jpg"
          alt="elétrica"
          width="260"
          height="180"
        />
        <Card
          position="col-sm-3"
          url="https://res.cloudinary.com/top-geradores/image/upload/v1665595610/site/quadro-fechado.jpg"
          alt="elétrica"
          width="260"
          height="180"
        />
      </div>
      <div className="row">
        <Subtitle
          color="black"
          text="Representamos as melhores marcas de geradores do mercado"
        />
      </div>
      <div className="row">
        <Card
          position="col-sm-4"
          url="https://res.cloudinary.com/top-geradores/image/upload/v1639768270/site/gerador1.png"
          alt="gerador 1"
          width="100%"
          height="200"
        />
        <Card
          position="col-sm-4"
          url="https://res.cloudinary.com/top-geradores/image/upload/v1639701858/site/gerador2.png"
          alt="gerador 2"
          width="100%"
          height="200"
        />
        <Card
          position="col-sm-4"
          url="https://res.cloudinary.com/top-geradores/image/upload/v1639752091/site/gerador3.png"
          alt="gerador 3"
          width="100%"
          height="200"
        />
      </div>
      <Clients />
      <Products />
      <Footer />
    </>
  );
};
