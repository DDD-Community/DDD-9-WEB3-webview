import { InputDescriptionStyled } from '@components/input-form-layout/input-description/styled';
import { IInputDescription, InputDescriptionStatus } from '@components/input-form-layout/model';

const InputDescription = ({ children, status = InputDescriptionStatus.normal }: IInputDescription) => {
  return (
    <InputDescriptionStyled status={status}>{children}</InputDescriptionStyled>
  )
}

export default InputDescription;
