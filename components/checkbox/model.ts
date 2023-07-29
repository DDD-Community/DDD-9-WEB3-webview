import { SvgIconComponent } from '@mui/icons-material';
import { UseFormRegisterReturn } from 'react-hook-form';
import React, { ChangeEvent } from 'react';

export interface ICheckbox {
  label?: string;
  disabled?: boolean;
  checked?: boolean;
  register: UseFormRegisterReturn;
  outline?: boolean;
  onCustomChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}
