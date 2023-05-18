import styled from "styled-components";
import ChatGpt4Friends from "./ChatGpt4Friends";
import { useState } from "react";

const DataTrabajos = [
  "CHatGPT4Friends"
];

//Sytled components
const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: 768px) {
   width: 100%;
   align-items: center; 
   flex-direction: column;
  }
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  aling-items: center;
  justify-content: center;
  margin-left: 40px;

  @media only screen and (max-width: 768px) {
    padding: 20px; 
  }
`;

const List = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 20px;
`;

const ListItem = styled.li`
  font-size: 80px;
  font-weight: bold;
  cursor: pointer;
  color: transparent;
  -webkit-text-stroke: 0.1px white;
  position: relative;

  @media only screen and (max-width: 768px) {
   font-size: 24px;
   color: white;
   -webkit-text-stroke: 0px;
  }

  ::after {
    content: "${(props) => props.text}";
    position: absolute;
    top: 0;
    left: 0;
    color: white;
    width: 0px;
    overflow: hidden;
    whitespace: nowrap;
  }

  &:hover {
    ::after {
      animation: moveText 0.8s linear both;
      @keyframes moveText {
        to {
          width: 100%;
        }
      }
    }
  }

`;

const Right = styled.div`
  flex: 1;
`;
//End Styled components

const Trabajos = () => {
  const [work, setWork] = useState("CHatGPT4Friends");

  return (
    <Section id="trabajos">
      <Container>
        <Left>
          <List>
            {DataTrabajos.map((item) => (
              <ListItem key={item} text={item} onClick={()=> setWork(item)}>
                {item}
              </ListItem>
            ))}
          </List>
        </Left>
        <Right>
          
          {work === "CHatGPT4Friends" ? (<ChatGpt4Friends />) : (console.log("No hay mas nada nada"))}
        </Right>
      </Container>
    </Section>
  );
};

export default Trabajos;
