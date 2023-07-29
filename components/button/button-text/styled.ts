import { ButtonSize, ButtonTheme } from '@components/button/model';
import { defaultFont } from '@styles/foundation/fonts';
import styled, { css } from 'styled-components';
import { ButtonTextStyledProps } from './model';

export const ButtonTextStyled = styled.button<ButtonTextStyledProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 19px 0 20px;
  box-sizing: border-box;
  border: none;
  border-radius: var(--button-border-radius, 10px);
  cursor: pointer;
  ${defaultFont({
    size: '15px'
  })}
  ${({ size }) => {
    switch (size) {
      case ButtonSize.custom:
        return {}
      case ButtonSize.fill:
        return { 
          width: '100%'
        }
    }
  }}
  ${({ theme }) => {
    switch (theme) {
      case ButtonTheme.primary:
        return css`
          background-color: #DA3232;
          color: #fff;
          
          &:disabled, &[disabled] {
            background-color: #ccc;
            cursor: not-allowed;
          }
          &:hover {
          }
        `
      case ButtonTheme.secondary:
        return css`
          background-color: #F0F2F5;
          color: #000;

          &:disabled, &[disabled] {
            background-color: #ccc;
            cursor: not-allowed;
          }
          &:hover {
          }
        `
    }
  }}
`

export const leftComponentStyled = {

}

export const rightComponentStyled = {

}
