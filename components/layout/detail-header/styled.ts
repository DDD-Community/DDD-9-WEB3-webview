import { defaultFont } from '@styles/foundation/fonts';
import styled from 'styled-components';

export const DetailHeaderStyled = styled.header`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 5px;
  padding: 10px 20px;
  
  > strong {
    ${defaultFont({
      fontFamily: 'poppins',
      color: '#000',
      size: '20px',
      lineHeight: '20px',
      letterSpacing:'-0.1px',
    })}
  }
`
