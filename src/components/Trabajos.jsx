import styled from "styled-components";
import { useState } from "react";

const DataTrabajos = [
  {trabajo: "CHatGPT4Friends", url:"https://github.com/AndresSuarezz/chatGPT4Friends"},
  {trabajo: "TODOApp", url:"https://fronti-todo-app.netlify.app/"},
  {trabajo: "SeguimientoVeterinaria", url:"https://veterinaria-mascotas.netlify.app/"},
  {trabajo: "Pokeapi", url: "https://pokeapi-fronti.netlify.app/"},
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

  @media (max-width: 768px) {
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
  margin-left: 0 auto;

  @media (max-width: 768px) {
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
  position: relative;

  @media (max-width: 768px) {
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
  display: flex;
  flex: 1;
  justify-content: center;
  aling-items: center;
`;
//End Styled components

const Trabajos = () => {
  const [work, setWork] = useState();

  return (
    <Section id="trabajos">
      <Container>
        <Left>
          <List>
            {DataTrabajos.map((item) => (
              <ListItem key={item} text={item.trabajo} onClick={() => setWork(item.trabajo)}>
                <a className="a-trabajos" href={item.url}>{item.trabajo}</a>
              </ListItem>
            ))}
          </List>
        </Left>
        <Right>
          <div className="icon-github">
            <a
              href="https://github.com/AndresSuarezz"
            >
              <p>Todo en mi GitHub click!</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-brand-github-filled"
                width="40"
                height="40"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="#000000"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path
                  d="M5.315 2.1c.791 -.113 1.9 .145 3.333 .966l.272 .161l.16 .1l.397 -.083a13.3 13.3 0 0 1 4.59 -.08l.456 .08l.396 .083l.161 -.1c1.385 -.84 2.487 -1.17 3.322 -1.148l.164 .008l.147 .017l.076 .014l.05 .011l.144 .047a1 1 0 0 1 .53 .514a5.2 5.2 0 0 1 .397 2.91l-.047 .267l-.046 .196l.123 .163c.574 .795 .93 1.728 1.03 2.707l.023 .295l.007 .272c0 3.855 -1.659 5.883 -4.644 6.68l-.245 .061l-.132 .029l.014 .161l.008 .157l.004 .365l-.002 .213l-.003 3.834a1 1 0 0 1 -.883 .993l-.117 .007h-6a1 1 0 0 1 -.993 -.883l-.007 -.117v-.734c-1.818 .26 -3.03 -.424 -4.11 -1.878l-.535 -.766c-.28 -.396 -.455 -.579 -.589 -.644l-.048 -.019a1 1 0 0 1 .564 -1.918c.642 .188 1.074 .568 1.57 1.239l.538 .769c.76 1.079 1.36 1.459 2.609 1.191l.001 -.678l-.018 -.168a5.03 5.03 0 0 1 -.021 -.824l.017 -.185l.019 -.12l-.108 -.024c-2.976 -.71 -4.703 -2.573 -4.875 -6.139l-.01 -.31l-.004 -.292a5.6 5.6 0 0 1 .908 -3.051l.152 -.222l.122 -.163l-.045 -.196a5.2 5.2 0 0 1 .145 -2.642l.1 -.282l.106 -.253a1 1 0 0 1 .529 -.514l.144 -.047l.154 -.03z"
                  stroke-width="0"
                  fill="currentColor"
                />
              </svg>
            </a>
          </div>
        </Right>
      </Container>
    </Section>
  );
};

export default Trabajos;
