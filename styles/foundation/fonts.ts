import styled, {css} from 'styled-components';


export interface IDefaultFont {
  color?: string;
  size?: string;
  weight?: number;
  lineHeight?: string;
  letterSpacing?: string;
  align?: string;
}
export const defaultFont = ({color='#3B3B3B', size='13px', align='center', weight=700, lineHeight='normal', letterSpacing='-0.065px'}: IDefaultFont) => css`
  font-family: Apple SD Gothic Neo;
  color: ${color};
  text-align: ${align};
  font-size: ${size};
  font-style: normal;
  font-weight: ${weight};
  line-height: ${lineHeight};
  letter-spacing: ${letterSpacing};
`

