import { IModalContent } from '@components/modal/modal-content/model';
import { modalContentStyled } from '@components/modal/modal-content/styled';
import { DialogContent } from '@mui/material';

const ModalContent = ({children}: IModalContent) => {
  return (
    <DialogContent dividers
                   sx={modalContentStyled}>
      {children}
    </DialogContent>
  );
}

export default ModalContent;
