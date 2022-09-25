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
                    text="Instalação e manutenção elétrica predial e residencial" 
                />
                <Card
                    position="offset-sm-4 col-sm-4"
                    url="https://res.cloudinary.com/top-geradores/image/upload/v1639758648/site/cyberspace.jpg"
                    alt="elétrica"
                    width="300"
                    height="150"
                />
            </div>
            <div className="row mt-4">
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
            <Clients/>
            <Products/>
            <Footer/>
        </>
    )
}