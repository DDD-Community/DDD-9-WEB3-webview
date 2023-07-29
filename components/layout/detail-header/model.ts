import React, { TouchEvent, MouseEvent } from 'react';

export interface IDetailHeader {
  children?: React.ReactNode;
  title?: string;
  action?: 'back' | 'close'
  onClick?: (event: TouchEvent | MouseEvent) => void;
}
