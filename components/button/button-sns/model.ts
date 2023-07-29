import { TButtonSize, TButtonTheme } from '@components/button/model';
import React from 'react';

export interface IButtonSns {
  children: React.ReactNode;
  buttonSize: TButtonSize;
  LeftComponent?: React.ReactNode;
  RightComponent?:  React.ReactNode;
  disabled?: boolean;
  onClick?: (e?: MouseEvent | TouchEvent) => void;
  onEnter?: (e?: KeyboardEvent) => void;
}

export interface ButtonSnsStyledProps {
  size: TButtonSize;
  disabled?: boolean;
  onClick?: (e?: MouseEvent | TouchEvent) => void;
  onEnter?: (e?: KeyboardEvent) => void;
}
