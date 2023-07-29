import { TButtonSize, TButtonTheme } from '@components/button/model';
import React from 'react';

export interface IButtonText {
  children: React.ReactNode;
  buttonSize: TButtonSize;
  buttonTheme: TButtonTheme;
  LeftComponent?: React.ReactNode;
  RightComponent?:  React.ReactNode;
  disabled?: boolean;
  onClick?: (e?: any) => any;
  onEnter?: (e?: any) => any;
}

export interface ButtonTextStyledProps {
  size: TButtonSize;
  theme: TButtonTheme;
  disabled?: boolean;
  onClick?: (e?: any) => any;
  onEnter?: (e?: any) => any;
}
