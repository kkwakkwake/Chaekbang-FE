import styled from '@emotion/styled';
import { Colors } from '../../styles/ColorVariable';

export const MainWrapper = styled.div`
  width: 100%;
  padding: 90px 0;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  grid-auto-rows: 280px;
  gap: 40px 20px;
  justify-content: stretch;
`;
