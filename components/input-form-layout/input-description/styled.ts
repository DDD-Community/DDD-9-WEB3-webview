import { InputDescriptionStatus, TInputDescriptionStatus } from '@components/input-form-layout/model';
import { defaultFont } from '@styles/foundation/fonts';
import styled from 'styled-components';

export const InputDescriptionStyled = styled.p<{status: TInputDescriptionStatus}>`
  margin-top: -5px;
  ${({ status }) => defaultFont({
    color: status === InputDescriptionStatus.error ? '#DA3232' : '#797C7E', // Here, we use the 'color' prop to set the color dynamically.
    size: '14px',
    lineHeight: '19px',
    weight: 500,
    letterSpacing: '-0.07px'
  })}
`;
