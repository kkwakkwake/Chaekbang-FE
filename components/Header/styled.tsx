import styled from '@emotion/styled';
import { Colors } from '../../styles/ColorVariable';

export const HeaderWrapper = styled.div`
  width: 100%;
  height: 60px;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 99;
`;

export const HeaderContainer = styled.div`
  max-width: 720px;
  margin: 0 auto;
  height: 60px;
  background-color: ${Colors.beige};
  div {
    height: 60px;
    line-height: 60px;
    text-align: center;
  }
`;
