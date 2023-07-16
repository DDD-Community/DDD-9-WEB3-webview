import { DRAWER_BLEEDING } from '@components/bottom-sheet/constants';
import styled, {createGlobalStyle} from 'styled-components';

export const Global = createGlobalStyle`
  .MuiDrawer-root > .MuiPaper-root {
    // height: calc(50% - ${DRAWER_BLEEDING}px);
     overflow: visible;
  }
`
export const DrawBarStyled = styled.div`
  position: absolute;
  top: -50px;
  right: 0;
  left: 0;
  width: 100%;
  height: ${DRAWER_BLEEDING}px;
  background-color: #fff;
  visibility: visible;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
`
export const PullerStyled = styled.div`
  width: 30px;
  height: 6px;
  background-color: #ddd;
  border-radius: 3px;
  position: absolute;
  top: 8px;
  left: calc(50% - 15px);
`;
