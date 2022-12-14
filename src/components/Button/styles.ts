import styled from 'styled-components/native';
import { colors } from '../../styles/colors';

export const Container = styled.TouchableOpacity`
  background-color: ${colors.primary};
  display: flex;
  align-items: center;
  justify-content: center;

  height: 50px;
  border-radius: 5px;

  margin: 20px 0;
`;

export const Text = styled.Text`
    text-align: center;
    color: ${colors.white};
    font-size: 14px;
    font-weight: 700;
`;