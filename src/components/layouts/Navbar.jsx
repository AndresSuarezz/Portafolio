import { Link, Outlet } from "react-router-dom";
import styled from "styled-components";

//Sytled components
const Section = styled.nav`
  display: flex;
  justify-content: center;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  /* align-items: center; */
  padding: 10px 0;

  @media (max-width: 768px) {
    width: 100%;
    padding: 10px 20px;
    align-items: center;
  }
`;

const Links = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const List = styled.ul`
  display: flex;
  margin-top: 16px;
  gap: 20px;
  list-style: none;
  @media (max-width: 768px) {
    display: none;
  }
`;

const ListItem = styled.a`
  color: white;
  cursor: pointer;
`;
//End Styled components

const Navbar = () => {
  return (
    <>
      <Section>
        <Container>
          <Links>
            <p className="logo">{"<Fronti_Dev/>"}</p>
          </Links>
          <List>
            <Link to={"/"}>Inicio</Link>
            <ListItem href="#yo">¿Quien Soy?</ListItem>
            <ListItem href="#tecnologias">Tecnologias</ListItem>
            <Link to="/trabajos">Trabajos</Link>
            <ListItem href="#contacto">Contacto</ListItem>
          </List>
          <a href="#contacto" className="button__hire">
            Contratar!
          </a>
        </Container>
      </Section>
      <Outlet />
    </>
  );
};

export default Navbar;
