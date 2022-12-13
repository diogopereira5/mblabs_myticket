import styled from 'styled-components/native';
import { colors } from '../../styles/colors';

export const Container = styled.View`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Logo = styled.Image`
  height: 100px;
  width: 100px;
  margin-bottom: 20px;
`;

export const TitleApp = styled.Text`
  font-size: 34px;
  font-weight: 700;
  text-align: center;
  color: ${colors.white};
`;

export const FormContainer = styled.View`
  width: 80%;
  margin-top: 40px;
`;