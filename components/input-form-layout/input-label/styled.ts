import { defaultFont } from '@styles/foundation/fonts';
import styled from 'styled-components';

export const InputLabelStyled = styled.label<any>`
  ${defaultFont({
    color: '#000',
    size: '14px',
    lineHeight: '19px;',
    letterSpacing: '-0.07px'
  })}
`;
