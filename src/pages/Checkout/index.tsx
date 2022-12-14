import React from 'react';
import Background from '../../components/Background';
import Button from '../../components/Button';
import HeaderSecundary from '../../components/HeaderSecundary';

import {
    Container,
    CreditCardContainer,
    CreditCardBackGround1,
    CreditCardBackGround2,
    MainCreditCard,
    BrandLogo,
    NameCard,
    NumberCard,
    ButtonContent,
    Item,
    Text,
    Value,
    Content,
} from './styles';

const Checkout: React.FC = () => {
    return (
        <Background>
            <HeaderSecundary title="Checkout" />
            <Container>

                <CreditCardContainer>
                    <CreditCardBackGround1 />
                    <CreditCardBackGround2 />
                    <MainCreditCard>

                        <BrandLogo source={{ uri: "https://contents.hanzo.com.br/smartapps/loy/39/img_1657308138730-5002.png" }} />
                        <NumberCard>5164  2304  7898  4150</NumberCard>
                        <NameCard>Diogo dos Santos Pereira</NameCard>

                        <ButtonContent>
                            <Item>
                                <Text>Expiração</Text>
                                <Value>07/23</Value>
                            </Item>
                            <Item>
                                <Text>CVV</Text>
                                <Value>001</Value>
                            </Item>
                        </ButtonContent>
                    </MainCreditCard>
                </CreditCardContainer>

                <Content>
                    <Button text="Confirmar Pagamento" />
                </Content>

            </Container>
        </Background>
    );
}

export default Checkout;