import { defaultFont } from '@styles/foundation/fonts';
import styled from 'styled-components';


export const MessageStyled = styled.p`
  display: inline-flex;
  flex-direction: column;
  > strong {
    font-size: 14px;
    font-weight: 600;
  }
  > span {
    font-weight: 400;
  }
  ${defaultFont({
    color: '#fff',
    lineHeight: '18px',
    letterSpacing: '-0.5px',
  })}
`

export const ModalAgreeAllDesc = styled.p`
  margin-bottom: 24px;
  ${defaultFont({
    color: 'rgba(0, 0, 0, 0.50)',
    align: 'center',
    size: '13px',
    weight: 400,
    lineHeight: '18px',
    letterSpacing: '-0.065px',
  })}
`
