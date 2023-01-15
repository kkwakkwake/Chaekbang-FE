import styled from '@emotion/styled';
import { Colors } from '../../styles/ColorVariable';

export const RepositoryWrapper = styled.div`
  width: 95%;
  margin: auto;
  margin-top: 100px;
`;

export const RepoTitle = styled.h1`
  font-size: 1.5rem;
  font-weight: bold;
  color: #8f8f8f;
  margin-bottom: 20px;
`;

export const RepoState = styled.ul`
  display: flex;

  li {
    padding-right: 4px;
    padding-left: 4px;
    padding-top: 7px;
    /* border-top: 2px solid #8f8f8f; */

    border-top: 3px solid #ddd;
    text-align: center;
  }

  li:hover {
    border-top: 3px solid ${Colors.green};
  }
`;

export const RepoBtn = styled.div`
  width: 100%;
  margin-top: 20px;
  text-align: right;

  button {
    border-radius: 9px;
    border: none;
    background-color: #ddd;
    font-size: 0.95rem;
    padding: 3px 13px;
    text-align: right;
  }

  button:hover {
    cursor: pointer;
  }
`;
