import styled from '@emotion/styled';
import { Colors } from '../../styles/ColorVariable';

export const BottomNavWrapper = styled.div`
  width: 100%;
  height: 60px;
  position: fixed;
  left: 0;
  bottom: 0;
`;
export const BottomNavContainer = styled.div`
  max-width: 720px;
  margin: 0 auto;
  height: 60px;
  background-color: ${Colors.green};
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
