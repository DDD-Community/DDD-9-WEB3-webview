import ButtonIcon from '@components/button/button-icon';
import ButtonText from '@components/button/button-text';
import { ButtonStyled } from '@components/button/styled';
import React from 'react';
import { IButton } from './model';

const Button = ({children, buttonSize, buttonTheme, LeftComponent, RightComponent}: IButton) => {
  return (
    <ButtonStyled size={buttonSize}
                  theme={buttonTheme}>
      {LeftComponent && LeftComponent}
      {children}
      {RightComponent && RightComponent}
    </ButtonStyled>
  );
}

export const CustomButton = Object.assign(Button, {
  icon: ButtonIcon,
  text: ButtonText,
});
