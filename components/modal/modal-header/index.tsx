import { IModalHeader } from '@components/modal/modal-header/model';
import { modalHeaderStyled } from '@components/modal/modal-header/styled';
import { DialogTitle } from '@mui/material';

const ModalHeader = ({children}: IModalHeader) => {
  return (
    <DialogTitle sx={modalHeaderStyled}>
      {children}
    </DialogTitle>
  );
}

export default ModalHeader;
