import { CustomBottomSheet } from '@components/bottom-sheet';
import Toast from '@components/toast';
import Image from 'next/image'
import { LoginLayoutHeaderStyled, LoginLayoutStyled } from '@layout/login-layout/styled';
import useTranslation from 'next-translate/useTranslation'
import FooterSiteMap from '@components/layout/footer-site-map';
import React from 'react';

const LoginLayout = ({ children }: { children: React.ReactNode}) => {
  const { t, lang } = useTranslation('common')

  console.log('lang', lang)

  return (
    <LoginLayoutStyled>
      <LoginLayoutHeaderStyled>
        {/*<Image src={'./logo/melting-heart.svg'} width={137} height={127} alt={''} />*/}
      </LoginLayoutHeaderStyled>
      <section>{children}</section>
      <FooterSiteMap></FooterSiteMap>
      <CustomBottomSheet>
        <CustomBottomSheet.header></CustomBottomSheet.header>
        <CustomBottomSheet.content></CustomBottomSheet.content>
      </CustomBottomSheet>
      <Toast />
    </LoginLayoutStyled>
  )
}

export default LoginLayout;
