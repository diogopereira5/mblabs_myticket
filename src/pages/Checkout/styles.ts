import styled from 'styled-components/native';
import { colors } from '../../styles/colors';

export const Container = styled.View`
  padding: 20px;
`;

export const CreditCardContainer = styled.View`
    height: 200px;

    display: flex;
    align-items: center;
`;

export const CreditCardBackGround1 = styled.View`
    height: 50px;
    background-color: ${colors.white};
    border-radius: 5px;

    width: 80%;

    box-shadow: 1px 1px 5px ${colors.gray1};
`;

export const CreditCardBackGround2 = styled.View`
    width: 90%;
    height: 50px;
    background-color: ${colors.white};
    border-radius: 5px;
    margin-top: -25px;

    box-shadow: 1px 1px 5px ${colors.gray1};
`;

export const MainCreditCard = styled.View`
    width: 100%;
    background-color: ${colors.white};
    border-radius: 5px;
    margin-top: -25px;

    box-shadow: 1px 1px 5px ${colors.gray1};
`;


export const BrandLogo = styled.Image`
    height: 40px;
    width: 60px;
`;

export const NameCard = styled.Text`
    color: ${colors.gray1}
`;

export const NumberCard = styled.Text``;

export const ButtonContent = styled.View``;

export const Item = styled.View``;

export const Text = styled.Text``;

export const Value = styled.Text``;