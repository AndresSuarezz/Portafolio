import styled from "styled-components";
import Navbar from "./layouts/Navbar";
import { MeshDistortMaterial, OrbitControls, Sphere } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

//Sytled components
const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  aling-items: center;
  justify-content: space-between;

  @media (max-width: 768px) {
    height: 200vh;
  }
`;

const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: space-between;

  @media (max-width: 768px) {
    width: 100%;
    flex-direction: column;
    aling-items: center;
    justify-content: center;
  }
`;

const Left = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  margin-left: 50px;

  @media (max-width: 768px) {
    flex: 1;
    align-items: center;
    margin-left: 0;
  }
`;

const Right = styled.div`
  flex: 2;
  position: relative;

  @media (max-width: 768px) {
    flex: 1;
    width: 100%;
  }
`;
//End Styled components

const Hero = () => {
  return (
    <Section>
      <Navbar />
      <Container>
        <Left>
          <h1 className="title__message">Pienso, hago, soluciono</h1>
          <h2 className="info__message">Desarrollador web</h2>
          <p className="desc__message">
            ¡Hola! Soy un desarrollador web <span>React</span>. Me gusta
            aprender nuevas tecnologías y aplicarlas en mis proyectos. Me
            considero una persona responsable, creativa, con facilidad de
            aprendizaje y trabajo en equipo.
          </p>
          <a
            href="https://github.com/AndresSuarezz"
            className="button__seemore"
          >
            Ver más
          </a>
        </Left>
        <Right>
          {/* <Canvas camera={{ fov: 25, position: [5, 5, 5] }}>
            <OrbitControls enableZoom={false} />
            <ambientLight intensity={2} />
            <directionalLight position={[3, 2, 1]} />
            <Sphere args={[1, 100, 200]} scale={1.8}>
              <MeshDistortMaterial
                color="#1B2735"
                attach="material"
                distort={0.5}
                speed={2}
              />
            </Sphere>
          </Canvas> */}
          <img className="moon__img" src="../images/moon.png" alt="moon hero" />
        </Right>
      </Container>
    </Section>
  );
};

export default Hero;
