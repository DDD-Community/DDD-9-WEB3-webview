import styled from 'styled-components';
import Dialog from '@mui/material/Dialog';


export const modalStyled = {
  '& .MuiBackdrop-root': {
    backgroundColor: 'rgba(0, 0, 0, 0.60)'
  },
  '& .MuiPaper-root': {
    borderRadius: '16px',
    width: '100%',
    minWidth: '345px'
  },
  '& .MuiDialogContent-root': {
    margin: '0 20px',
  },
  '& .MuiDialogActions-root': {
    padding: '24px 20px 20px'
  },
}

export const DialogStyled = styled(Dialog)`
`
