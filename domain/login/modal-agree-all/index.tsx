import { IModalAgreeAll } from '@/domain/login/modal-agree-all/model';
import Toast from '@components/toast';
import { MessageStyled, ModalAgreeAllDesc } from './styled';
import { useForm } from 'react-hook-form';
import { ButtonText } from '@components/button';
import { ButtonSize, ButtonTheme } from '@components/button/model';
import Checkbox from '@components/checkbox';
import { CustomModal } from '@components/modal';
import useModal from '@hooks/use-modal';
import useToast from '@hooks/use-toast';
import useTranslation from 'next-translate/useTranslation';
import React, { useEffect } from 'react';

const ModalAgreeAll = () => {
  const { t } = useTranslation('common');
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    watch,
    reset
  } = useForm<IModalAgreeAll>()

  const { onCloseModal, isOpenModal, key } = useModal();
  const { onToastOpen, setToastComponent, setHideDuration, setToastPosition } = useToast();

  const handlerAgreeAll = (data: IModalAgreeAll) => {
    onToastOpen({
      toastPosition: { bottom: 218 },
      toastComponent: (<MessageStyled>
        <strong>Contents to receiving advertising notices</strong>
        <span>2023.06.02</span>
      </MessageStyled>)
    })
    reset();
    onCloseModal();
  }
  const isAgreeAl = watch('isAgreeAll')
  useEffect(() => {
  }, [isAgreeAl])
  return (
    <>
      <CustomModal key={key} backdrop={false}>
        <CustomModal.header>
          {t('@마케팅_알림_수신_동의@')}
        </CustomModal.header>
        <CustomModal.content>
          <ModalAgreeAllDesc>{t('@사랑의법정에서_제공하는_각종_혜택마케팅_정보_수신에_동의합니다@')}</ModalAgreeAllDesc>
          <Checkbox register={register('isAgreeAll', {required: true})} label={'Agree with all'} />
        </CustomModal.content>
        <CustomModal.actions>
          <ButtonText buttonSize={ButtonSize.fill}
                      buttonTheme={ButtonTheme.primary}
                      disabled={!isValid}
                      onClick={handleSubmit(handlerAgreeAll)}>Agree and continue</ButtonText>
        </CustomModal.actions>
      </CustomModal>
      <Toast />
    </>
  )
}

export default ModalAgreeAll
