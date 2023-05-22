import styled from "styled-components";

//Sytled components
const Section = styled.nav`
  display: flex;
  justify-content: center;
  
  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  aling-items: center;
  padding: 10px 0;

  @media only screen and (max-width: 768px) {
    width: 100%;
    padding: 10px 20px;
    align-items: center;
  }
`;

const Links = styled.div`
  display: flex;
  aling-items: center;
  gap: 20px;
`;

const List = styled.ul`
  display: flex;
  margin-top: 16px;
  gap: 20px;
  list-style: none;
  @media only screen and (max-width: 768px) {
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
    <Section>
      <Container>
        <Links>
          <p className="logo">Dev_Fronti</p>
        </Links>
        <List>
          <ListItem href="/">Inicio</ListItem>
          <ListItem href="#yo">¿Quien Soy?</ListItem>
          <ListItem href="#tecnologias">Tecnologias</ListItem>
          <ListItem href="#trabajos">Trabajos</ListItem>
          <ListItem href="#contacto">Contacto</ListItem>
        </List>
        <a href="#contacto" className="button__hire">Contratar!</a>
      </Container>
    </Section>
  );
};

export default Navbar;
