import React from 'react';


export interface IToastBottomPosition {
  bottom?: number;
  top?: number;
}

export const ToastStatus = {
  success: 'success',
  failed: 'failed',
} as const;

export type TToastStatus = keyof typeof ToastStatus;


export interface IToastState {
  toastComponent?: React.ReactNode;
  message?: string;
  isToastOpen?: boolean;
  autoHideDuration?: number;
  toastStatus?: TToastStatus;
  toastPosition?: IToastBottomPosition;
  anchorOrigin?: IAnchorOrigin;
}

export interface IToastAction {
  onToastOpen: (p: IToastState) => void;
  onToastClose: () => void;
  setMessage: (param: string) => void;
  setAnchorOrigin: (param: IAnchorOrigin) => void;
  setHideDuration: (param: number) => void;
  setToastComponent: (param?: React.ReactNode) => void;
  setToastPosition: (param: IToastBottomPosition) => void;
}

export const AnchorOriginVertical = {
  top: 'top',
  bottom: 'bottom'
} as const;
export type AnchorOriginVerticalType = keyof typeof AnchorOriginVertical;
export const AnchorOriginHorizontal = {
  center: 'center',
  left: 'left',
  right: 'right'
} as const;
export type AnchorOriginHorizontalType = keyof typeof AnchorOriginHorizontal;

export interface IAnchorOrigin {
  vertical: AnchorOriginVerticalType;
  horizontal: AnchorOriginHorizontalType;
}
