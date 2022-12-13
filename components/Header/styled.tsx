import styled from '@emotion/styled';
import { Colors } from '../../styles/ColorVariable';

export const HeaderWrapper = styled.header`
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
  background-color: ${Colors.green};
  /* background-color: #fff; */
  position: relative;
  div {
    height: 60px;
    line-height: 60px;
    text-align: center;
  }
`;

export const GoBack = styled.button`
  background: none;
  border: none;
  position: absolute;
  left: 10px;
  top: 0;
  height: 60px;
  cursor: pointer;
  img {
    height: 20px;
  }
`;
