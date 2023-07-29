import { IModalHeader } from '@components/modal/modal-header/model';
import { ModalHeaderStyled } from './styled';

const ModalHeader = ({children}: IModalHeader) => {
  return (
    <ModalHeaderStyled>{children}</ModalHeaderStyled>
  );
}

export default ModalHeader;
