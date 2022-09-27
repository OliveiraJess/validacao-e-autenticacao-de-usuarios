import React from 'react';
import AuthForm from '../Login/AuthForm';
import AuthFormRegist from '../Login/AuthFormRegister';

import { Container } from './styles';

function Main() {
  return (
    <Container>
      {/* <img
        src=""
        height="256"
        alt="Dev Samurai"
      /> */}
      <h1>Título!</h1>
      <p>Template básico.</p>
      {/* <AuthFormRegist/> */}
      <AuthForm/>
    </Container>
  );
}

export default Main;
