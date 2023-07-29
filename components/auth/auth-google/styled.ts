import styled from 'styled-components';


export const GoogleButton = styled.div.attrs(props => ({
  id: props.id
}))`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  z-index: 10;
`
