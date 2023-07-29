import { defaultFont } from '@styles/foundation/fonts';
import styled from 'styled-components';

export const FooterSite = styled.footer`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
  height: 158px;
  background-color: #F2F2F2;
  margin-top: auto;
  position: relative;
`

export const FooterSiteMapStyled = styled.footer`
  display: flex;
  align-items: center;
  gap: 24px;
`


export const SiteMapStyled = styled.div`
  ${defaultFont({
    color: '#888',
    size: '14px',
    lineHeight: '19.094px',
    letterSpacing:'-0.5px'
  })}
`

export const CopyRight = styled.p`
  ${defaultFont({
    color: '#AAA',
    size: '14px',
    lineHeight: '19.094px',
    letterSpacing:'-0.5px',
    align: 'left'
  })}
`;
