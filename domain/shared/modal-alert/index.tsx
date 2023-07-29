import { IModalAgreeAll } from '@/domain/login/modal-agree-all/model';
import { IModalAlert } from '@/domain/shared/modal-alert/model';
import { ButtonText } from '@components/button';
import { ButtonSize, ButtonTheme } from '@components/button/model';
import { CustomModal } from '@components/modal';
import useModal from '@hooks/use-modal';
import useTranslation from 'next-translate/useTranslation';
import React, { useEffect } from 'react';
import { ModalAgreeAllDesc } from './styled';

const ModalAlert = ({ title, desc, onClose=((v?: any) => v) }: IModalAlert) => {
  const { t } = useTranslation('common');

  const { onCloseModal } = useModal();

  const handlerConfirm = (data: IModalAgreeAll) => {
    onClose(true);
    onCloseModal();
  }

  useEffect(() => {
  }, [])

  return (
    <CustomModal>
      <CustomModal.header>{title}</CustomModal.header>
      <CustomModal.content>
        <ModalAgreeAllDesc>{desc}</ModalAgreeAllDesc>
      </CustomModal.content>
      <CustomModal.actions>
        <ButtonText buttonSize={ButtonSize.fill}
                    buttonTheme={ButtonTheme.secondary}
                    onClick={handlerConfirm}>CONFIRM</ButtonText>
      </CustomModal.actions>
    </CustomModal>
  )
}

export default ModalAlert
