import { IButtonText } from './model';
import { ButtonTextStyled } from './styled';
import React from 'react';

const ButtonText = ({ children,
                      buttonSize, buttonTheme,
                      disabled,
                      LeftComponent, RightComponent,
                      onClick, onEnter }: IButtonText) => {
  return (
    <ButtonTextStyled type={'button'}
                      size={buttonSize}
                      theme={buttonTheme}
                      disabled={disabled}
                      onClick={onClick}
                      onEnter={onEnter}>
      {LeftComponent && LeftComponent}
      {children}
      {RightComponent && RightComponent}
    </ButtonTextStyled>
  )
}

export default ButtonText;
