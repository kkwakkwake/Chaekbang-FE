import styled from '@emotion/styled';
import { Colors } from '../../styles/ColorVariable';

export const SearchResultWrapper = styled.div`
  width: 100%;
  padding-top: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SearchInput = styled.div`
  width: 80%;

  input {
    width: 100%;
    height: 45px;
    background-color: ${Colors.beige};
    border: none;
    border-radius: 22px;
    padding: 7px 15px;
    font-size: 1rem;
    background-image: url('/img/search_bar2.png');
    background-repeat: no-repeat;
    background-size: 35px;
    background-position: 15px center;
    text-indent: 35px;
  }

  input:focus {
    outline: none;
  }
`;

export const ResultListWrapper = styled.div`
  width: 80%;
  margin-top: 50px;
`;

export const ListItem = styled.div`
  width: 100%;
  padding-bottom: 30px;
  display: flex;
  justify-content: space-between;
`;

export const ItemImg = styled.div<{ thumbnail: string }>`
  width: 120px;
  height: 174px;
  /** 이미지 없을 때 기본값 넣어주기 */
  background-image: url(${(props) => props.thumbnail});
  border-radius: 10px;
`;

export const ItemInfo = styled.div`
  width: 430px;
  height: 100%;
  padding: 10px 0;
  display: flex;
  flex-direction: column;
  gap: 10px;

  p:first-of-type {
    font-size: 1.2rem;
    font-weight: 700;
  }

  p:last-child {
    font-size: 1rem;
    line-height: 1.2;
  }
`;

export const ResultMessage = styled.div`
  font-size: 1rem;
  margin-top: 30px;
`;
