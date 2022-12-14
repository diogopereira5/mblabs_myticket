import React from 'react';
import Ionicons from "@expo/vector-icons/Ionicons";

import LogoImg from "../../assets/logo.png"
import {
    Button,
    Container,
    Title
} from './styles';
import { colors } from '../../styles/colors';
import { useNavigation } from '@react-navigation/native';

interface HeaderProps {
    title: string;
}

function HeaderSecundary({ title }: HeaderProps) {

    const navigation: any = useNavigation()

    return (
        <Container>
            <Button onPress={() => navigation.goBack()}>
                <Ionicons name="arrow-back" color={colors.white} size={24} />
            </Button>
            <Title>{title}</Title>
        </Container>
    );
}

export default HeaderSecundary;