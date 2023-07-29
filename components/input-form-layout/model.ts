import React from 'react';
import { FieldValues, UseFormRegister, UseFormRegisterReturn } from 'react-hook-form';

export interface IInputFormLayout {
  children: (React.ReactNode & { type: { name: string} })[];
}

export interface IInputLabel {
  children: React.ReactNode;
}

export const InputDescriptionStatus = {
  normal: 'normal',
  error: 'error'
} as const;
export type TInputDescriptionStatus = keyof typeof InputDescriptionStatus;
export interface IInputDescription {
  children: React.ReactNode;
  status?: TInputDescriptionStatus;
}
export interface InputDescriptionStatusStyled {
  state: TInputDescriptionStatus
}

export const InputType = {
  text: 'text',
  password: 'password',
} as const;
export type TInputType = keyof typeof InputType;

export interface IInputText {
  type: TInputType;
  placeholder?: string;
  register: UseFormRegisterReturn
}

export interface IInputNumber {
  value: string;
}

