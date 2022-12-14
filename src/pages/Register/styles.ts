import styled from 'styled-components/native';
import { colors } from '../../styles/colors';

export const Container = styled.View`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Logo = styled.Image`
  height: 85px;
  width: 85px;
  margin-bottom: 20px;
`;

export const TitleApp = styled.Text`
  font-size: 24px;
  font-weight: 700;
  text-align: center;
  color: ${colors.white};
`;

export const FormContainer = styled.KeyboardAvoidingView`
  width: 80%;
  padding-top: 40px;
  margin-bottom: 80px;
`;

export const ButtonOutline = styled.TouchableOpacity``;

export const TextButtonOutline = styled.Text`
  color: ${colors.white};
  font-size: 15px;
  text-align: center;
`;