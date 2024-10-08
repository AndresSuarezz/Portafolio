import styled from "styled-components";

//Sytled components
const Section = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const Left = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;

  @media (max-width: 768px) {
    display: none;
  }
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;

  @media (max-width: 768px) {
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
          {/*Imagen */}
          <div>
            <i className="astro fa-solid fa-user-astronaut"></i>
          </div>
        </Left>
        <Right>
          <h2 className="title__message">¿Quien soy?</h2>
          <h2 className="info__message">Responsable - Amigable - Humilde</h2>
          {/* Descripcion */}
          <p className="desc__message">
          Soy Andrés Suárez, un apasionado desarrollador FrontEnd de Montería, Colombia. Me encanta convertir ideas en código y disfruto aprender cosas nuevas. Me gusta trabajar en equipo por las experiencias compartidas y la oportunidad de aprender y crecer juntos.
          </p>
          <a
            href="https://www.linkedin.com/in/dev-fronti/"
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
