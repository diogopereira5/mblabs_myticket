import styled from 'styled-components/native';

export const Container = styled.View`
  display: flex;
  flex: 1;
  padding: 20px;
`;

export const Button = styled.TouchableOpacity`
    padding: 0 10px;
    margin-bottom: 20px;

    display: flex;
    flex-direction: row;
    align-items: center;
`;

export const TextButton = styled.Text`
    margin-left: 5px;
`;