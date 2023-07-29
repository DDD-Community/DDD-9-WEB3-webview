import DetailHeader from '@components/layout/detail-header';
import FooterSiteMap from '@components/layout/footer-site-map';
import Toast from '@components/toast';
import { LoginLayoutContentStyled, LoginLayoutHeaderStyled, LoginLayoutStyled } from '@layout/login-layout/styled';
import useTranslation from 'next-translate/useTranslation'
import Image from 'next/image'
import React from 'react';


const LoginLayout = ({ children }: { children: React.ReactNode}) => {
  const { t, lang } = useTranslation('common');
  const handlerClose = () => {
  }

  return (
    <LoginLayoutStyled>
      <DetailHeader action={'close'} onClick={handlerClose}></DetailHeader>
      <LoginLayoutContentStyled>{children}</LoginLayoutContentStyled>
      <FooterSiteMap />
      <Toast />
    </LoginLayoutStyled>
  )
}

export default LoginLayout;
