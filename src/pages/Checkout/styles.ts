import styled from 'styled-components/native';
import { colors } from '../../styles/colors';

export const Container = styled.View`
  padding: 20px;

  display: flex;
  flex: 1;
  justify-content: center;
`;

export const Content = styled.View`
    flex: 1;
`;

export const CreditCardContainer = styled.View`
    height: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
`;

export const CreditCardBackGround1 = styled.View`
    height: 40px;
    background-color: ${colors.white};
    border-radius: 5px;

    width: 80%;

    box-shadow: 1px 1px 5px ${colors.gray1};
`;

export const CreditCardBackGround2 = styled.View`
    width: 90%;
    height: 45px;
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
    padding: 20px;

    box-shadow: 3px 3px 5px ${colors.gray1};
`;


export const BrandLogo = styled.Image`
    height: 40px;
    width: 60px;
    margin-bottom: 10px;
`;

export const NameCard = styled.Text`
    color: ${colors.gray1};

    margin-bottom: 10px;
`;

export const NumberCard = styled.Text`
    font-size: 18px;
    font-weight: bold;
    font-style: italic;

    margin-bottom: 10px;
`;

export const ButtonContent = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

export const Item = styled.View`
    flex: 1;
`;

export const Text = styled.Text`
    font-size: 12px;
`;

export const Value = styled.Text`
    font-weight: 700;
`;