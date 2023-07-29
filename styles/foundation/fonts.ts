import styled, {css} from 'styled-components';
import { Poppins } from 'next/font/google'

export interface IDefaultFont {
  fontFamily?: string;
  color?: string;
  size?: string;
  weight?: number;
  lineHeight?: string;
  letterSpacing?: string;
  align?: string;
}
export const defaultFont = ({fontFamily='apple', color='#3B3B3B', size='13px', align='left', weight=700, lineHeight='normal', letterSpacing='-0.065px'}: IDefaultFont) => css`
  font-family: ${getFont(fontFamily)};
  color: ${color};
  text-align: ${align};
  font-size: ${size};
  font-style: normal;
  font-weight: ${weight};
  line-height: ${lineHeight};
  letter-spacing: ${letterSpacing};
`

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '700']
})

const getFont = (fontFamily: string) => {
  switch(fontFamily) {
    case 'poppins':
      return poppins.style.fontFamily
    default :
      return 'Apple SD Gothic Neo'
  }
}
