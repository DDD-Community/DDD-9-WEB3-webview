import { IInputNumber } from '@components/input-form-layout/model';

const InputNumber = ({ value }: IInputNumber) => {
  return (<input type='number' value={value}  />)
}

export default InputNumber;
