import ModalActions from '@components/modal/modal-actions';
import ModalContent from '@components/modal/modal-content';
import ModalHeader from '@components/modal/modal-header';
import { IModal } from '@components/modal/model';
import { DialogStyled, modalStyled } from '@components/modal/styled';
import useModalAction from '@hooks/use-modal';
import { useEffect } from 'react';

const Modal = ({children, backdrop=false, keepMounted=false}: IModal) => {
  const { isOpenModal, onCloseModal, key } = useModalAction();
  if (!isOpenModal) {
    return null;
  }

  return (
    <DialogStyled key={key}
                  onClose={backdrop ? onCloseModal : () => {}}
                  open={isOpenModal}
                  keepMounted={keepMounted}
                  sx={modalStyled}>
      {children}
    </DialogStyled>
  )
}

export const CustomModal = Object.assign(Modal, {
  header: ModalHeader,
  content: ModalContent,
  actions: ModalActions
});
