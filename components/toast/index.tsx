import ButtonIcon from '@components/button-icon';
import { AlertStyled, ToastStyled } from '@components/toast/styled';
import useToastAction from '@hooks/use-toast';
import { Alert, Slide } from '@mui/material';
import Snackbar from '@mui/material/Snackbar';
import React, { useEffect, useMemo, useState } from 'react';
import { StyleSheetManager } from 'styled-components';

const Toast = () => {
  const {
    message,
    isToastOpen,
    toastStatus,
    autoHideDuration,
    anchorOrigin,
    toastComponent,
    toastPosition,
    onToastClose,
  } = useToastAction()

  useEffect(() => {
  }, [message])

  if (!isToastOpen) {
    return null;
  }

  return (
    <StyleSheetManager shouldForwardProp={prop => prop !== 'anchorOrigin'}>
      <ToastStyled anchorOrigin={anchorOrigin}
                   open={isToastOpen}
                   onClose={onToastClose}
                   message={message}
                   autoHideDuration={autoHideDuration}
                   offsety={toastPosition?.bottom}
                   key={JSON.stringify(anchorOrigin) + message}>
        <AlertStyled icon={<ButtonIcon name={toastStatus as string} />}>
          {toastComponent || message}
        </AlertStyled>
      </ToastStyled>
    </StyleSheetManager>

  )
}

export default Toast;


