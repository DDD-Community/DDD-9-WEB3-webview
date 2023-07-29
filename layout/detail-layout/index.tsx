import { CustomBottomSheet } from '@components/bottom-sheet';
import DetailHeader from '@components/layout/detail-header';
import Toast from '@components/toast';
import { IDetailLayout } from '@layout/detail-layout/model';
import { DetailLayoutContainerStyled, DetailLayoutStyled } from '@layout/detail-layout/styled';
import useTranslation from 'next-translate/useTranslation'
import { useRouter } from 'next/router'
import React from 'react';

const DetailLayout = ({ children, title }: IDetailLayout) => {
  const { t, lang } = useTranslation('common')
  const {asPath, back} = useRouter()

  return (
    <DetailLayoutStyled>
      <DetailHeader title={title} onClick={() => back()} />
      <DetailLayoutContainerStyled>{children}</DetailLayoutContainerStyled>
      <CustomBottomSheet>
        <CustomBottomSheet.header></CustomBottomSheet.header>
        <CustomBottomSheet.content></CustomBottomSheet.content>
      </CustomBottomSheet>
      <Toast />
    </DetailLayoutStyled>
  )
}

export default DetailLayout;
