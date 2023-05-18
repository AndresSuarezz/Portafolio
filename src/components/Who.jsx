import styled from "styled-components";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Cube from "./Cube";

//Sytled components
const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const Left = styled.div`
  flex: 1;

  @media only screen and (max-width: 768px) {
   display: none; 
  }
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;

  @media only screen and (max-width: 768px) {
    align-items: center;
    text-align: center;
  }
`;
//End Styled components

const Who = () => {
  return (
    <Section id="yo">
      <Container>
        <Left>
          <Canvas camera={{fov:25, position:[5,5,5]}} >
            <OrbitControls enableZoom={false} autoRotate/>
            <ambientLight intensity={1} />
            <directionalLight position={[3, 2, 1]} />
            <Cube />
          </Canvas>
        </Left>
        <Right>
          <h2 className="title__message">¿Quien soy?</h2>
          <h2 className="info__message">Responsable - Amigable - Humilde</h2>
          {/* Descripcion */}
          <p className="desc__message">
            Soy Andres Suarez un joven Colombiano de Monteria, al que le gusta
            programar sus ideas, fascinado por aprender cosas nuevas, me
            desempeño como desarrollador FrontEnd y me siento muy comodo aqui,
            tambien se algunas cosas de backend, me gustra tabajar en equipo por
            la experiencia y porque se aprenden cosas nuevas.
          </p>
          <a
            href="https://www.linkedin.com/in/andres-felipe-suarez-gonzalez-4542b6193/"
            className="button__seemore"
          >
            Sobre mi
          </a>
        </Right>
      </Container>
    </Section>
  );
};

export default Who;
