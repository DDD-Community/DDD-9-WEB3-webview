import { IButtonUnderline } from '@components/button-underline/model';
import { ButtonUnderlineStyled } from '@components/button-underline/styled';

const ButtonUnderline = ({ children, buttonSize, onClick, onEnter }: IButtonUnderline) => {
  return (
    <ButtonUnderlineStyled size={buttonSize}
                           onClick={onClick}
                           onEnter={onEnter}>{children}</ButtonUnderlineStyled>
  )
}

export default ButtonUnderline;
