import { IModalContent } from '@components/modal/modal-content/model';
import { ModalContentStyled } from '@components/modal/modal-content/styled';

const ModalContent = ({children, dividers = false}: IModalContent) => {
  return (
    <ModalContentStyled dividers={dividers}>
      {children}
    </ModalContentStyled>
  );
}

export default ModalContent;
