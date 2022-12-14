import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import {
    Container,
    Text
} from './styles';

interface ButtonProps extends TouchableOpacityProps {
    text: string
}

function Button({ text }: ButtonProps) {
    return (
        <Container>
            <Text>{text}</Text>
        </Container>
    );
}

export default Button;