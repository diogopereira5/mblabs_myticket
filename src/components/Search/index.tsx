import React from 'react';
import Icon from "@expo/vector-icons/Ionicons"

import {
    Container,
    Input
} from './styles';
import { colors } from '../../styles/colors';

function Search() {
    return (
        <Container>
            <Input placeholder="Faça uma busca" />
            <Icon name="search-outline" color={colors.gray1} size={22} />
        </Container>
    );
}

export default Search;