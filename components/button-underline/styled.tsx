import { IButtonUnderlineStyledProps } from '@components/button-underline/model';
import { ButtonSize } from '@components/button/model';
import { defaultFont } from '@styles/foundation/fonts';
import styled from 'styled-components';

export const ButtonUnderlineStyled = styled.a<IButtonUnderlineStyledProps>`
  display: inline-flex;
  text-decoration-line: underline;
  justify-content: center;
  ${defaultFont({ color: '#DA3232'})};
  ${props => ({
    [ButtonSize.custom]: {},
    [ButtonSize.fill]: {
      width: '100%'
    },
  })[props.size]}
`;
