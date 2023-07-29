import { IModalAgreeAll } from '@/domain/login/modal-agree-all/model';
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
    watch
  } = useForm<IModalAgreeAll>()

  const { onCloseModal } = useModal();

  const handlerConfirm = (data: IModalAgreeAll) => {
    console.log('adfadf', data);
    onCloseModal();
  }

  useEffect(() => {
  }, [])

  return (
    <CustomModal>
      <CustomModal.header>Check Your Email</CustomModal.header>
      <CustomModal.content>
        <ModalAgreeAllDesc>{t('@입력하신_이메일로_가입한_내역이_없습니다@')}</ModalAgreeAllDesc>
      </CustomModal.content>
      <CustomModal.actions>
        <ButtonText buttonSize={ButtonSize.fill}
                    buttonTheme={ButtonTheme.primary}
                    disabled={!isValid}
                    onClick={handleSubmit(handlerConfirm)}>confirm</ButtonText>
      </CustomModal.actions>
    </CustomModal>
  )
}

export default ModalAgreeAll
