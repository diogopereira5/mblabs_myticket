import React from 'react';
import { ButtonBottom, Container, Detail, DetailsContent, Locale, LogoImage, Title, TopContent, Value } from './styles';

const EventCard: React.FC = () => {
    return (
        <Container>
            <TopContent>
                <LogoImage source={{ uri: "https://vejario.abril.com.br/wp-content/uploads/2022/05/Dia04_Mundo_CapitalInicial_ArielMartini_IHF_18.jpg" }} />
                <DetailsContent>
                    <Title>Rock</Title>
                    <Detail>Lorem ipsuma description of a product to tes for a buy to item and revi...</Detail>
                    <Locale>Espirito Santo</Locale>
                </DetailsContent>
            </TopContent>
            <ButtonBottom>
                <Value>R$ 123,45</Value>
            </ButtonBottom>
        </Container>
    );
}

export default EventCard;