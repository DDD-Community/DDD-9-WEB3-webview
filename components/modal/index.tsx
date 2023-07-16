import ModalActions from '@components/modal/modal-actions';
import ModalContent from '@components/modal/modal-content';
import ModalHeader from '@components/modal/modal-header';
import { IModal } from '@components/modal/model';
import { modalStyled } from '@components/modal/styled';
import useModalAction from '@hooks/use-modal';
import Dialog from '@mui/material/Dialog';

const Modal = ({children}: IModal) => {
  const {isOpenModal, onCloseModal} = useModalAction();

  return (
    <Dialog onClose={onCloseModal}
            open={isOpenModal}
            sx={modalStyled}>
      {children}
    </Dialog>
  )
}

export const CustomModal = Object.assign(Modal, {
  header: ModalHeader,
  content: ModalContent,
  actions: ModalActions
});
