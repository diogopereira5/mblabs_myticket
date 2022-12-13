import React from 'react';
import { ButtonBottom, Container, Detail, DetailsContent, Locale, LogoImage, Title, TopContent, Value } from './styles';

interface CardProps {
    title: string,
    desc: string,
    locale: string,
    image: string
}

function EventCard({ title, desc, locale, image }: CardProps) {
    return (
        <Container>
            <TopContent>
                <LogoImage source={{ uri: image }} />
                <DetailsContent>
                    <Title>{title}</Title>
                    <Detail>{desc}</Detail>
                    <Locale>{locale}</Locale>
                </DetailsContent>
            </TopContent>
            <ButtonBottom>
                <Value>R$ 123,45</Value>
            </ButtonBottom>
        </Container>
    );
}

export default EventCard;