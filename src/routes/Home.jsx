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
          text="- Venda de geradores"
        />
      </div>
      <div className="row">
        <Subtitle
          color="black"
          text="- Instalação, manutenção e automação"
        />
      </div>
      <div className="row">
        <Subtitle
          color="black"
          text="- Levantamento de cargas"
        />
      </div>
      <div className="row">
        <Subtitle
          color="black"
          text="- Sistema de telemetria"
        />
      </div>
      <div className="row">
        <Subtitle
          color="black"
          text="- Isolamento acústico"
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
