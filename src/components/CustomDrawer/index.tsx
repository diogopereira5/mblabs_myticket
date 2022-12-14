import React from 'react';
import Icon from "@expo/vector-icons/Ionicons";
import {
    DrawerContentScrollView,
    DrawerItemList
} from "@react-navigation/drawer";

import { colors } from '../../styles/colors';
import {
    Container,
    Button,
    TextButton
} from './styles';

function CustomDrawer(props) {

    return (
        <Container>
            <DrawerContentScrollView {...props}>

                <Button onPress={() => props.navigation.closeDrawer()}>
                    <Icon name="close" size={32} color={colors.background} />
                </Button>

                <DrawerItemList {...props} />

            </DrawerContentScrollView>

            <Button onPress={() => props.navigation.closeDrawer()}>
                <Icon name="log-out-outline" size={32} color={colors.background} />
                <TextButton>Sair</TextButton>
            </Button>

        </Container>
    );
}

export default CustomDrawer;