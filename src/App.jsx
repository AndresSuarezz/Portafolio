import Hero from "./components/Hero";
import Who from "./components/Who";
import Trabajos from "./components/Trabajos";
import Contacto from "./components/Contacto";
import Tecnologias from "./components/Tecnologias";
import styled from "styled-components";
import "./App.css";

//Sytled components
const Container = styled.div`
  height: 100vh;
  scroll-behavior: smooth;
  &::-webkit-scrollbar {
    display: none;
  }
  color: white;
`;
//End Styled components

function App() {
  return (
    <Container>
      <Hero />
      <Who />
      <Tecnologias />
      <Trabajos />
      <Contacto />
    </Container>
  );
}

export default App;
