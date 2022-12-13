import styled from 'styled-components/native';
import Constants from 'expo-constants';
import { colors } from '../../styles/colors';

export const Container = styled.View`
  margin-top: ${Constants.statusBarHeight}px;
  padding: 20px 20px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled.Image`
    height: 40px;
    width: 40px;
`;

export const Title = styled.Text`
    font-weight: bold;
    font-size: 18px;
    text-transform: uppercase;
    color: ${colors.white};
`;

export const Button = styled.TouchableOpacity``;