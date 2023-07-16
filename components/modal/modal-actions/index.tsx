import { IModalActions } from './model';
import { modalActionsStyled } from './styled';
import { DialogActions } from '@mui/material';

const ModalActions = ({children}: IModalActions) => {
  return (
    <DialogActions sx={modalActionsStyled}>
      {children}
    </DialogActions>
  );
}

export default ModalActions;
