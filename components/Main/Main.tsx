import BookItem from '../BookItem';
import { MainWrapper, SearchResultWrapper, SearchInput } from './styled';
import { DummyItem } from '../../src/ts/interfaces';
import BookList from '../BookList';
import { useState } from 'react';

const dummy: DummyItem[] = [
  {
    id: '1',
    user: {
      name: 'user1',
    },
    post: {
      image: 'https://source.unsplash.com/random',
      title: '책 제목 영역입니다.책 제목 영역입니다.책 제목 영역입니다.',
    },
  },
  {
    id: '2',
    user: {
      name: 'user2',
    },
    post: {
      title: '책 제목 영역입니다.',
    },
  },
  {
    id: '3',
    user: {
      name: 'user3',
    },
    post: {
      title: '책 제목 영역입니다.',
    },
  },
  {
    id: '4',
    user: {
      name: 'user4',
    },
    post: {
      image: 'https://source.unsplash.com/random',
      title: '책 제목 영역입니다.',
    },
  },
  {
    id: '5',
    user: {
      name: 'user5',
    },
    post: {
      image: 'https://source.unsplash.com/random',
      title: '책 제목 영역입니다.',
    },
  },
  {
    id: '6',
    user: {
      name: 'user6',
    },
    post: {
      title: '책 제목 영역입니다.',
    },
  },
  {
    id: '7',
    user: {
      name: 'user7',
    },
    post: {
      title: '책 제목 영역입니다.',
    },
  },
  {
    id: '8',
    user: {
      name: 'user8',
    },
    post: {
      title: '책 제목 영역입니다.',
    },
  },
  {
    id: '9',
    user: {
      name: 'user9',
    },
    post: {
      image: 'https://source.unsplash.com/random',
      title: '책 제목 영역입니다.',
    },
  },
  {
    id: '10',
    user: {
      name: 'user10',
    },
    post: {
      title: '책 제목 영역입니다.',
    },
  },
];

const searchDummy: DummyItem[] = [
  {
    id: '1',
    user: {
      name: 'user1',
    },
    post: {
      image: 'https://source.unsplash.com/random',
      title: '책 제목 영역입니다.책 제목 영역입니다.책 제목 영역입니다.',
    },
  },
  {
    id: '2',
    user: {
      name: 'user2',
    },
    post: {
      title: '책 제목 영역입니다.',
    },
  },
  {
    id: '3',
    user: {
      name: 'user3',
    },
    post: {
      title: '책 제목 영역입니다.',
    },
  },
  {
    id: '4',
    user: {
      name: 'user4',
    },
    post: {
      image: 'https://source.unsplash.com/random',
      title: '책 제목 영역입니다.',
    },
  },
  {
    id: '5',
    user: {
      name: 'user5',
    },
    post: {
      image: 'https://source.unsplash.com/random',
      title: '책 제목 영역입니다.',
    },
  },
];

const Main = () => {
  const [query, setQuery] = useState<string>('');
  const [resultList, setResultList] = useState<DummyItem[]>([]);
  const [noResult, setNoResult] = useState<boolean>(false);

  //   if (data.documents) {
  //     setResultList(data.documents);
  //   } else {
  //     /** 검색결과 없을 때 */
  //     setNoResult(true);
  //   }
  // };

  // const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
  //   if (e.key === 'Enter' && query !== '') {
  //     return requestSearching();
  //   } else {
  //     setResultList([]);
  //     setNoResult(true);
  //   }
  // };

  return (
    <MainWrapper>
      <SearchResultWrapper>
        <SearchInput>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            // onKeyDown={handleKeyDown}
          />
        </SearchInput>
      </SearchResultWrapper>
      <BookList dummy={dummy} />
    </MainWrapper>
  );
};

export default Main;
