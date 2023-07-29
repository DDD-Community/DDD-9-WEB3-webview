import { InputLabelStyled } from '@components/input-form-layout/input-label/styled';
import { IInputLabel } from '@components/input-form-layout/model';

const InputLabel = ({ children }: IInputLabel) => {
  return (
    <InputLabelStyled>{children}</InputLabelStyled>
  )
}

export default InputLabel;
