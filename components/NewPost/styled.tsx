import styled from '@emotion/styled';
import { Colors } from '../../styles/ColorVariable';

export const NewPostWrapper = styled.div`
  width: 80%;
  margin: auto;
  margin-top: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const NewPostTitle = styled.p`
  font-size: 1.3rem;
  font-weight: 700;
  padding-bottom: 20px;
`;

export const NewPostContent = styled.div`
  padding: 10px 0;
  width: 100%;

  p:first-of-type {
    font-weight: 700;
    font-size: 1rem;

    padding-bottom: 10px;
  }

  p:last-child {
    font-size: 1rem;
    line-height: 1.3;
  }
`;

export const NewBtn = styled.button`
  margin-top: 20px;
  background-color: ${Colors.beige};
  border: none;
  width: 170px;
  height: 35px;
  border-radius: 15px;
  font-size: 1rem;
  font-weight: 700;

  &:hover {
    cursor: pointer;
    transform: scale(1.05);
    transition: 0.2s;
  }
`;
