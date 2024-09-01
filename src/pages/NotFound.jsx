import { Link } from "react-router-dom";
import styled from "styled-components";
import "../css/Works.css";

const Section = styled.div`
  color: #fff;
  width: 50%;
  padding: 80px 0 0 100px;
`;

const Titulo = styled.h2`
  margin-top: 10px;
  text-align: left;
  margin-bottom: 5px;
  font-size: 5rem;
`;

const Parrafo = styled.p`
  font-size: 1.5rem;
  text-align: left;
  margin-bottom: 20px;
`;

const NotFound = () => {
  return (
    <Section>
      <Titulo>Página no encontrada</Titulo>
      <Parrafo>La página que estás buscando no existe.</Parrafo>
      <Link className="botonIr" to="/">
        Volver a la página de inicio
      </Link>
    </Section>
  );
};

export default NotFound;
