import { IButtonUnderline } from '@components/button-underline/model';
import { ButtonUnderlineStyled } from '@components/button-underline/styled';

const ButtonUnderline = ({ children, buttonSize }: IButtonUnderline) => {
  return (
    <ButtonUnderlineStyled size={buttonSize}>{children}</ButtonUnderlineStyled>
  )
}

export default ButtonUnderline;
