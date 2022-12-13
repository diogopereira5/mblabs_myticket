import React from 'react';
import Ionicons from "@expo/vector-icons/Ionicons";

import LogoImg from "../../assets/logo.png"
import {
    Button,
    Container,
    Logo,
    Title
} from './styles';
import { colors } from '../../styles/colors';
import { useNavigation } from '@react-navigation/native';

function Header() {

    const navigation: any = useNavigation()

    return (
        <Container>
            <Logo source={LogoImg} />
            <Title>MY TICKET</Title>
            <Button onPress={() => navigation.openDrawer()}>
                <Ionicons name="menu" color={colors.white} size={40} />
            </Button>
        </Container>
    );
}

export default Header;