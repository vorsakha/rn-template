import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import { ButtonText, ButtonWrapper } from './styles';

function Button({ children, ...rest }: TouchableOpacityProps) {
  return (
    <ButtonWrapper {...rest}>
      <ButtonText>{children}</ButtonText>
    </ButtonWrapper>
  );
}

export default Button;
