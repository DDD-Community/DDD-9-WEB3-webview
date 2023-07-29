import { ButtonSize } from '@components/button/model';
import { defaultFont } from '@styles/foundation/fonts';
import styled from 'styled-components';
import { ButtonSnsStyledProps } from './model';

export const ButtonSnsStyled = styled.button<ButtonSnsStyledProps>`
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 13px 20px;
  border: 1px solid rgba(0, 0, 0, 0.05);
  background: var(--button-background, #FBFBFB);
  border-radius: var(--button-border-radius, 30px);
  height: var(--button-width, 32px);
  cursor: pointer;
  position: relative;
  height: auto;
  ${defaultFont({})}
  ${props => ({
  [ButtonSize.custom]: {},
  [ButtonSize.fill]: {
    width: '100%'
  },
})[props.size]}
`

export const leftComponentStyled = {

}

export const rightComponentStyled = {

}
