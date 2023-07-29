import { TToastStyledProps } from '@components/toast/model';
import Snackbar from '@mui/material/Snackbar';
import { Alert } from '@mui/material';
import styled from 'styled-components';


export const ToastStyled = styled(Snackbar)<TToastStyledProps>`
  width: calc(100% - 5.333333333333334%);

  ${({ offsety }) => `
    bottom: ${offsety ?? 0}px !important;
  `}
  
  & .MuiPaper-root {
    border-radius: 8px;
  }
`

export const AlertStyled = styled(Alert)<any>`
  &.MuiPaper-root {
    align-items: center;
    width: 100%;
    min-width: 335px;
    padding:  12px;
    box-sizing: border-box;
    background-color: rgba(0, 0, 0, 0.78);
    border-radius: 15px;
  }
  & .MuiAlert-icon {
    align-items: center;
    padding: 0;
  }
  
  & .MuiAlert-message {
    padding: 0;
    color: #fff;
  }
`
