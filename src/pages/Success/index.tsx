import React from 'react';
import Icon from "@expo/vector-icons/Ionicons"

import Background from '../../components/Background';
import HeaderSecundary from '../../components/HeaderSecundary';

import {
  Container,
  Title,
  Content,
  IconContent,
  Subtitle,
  Text,
  ContentTitle,
} from './styles';
import { colors } from '../../styles/colors';

const Success: React.FC = () => {
  return (
    <Background>
      <HeaderSecundary title="Checkout" />

      <Container>

        <ContentTitle>
          <Title>Obrigado!</Title>
        </ContentTitle>

        <Content>
          <IconContent>
            <Icon name="checkmark" color={colors.white} size={60} />
          </IconContent>

          <Subtitle>Compra realizada com sucesso!</Subtitle>
          <Text>{`Você receberá seu ticket por email em alguns minutos. \nTenha um ótimo evento!`}</Text>
        </Content>
      </Container>
    </Background>
  );
}

export default Success;