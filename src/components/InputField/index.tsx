import React, { useState } from 'react';
import Icon from "@expo/vector-icons/Ionicons"

import {
    ButtonEye,
    Container,
    Input
} from './styles';
import { colors } from '../../styles/colors';
import { TextInputProps } from 'react-native';

interface InputFieldProps extends TextInputProps {
    isPassword?: boolean;
}

function InputField({ isPassword = false, ...rest }: InputFieldProps) {

    const [isHidden, setIsHidden] = useState(true);

    return (
        <Container>
            <Input
                {...rest}
                secureTextEntry={isHidden}
            />
            {
                isPassword &&
                <ButtonEye onPress={() => setIsHidden(!isHidden)}>
                    <Icon name="eye-off" color={colors.gray1} size={18} />
                </ButtonEye>
            }
        </Container>
    );
}

export default InputField;