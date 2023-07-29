import { checkboxStyled, formControlLabelStyled } from '@components/checkbox/styled';
import { ChangeEvent } from 'react';
import { ICheckbox } from './model';
import { Check } from '@mui/icons-material';
import { FormControlLabel } from '@mui/material';
import { Checkbox as MuiCheckbox } from '@mui/material';

const Checkbox = ({
                    register,
                    label,
                    checked,
                    disabled=false,
                    outline=false,
                    onCustomChange,
}: ICheckbox) => {
  const {onChange, ref, name} = register;
  const handlerChanged = (event: ChangeEvent<HTMLInputElement>) => {
    onCustomChange && onCustomChange(event);
    onChange(event);
  };

  // Object.assign(formControlLabelStyled, outline ? {alignItems: 'flex-start'} : {})

  return (
    <FormControlLabel control={
      <MuiCheckbox ref={ref}
                   checked={checked}
                   name={name}
                   disabled={disabled}
                   sx={checkboxStyled}
                   icon={outline ? <Check /> : undefined}
                   checkedIcon={outline ? <Check /> : undefined}
                   onChange={handlerChanged} />
    } label={label} sx={formControlLabelStyled} />
  )
}


export default Checkbox;
