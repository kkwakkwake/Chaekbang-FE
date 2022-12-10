import styled from '@emotion/styled';
import { Colors } from '../styles/ColorVariable';

export const MainWrapper = styled.div`
  width: 100%;
  padding: 90px 0;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  /* grid-auto-rows: 280px; */
  gap: 40px 20px;
  justify-content: stretch;
`;

export const BookItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 220px;
  height: 280px;
  margin: 0 auto;
`;
export const UserView = styled.div`
  display: flex;
  div {
    width: 22px;
    height: 22px;
    border-radius: 50%;
    background-color: #ddd;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  p {
    font-size: 0.8rem;
    line-height: 22px;
    margin-left: 5px;
  }
`;

export const BookInfo = styled.div`
  margin-top: 10px;
  transition: all 0.3s;
  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }
`;
export const BookImage = styled.div`
  width: 220px;
  height: 220px;
  background-color: #ddd;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const BookTitle = styled.p`
  margin-top: 10px;
`;
