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

export const ResultListWrapper = styled.div``;
