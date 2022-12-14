import React from 'react';
import { Platform } from 'react-native';

import LogoApp from "../../assets/logo.png";
import Background from '../../components/Background';
import Button from '../../components/Button';
import InputField from '../../components/InputField';

import {
  Logo,
  TitleApp,
  FormContainer,
  Container,
  ButtonOutline,
  TextButtonOutline,
} from './styles';

const Register: React.FC = () => {
  return (
    <Background>

      <Container>

        <Logo source={LogoApp} />
        <TitleApp>MY TICKET</TitleApp>

        <FormContainer behavior={Platform.OS === "ios" ? "padding" : "height"}>

          <InputField placeholder='Seu nome completo' />
          <InputField placeholder='Seu e-mail' />
          <InputField placeholder='Sua senha secreta' isPassword />

          <Button text="ENTRAR" />

          <ButtonOutline>
            <TextButtonOutline>Já possui conta? Acesse</TextButtonOutline>
          </ButtonOutline>

        </FormContainer>

      </Container>

    </Background>
  );
}

export default Register;