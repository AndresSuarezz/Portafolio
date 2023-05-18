import Hero from "./components/Hero";
import Who from "./components/Who";
import Trabajos from "./components/Trabajos";
import Contacto from "./components/Contacto";
import styled from "styled-components";

import "./App.css"

//Sytled components
const Container = styled.div`
  height: 100vh;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  overflow-y: auto;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
  color: white;
  background: radial-gradient(ellipse at bottom, #1B2735 0%, #090A0F 100%);
`
//End Styled components

function App() {
  return (
    <Container>
      <Hero />
      <Who />
      <Trabajos />
      <Contacto />
    </Container>
  );
}

export default App;
