import { TButtonSize } from '@components/button/model';
import React from 'react';


export interface IButtonUnderlineStyledProps {
  size: TButtonSize;
  onClick?: (e?: any) => any;
  onEnter?: (e?: any) => any;
}

export interface IButtonUnderline {
  children: React.ReactNode;
  buttonSize?: any;
  onClick?: (e?: any) => any;
  onEnter?: (e?: any) => any;
}
