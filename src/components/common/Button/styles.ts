import { TouchableOpacity, TouchableOpacityProps } from 'react-native';
import styled from 'styled-components/native';

export const ButtonWrapper = styled(
  TouchableOpacity,
).attrs<TouchableOpacityProps>({
  activeOpacity: 0.8,
})`
  width: 100%;
  height: 50px;
  padding: 0 14px;
  border-radius: 20px;
  background: ${({ theme }) => theme.colors.background};
  justify-content: center;
  align-items: center;
`;

export const ButtonText = styled.Text`
  font-size: 18px;
  color: ${({ theme }) => theme.colors.text};
`;
