import { Dimensions } from 'react-native';
import styled from 'styled-components/native';
import { colors } from '../../styles/colors';

export const Container = styled.View`
    display: flex;
    margin-bottom: 20px;
`;

export const TopContent = styled.View`
    display: flex;
    flex-direction: row;
`;

export const LogoImage = styled.Image`
    flex: 0.8;
    height: ${Dimensions.get("window").width / 3};
    border-top-left-radius: 5px;
`;

export const DetailsContent = styled.View`
    flex: 1;
    background-color: ${colors.white};
    padding: 14px 0 0 14px;
    border-top-right-radius: 5px;
`;

export const Title = styled.Text`
    font-size: 14px;
    font-weight: bold;
`;

export const Detail = styled.Text`
    font-size: 10px;
    color: ${colors.textSecundary};
    margin: 5% 0;
`;

export const Locale = styled.Text`
    font-size: 10px;
    color: ${colors.textSecundary};
    font-weight: bold;
`;

export const ButtonBottom = styled.TouchableOpacity`
    background-color: ${colors.primary};
    height: 38px;

    display: flex;
    align-items: center;
    justify-content: center;

    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
`;

export const Value = styled.Text`
    color: ${colors.white};
    font-size: 11px;
    font-weight: bold;
`;
