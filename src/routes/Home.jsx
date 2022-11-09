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
      <div className="row">
        <Subtitle
          color="black"
          text="- Venda e instalação de Geradores"
        />
      </div>
      <div className="row">
        <Subtitle
          color="black"
          text="- Manutençao Preventiva e Corretiva"
        />
      </div>
      <div className="row">
        <Subtitle
          color="black"
          text="- Revitalizaçao elétrica e mecânica de Geradores"
        />
      </div>
      <div className="row">
        <Subtitle
          color="black"
          text="- Automação"
        />
      </div>
      <div className="row">
        <Subtitle
          color="black"
          text="- Instalação de chave de transferência de carga"
        />
      </div>
      <div className="row">
        <Subtitle
          color="black"
          text="- Abrigo para atenuação de ruído moderado ou crítico de Geradores"
        />
      </div>
      <div className="row">
        <Subtitle
          color="black"
          text="- Sistema de monitoramento remoto"
        />
      </div>
      <div className="row">
        <Subtitle
          color="black"
          text="- Aterramento e equipotencialização elétrica"
        />
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
