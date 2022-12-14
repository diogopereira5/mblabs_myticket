import styled from 'styled-components/native';
import Constants from 'expo-constants';
import { colors } from '../../styles/colors';

export const Container = styled.View`
  margin-top: ${Constants.statusBarHeight}px;
  padding: 20px 20px;
  

  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Title = styled.Text`
    font-weight: bold;
    font-size: 16px;
    color: ${colors.white};
    text-align: center;

    flex: 1;
`;

export const Button = styled.TouchableOpacity``;