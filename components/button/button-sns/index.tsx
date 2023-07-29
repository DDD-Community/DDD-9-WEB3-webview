import { IButtonSns } from './model';
import { ButtonSnsStyled } from './styled';
import React from 'react';

const ButtonSns = ({ children,
                     buttonSize, disabled,
                     LeftComponent, RightComponent,
                     onClick, onEnter }: IButtonSns) => {
  return (
    <ButtonSnsStyled size={buttonSize}
                     disabled={disabled}
                     onClick={onClick}
                     onEnter={onEnter}>
      {LeftComponent && LeftComponent}
      {children}
      {RightComponent && RightComponent}
    </ButtonSnsStyled>
  )
}

export default ButtonSns;
