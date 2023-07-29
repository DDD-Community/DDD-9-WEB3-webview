import { defaultFont } from '@styles/foundation/fonts';
import styled from 'styled-components';

export const InputTextStyled = styled.div`
  display: inline-flex;
  align-items: center;
  padding-bottom: 7px;
  border-bottom: 1px solid #EBEBEB;
  
  >input {
    width: 100%;
    border: none;
    outline: none;
    ${defaultFont({
      color: '#000',
      size: '16px',
      lineHeight: '21px;',
      letterSpacing: '-0.08px'
    })}

    &::placeholder {
      color: #BABABA;
    }
  }
`;

export const IconBand = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 14px;
`;
