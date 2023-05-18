import styled from "styled-components"
import MapChart from "./layouts/MapChart"
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

//Sytled components
const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
`

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  gap: 50px;
`

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  
  @media only screen and (max-width: 768px) {
    justify-content: center;
  }
`

const Titulo = styled.h2`
  font-size: 40px;
  font-weight: bold;
`

const Form = styled.form`
  width: 500px;
  display: flex;
  flex-direction: column;
  gap: 25px;

  @media only screen and (max-width: 768px) {
    width: 430px;
  }
`

const Input = styled.input`
  padding: 20px;
  border: none;
  border-radius: 5px;
`

const TextArea = styled.textarea`
  padding: 20px;
  border: none;
  border-radius: 5px;
`

const Button = styled.button`
  background-color: #1B2735;
  border: 1px solid #1B2735;
  color: white;
  padding: 15px;
  border-radius: 5px;
  font-weight: bold;
  cursor: pointer;
  transition: all .5s ease;

  &:hover {
    border: 1px solid white;
    background-color: white;
    color: #1B2735;
  }
`

const Right  = styled.div`
  flex: 1;

  @media only screen and (max-width: 768px) {
    display: none;
  }
`
//End Styled components


const Contacto = () => {
  const [success, setSuccess] = React.useState(null);

  const ref = useRef();
  const handleSubmit = (e) => {
    e.preventDefault()
    emailjs.sendForm('service_skr2inf', 'template_pprzqsd', ref.current, 'Bjba6TiMr6DEY56AC')
      .then((result) => {
          console.log(result.text);
          setSuccess(true)
      }, (error) => {
          console.log(error.text);
          setSuccess(false)
      });
  }

  return (
    <Section id="contacto">
      <Container>
        <Left>
          <Form ref={ref} onSubmit={handleSubmit}>
            <Titulo>Contactate conmigo 🐧</Titulo>
            <Input placeholder="Nombre" name="name"/>
            <Input placeholder="Email" name="email"/>
            <TextArea placeholder="Deja tu mensaje:)" rows={10} name="message"/>
            <Button type="submit">Enviar</Button>
            {success && <p>Gracias por tu mensaje!</p>}
          </Form>
        </Left>
        <Right>
          <MapChart />
        </Right>
      </Container>
    </Section>
  )
}

export default Contacto