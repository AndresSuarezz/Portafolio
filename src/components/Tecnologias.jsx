import styled from "styled-components";

const imagenes = [
    {src: "./images/tecnologias/HTML5-LOGO.webp", alt: "HTML"},
    {src: "./images/tecnologias/CSS-LOGO.webp", alt: "CSS"},
    {src: "./images/tecnologias/JS-LOGO.webp", alt: "JS"},
    {src: "./images/tecnologias/REACT-LOGO.webp", alt: "React"},
    {src: "./images/tecnologias/BOOSTRAP-LOGO.webp", alt: "Boostrap"},
    {src: "./images/tecnologias/JAVA-LOGO.webp", alt: "Java"},
    {src: "./images/tecnologias/GIT-LOGO.webp", alt: "Git"},
]

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
`;

const Container = styled.div`
    width: 100%;
    display: flex;
    aling-items: center;
    justify-content: center;
    gap: 20px;
    flex-direction: column;
    padding: 40px 0;
`

const TecnologiasS = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 20px;
    justify-content: center;
    align-items: center;
    @media (max-width: 768px) {
        grid-template-columns: repeat(3, 1fr);
    }
`
const Tecnologias = () => {
  return (
    <Section id="tecnologias">
        <Container>
            <h2 className="titulo__tecnologia">¿Que tecnologias uso?</h2>
            <TecnologiasS>
            {imagenes.map((imagen => (
                <img className="imagen__tecnologia" key={imagen} src={imagen.src} alt={imagen.alt}/>
            )))} 
            </TecnologiasS>
        </Container>
    </Section>
  )
}

export default Tecnologias