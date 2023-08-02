import styled from "styled-components";
import { Link } from "react-router-dom";
import { cartas } from "../utilities/Utilities";
import "../css/Works.css";

const Section = styled.div`
  color: #fff;
`;

const Titulo = styled.h2`
  margin-top: 10px;
  text-align: center;
`;

const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 2rem;
  margin: 0;
  padding: 0;
  align-self: center;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;

const CardItem = styled.div`
  display: flex;
  padding: 1rem;
`;

const Card = styled.div`
  background-color: #161c25;
  border-radius: 0.25rem;
  box-shadow: 0 20px 40px -14px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

const CardImage = styled.img`
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  border-top-left-radius: 0.25rem;
  border-top-right-radius: 0.25rem;
  overflow: hidden;
  position: relative;
  transition: filter 0.5s cubic-bezier(0.43, 0.41, 0.22, 0.91);
  &::before {
    content: "";
    display: block;
    padding-top: 56.25%;
  }
  @media (min-width: 40rem) {
    &::before {
      padding-top: 66.6%;
    }
  }
`;

const CardContent = styled.div`
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
  padding: 1rem;
`;

const CardTitle = styled.p`
  font-size: 1.25rem;
  font-weight: 300;
  text-transform: uppercase;
  font-weight: bold;
  margin-bottom: 5px;
`;

const CardText = styled.p`
  flex: 1 1 auto;
  font-size: 0.875rem;
  line-height: 1.5;
  margin-bottom: 1.25rem;
`;

const Tecnologias = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 10px;
  gap: 4px;
`;

const Works = () => {
  return (
    <Section>
      <Titulo>Aqui puedes ver todos mis trabajos :3</Titulo>
      <Cards>
        {/* Carta */}
        {cartas.map((carta) => (
          <CardItem key={carta.id}>
            <Card>
              <CardImage src={carta.img} />
              <CardContent>
                <CardTitle>{carta.titulo}</CardTitle>
                <CardText>{carta.desc}</CardText>
                <Tecnologias key={carta.id}>{carta.tecnologias}</Tecnologias>
                <Link className="botonIr" to={carta.url}>
                  Visitar
                </Link>
              </CardContent>
            </Card>
          </CardItem>
        ))}
        {/* Fin Carta */}
      </Cards>
    </Section>
  );
};

export default Works;
