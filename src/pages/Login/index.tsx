import React from 'react';
import LogoApp from "../../assets/logo.png";
import Background from '../../components/Background';
import InputField from '../../components/InputField';

import {
  Logo,
  TitleApp,
  FormContainer,
  Container,
} from './styles';

const Login: React.FC = () => {
  return (
    <Background>

      <Container>

        <Logo source={LogoApp} />
        <TitleApp>MY TICKET</TitleApp>

        <FormContainer>
          <InputField placeholder='Seu e-mail' />
          <InputField placeholder='Sua senha secreta' isPassword />
        </FormContainer>

      </Container>

    </Background>
  );
}

export default Login;