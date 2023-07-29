import ButtonIcon from '@components/button-icon';
import { IconBand, InputTextStyled } from '@components/input-form-layout/input-text/styled';
import { IInputText, InputType } from '@components/input-form-layout/model';
import React, { FocusEvent, ChangeEvent, useCallback, useEffect, useState } from 'react';

const InputText = ({type = InputType.text, register, placeholder}: IInputText) => {
  const [value, setValue] = useState<string>('');
  const [cancel, setCancel] = useState<boolean>(false);
  const [eye, setEye] = useState<boolean>(false);
  const {onChange, onBlur, ref, name} = register;

  const handleBlur = (event: FocusEvent<HTMLInputElement>) => {
    setCancel(!!value)
    onBlur(event)
  };

  const handlerChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target?.value)
    onChange(event);
  }, []);

  const handlerCancel = useCallback(() => {
    setValue('');
    setCancel(false)
  }, []);

  const toggleEye = useCallback(() => {
    setEye(!eye);
  }, [eye]);

  return (
    <InputTextStyled>
      <input type={eye ? InputType.text : type}
             name={name}
             ref={ref}
             value={value}
             placeholder={placeholder}
             onChange={handlerChange} onBlur={handleBlur} />
      <IconBand>
        {type === InputType.password ? <ButtonIcon name={`eye_${eye ? 'open' : 'closed'}`} onClick={toggleEye}></ButtonIcon> : null}
        {cancel && <ButtonIcon name={'cancel'} onClick={handlerCancel}></ButtonIcon>}
      </IconBand>
    </InputTextStyled>
  )
}

export default InputText;
