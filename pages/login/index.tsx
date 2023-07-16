import ButtonUnderline from '@components/button-underline';
import { ButtonSize } from '@components/button/model';
import { CustomModal } from '@components/modal';
import useBottomSheetAction from '@hooks/use-bottom-sheet';
import useModalAction from '@hooks/use-modal';
import useToastAction from '@hooks/use-toast';
import LoginLayout from '@layout/login-layout';
import { NextPageWithLayout } from '@pages/_app';
import { LoginSignupAreaStyled, LoginStyled } from '@pages/login/styled';
import React, { useCallback, useEffect } from 'react';

const Login: NextPageWithLayout = () => {
  const {toggleDrawer} = useBottomSheetAction();
  const {message, setMessage, onOpen} = useToastAction();
  const {onOpenModal} = useModalAction();
  const handlerBottomSheet = useCallback(() => {
    toggleDrawer()
  }, []);
  const handlerToast = useCallback(() => {
    onOpen()
  }, []);

  useEffect(() => {
    setMessage('test toast');
  }, [message])

  const handlerModal = useCallback(() => {
    onOpenModal()
  }, []);


  return (
    <>
      <LoginStyled>
        <LoginSignupAreaStyled>
          <ButtonUnderline buttonSize={ButtonSize.fill}>Sign up with email</ButtonUnderline>
        </LoginSignupAreaStyled>

        <button onClick={handlerBottomSheet}>
          bottom sheet
        </button>
        <button onClick={handlerToast}>
          toast
        </button>
        <button onClick={handlerModal}>
          modal
        </button>
      </LoginStyled>
      <CustomModal>
        <CustomModal.header>aaaaa.</CustomModal.header>
        <CustomModal.content>bbbbb</CustomModal.content>
        <CustomModal.actions>
          ccccc
        </CustomModal.actions>
      </CustomModal>
    </>
  )
}


export default Login;

Login.getLayout = (page: React.ReactElement) => <LoginLayout>{page}</LoginLayout>
