import ModalAgreeAll from '@/domain/login/modal-agree-all';
import AuthFacebook from '@components/auth/auth-facebook';
import AuthGoogle from '@components/auth/auth-google';
import { GoogleOAuthResponse } from '@components/auth/auth-google/model';
import { ButtonSns } from '@components/button';
import ButtonIcon from '@components/button-icon';
import { ButtonIconSize } from '@components/button-icon/model';
import ButtonUnderline from '@components/button-underline';
import { ButtonSize } from '@components/button/model';
import useModal from '@hooks/use-modal';
import useToast from '@hooks/use-toast';
import LoginLayout from '@layout/login-layout';
import PageTransition from '@layout/page-transition';
import { SnsList } from '@pages/api/auth/model';
import { LoginSignupAreaStyled } from '@pages/login/styled';
import { useAuthStore } from '@store/auth';
import { GetServerSideProps, GetServerSidePropsContext } from 'next';
import useTranslation from 'next-translate/useTranslation';
import { useRouter as useNavigationRouter } from 'next/navigation'
import React, { ForwardedRef, forwardRef, useEffect } from 'react';

const Login = (props: any, ref: ForwardedRef<HTMLDivElement>) => {
  const { t } = useTranslation('common');
  const navigationRouter = useNavigationRouter();
  const {fetchSignIn} = useAuthStore()
  const {onToastOpen} = useToast();
  const { onOpenModal } = useModal();
  const handlerSIgnInEmail =  (): void => {
    navigationRouter.push(`/login/sign-in`);
    // if (sign.title === 'email') {
    //   navigationRouter.push(`.${sign.link}`)
    //   // navigationRouter.push('./login/account-exists')
    //   return
    // }
    // onOpenModal();
  }

  const { fetchSnsIn, error, token, resetError } = useAuthStore()
  const handlerGoogle = ({ credential }: GoogleOAuthResponse) => {
    fetchSnsIn({
      provider: SnsList.GOOGLE,
      google: {
        access_token: credential
      }
    })
  }

  const handlerFacebook = () => {

  }

  useEffect(() => {
    if (token) {
      navigationRouter.push('/community')
    } else if (error?.statusCode) {
      resetError()
    }
  }, [token, error])

  const handlerEmailSignIn = () => {
    navigationRouter.push('./login/sign-up')
  }

  useEffect(() => {
    // onOpenModal();
  }, [])

  return (
    <>
      <PageTransition ref={ref} depth={0}>
        <LoginLayout>
          <ButtonSns buttonSize={ButtonSize.fill}
                     LeftComponent={<ButtonIcon size={ButtonIconSize.small} name={'open_email'} />}
                     onClick={handlerSIgnInEmail}>Sign in with email</ButtonSns>
          <AuthGoogle onGoogleLoggedIn={handlerGoogle} />
          <AuthFacebook onFacebookLoggedIn={handlerFacebook} />
          <LoginSignupAreaStyled>
            <ButtonUnderline buttonSize={ButtonSize.fill}
                             onClick={handlerEmailSignIn}>Sign up with email</ButtonUnderline>
          </LoginSignupAreaStyled>
        </LoginLayout>
      </PageTransition>
      <ModalAgreeAll key={Date.now()} />
    </>
  )
}

export default forwardRef(Login);

export const getServerSideProps: GetServerSideProps = async (context: GetServerSidePropsContext) => {
  const { req } = context;
  const  serverToken = req.cookies.token ?? null;

  return { props: { serverToken } };
}
