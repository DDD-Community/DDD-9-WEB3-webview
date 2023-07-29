import { SITE_MENU } from '@components/layout/footer-site-map/constants';
import { CopyRight, FooterSite, FooterSiteMapStyled, SiteMapStyled } from '@components/layout/footer-site-map/styled';

const FooterSiteMap = () => {
  return (
    <FooterSite>
      <FooterSiteMapStyled>
        {SITE_MENU.map((menu, idx) => <SiteMapStyled key={idx}>{menu.title}</SiteMapStyled>)}
      </FooterSiteMapStyled>
      <CopyRight>ⓒ 2023 thingsflow Inc.</CopyRight>
    </FooterSite>
  )
}

export default FooterSiteMap;
