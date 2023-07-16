import { IButtonIcon, IButtonText } from '@components/button/model';

const ButtonText = ({ children }: IButtonText) => {
  return (
    <span>{children}</span>
  )
}

export default ButtonText;
