import React from 'react';
import { RepoBtn, RepositoryWrapper, RepoState, RepoTitle } from './styled';

const MyBook = () => {
  return (
    <RepositoryWrapper>
      <RepoTitle>내 책방</RepoTitle>
      <RepoState>
        <li>전체</li>
        <li>빌려줌</li>
        <li>안빌려줌</li>
      </RepoState>
      <RepoBtn>
        <button>편집</button>
      </RepoBtn>
    </RepositoryWrapper>
  );
};

export default MyBook;
