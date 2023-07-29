import { defaultFont } from '@styles/foundation/fonts';
import styled from 'styled-components';
import { DialogTitle } from '@mui/material';

export const ModalHeaderStyled = styled(DialogTitle)`
  padding: 20px var(--modal-header-padding-bottom, 20px);
  ${defaultFont({
    align: 'center',
    color: '#000',
    size: '17px',
    lineHeight: '22px',
    letterSpacing: '-0.0085px'
  })}
`
