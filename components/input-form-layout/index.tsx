import InputDescription from '@components/input-form-layout/input-description';
import InputLabel from '@components/input-form-layout/input-label';
import InputNumber from '@components/input-form-layout/input-number';
import InputText from '@components/input-form-layout/input-text';
import { IInputFormLayout } from '@components/input-form-layout/model';
import { EmptyDescriptionStyled, InputFormLayoutStyled } from '@components/input-form-layout/styled';
import { useEffect, useState } from 'react';

const InputForm = ({ children }: IInputFormLayout) => {
  const [isDescription, setIsDescription] = useState(false);

  useEffect(() => {
    setIsDescription(children?.some(child => child?.type.name === 'InputDescription'))
  }, [children]);

  return (
    <InputFormLayoutStyled>
      {children}
      {!isDescription && <EmptyDescriptionStyled />}
    </InputFormLayoutStyled>
  )
}

export default InputForm;

export const InputFormLayout = Object.assign(InputForm, {
  label: InputLabel,
  text: InputText,
  number: InputNumber,
  description: InputDescription
})
