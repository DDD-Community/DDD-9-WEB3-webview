import ButtonIcon from '@components/button/button-icon';
import React from 'react';

export interface IButton {
  children: React.ReactNode;
  buttonTheme?: any;
  buttonSize?: any;
  LeftComponent?: React.ReactNode;
  RightComponent?:  React.ReactNode;
}

export const ButtonSize = {
  // small: 'small',
  // medium: 'medium',
  // large: 'large',
  custom: 'custom',
  fill: 'fill',
} as const;
export type TButtonSize = keyof typeof ButtonSize;

export const buttonTheme = {

} as const;

export interface ButtonStyledProps {
  size: TButtonSize;
  theme?: any;
}


export const ButtonIconSize = {
  small: 'small',
  medium: 'medium',
  large: 'large',
} as const;
export type TButtonIconSize = keyof typeof ButtonIconSize;

export interface IButtonIcon {
  name: string;
  size?: TButtonIconSize;
  children?: React.ReactNode;
}

export interface IButtonText {
  children: React.ReactNode;
}
