import styled from 'styled-components/native';
import { colors } from '../../styles/colors';

export const Container = styled.View`
  background-color: ${colors.white};
  border-radius: 4px;
  padding: 0 14px;

  margin-bottom: 20px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Input = styled.TextInput`
    height: 50px;
    flex: 1;
`;

export const ButtonEye = styled.TouchableOpacity``;