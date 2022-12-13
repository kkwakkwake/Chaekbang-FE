import styled from '@emotion/styled';
import { Colors } from '../../styles/ColorVariable';

export const BottomNavWrapper = styled.nav`
  width: 100%;
  height: 60px;
  position: fixed;
  left: 0;
  bottom: 0;
  z-index: 99;
`;
export const BottomNavContainer = styled.div`
  max-width: 720px;
  margin: 0 auto;
  height: 60px;
  background-color: ${Colors.beige};
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const GoToMainpage = styled.div`
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 40px;
    height: 40px;
    object-fit: cover;
  }
  opacity: 0.6;
`;
export const New = styled.div`
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 40px;
    height: 40px;
    object-fit: cover;
  }
  opacity: 0.6;
`;
export const GoToMypage = styled.div`
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 36px;
    height: 36px;
    object-fit: cover;
  }
  opacity: 0.6;
`;
