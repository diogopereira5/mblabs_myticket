import styled from 'styled-components/native';
import { colors } from '../../styles/colors';

export const Container = styled.View`
  display: flex;
  flex: 1;
`;

export const ContentTitle = styled.View`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Title = styled.Text`
    text-align: center;
    color: ${colors.white};
    font-size: 28px;
    font-weight: 700;
`;

export const Content = styled.View`
    background-color: ${colors.white};
    flex: 1.2;
    padding: 20px;

    display: flex;
    align-items: center;
    justify-content: center;

    border-top-left-radius: 50px;
    border-top-right-radius: 50px;

    box-shadow: 0px 0px 10px #0005;
`;

export const IconContent = styled.View`
    background-color: ${colors.background};
    height: 80px;
    width: 80px;
    border-radius: 40px;

    display: flex;
    align-items: center;
    justify-content: center;

    margin-bottom: 10%;
`;

export const Subtitle = styled.Text`
    text-align: center;
    margin-bottom: 10%;

    font-weight: 700;
`;

export const Text = styled.Text`
    text-align: center;
    font-size: 12px;
    color: ${colors.gray1};
`;