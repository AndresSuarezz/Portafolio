import styled from "styled-components";

const imagenes = [
    {id:1,src: "./images/tecnologias/HTML5-LOGO.webp", alt: "HTML"},
    {id:2,src: "./images/tecnologias/CSS-LOGO.webp", alt: "CSS"},
    {id:3,src: "./images/tecnologias/JS-LOGO.webp", alt: "JS"},
    {id:4,src: "./images/tecnologias/REACT-LOGO.webp", alt: "React"},
    {id:5,src: "./images/tecnologias/BOOSTRAP-LOGO.webp", alt: "Boostrap"},
    {id:6,src: "./images/tecnologias/JAVA-LOGO.webp", alt: "Java"},
    {id:7,src: "./images/tecnologias/GIT-LOGO.webp", alt: "Git"},
]

const Section = styled.div`
  height: 100vh;
  display: flex;
`;

const Container = styled.div`
    width: 100%;
    display: flex;
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
                    <img key={imagen.id} className="imagen__tecnologia" src={imagen.src} alt={imagen.alt}/>
            )))} 
            </TecnologiasS>
        </Container>
    </Section>
  )
}

export default Tecnologias