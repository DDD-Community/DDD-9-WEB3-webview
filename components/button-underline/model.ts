import { TButtonSize } from '@components/button/model';
import React from 'react';


export interface IButtonUnderlineStyledProps {
  size: TButtonSize;
}

export interface IButtonUnderline {
  children: React.ReactNode;
  buttonSize?: any;
}
