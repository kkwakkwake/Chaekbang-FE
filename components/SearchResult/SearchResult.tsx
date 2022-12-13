import React, { useState } from 'react';
import { BOOKSEARH } from '../../src/store/api/kakao';
import ResultItem from './ResultItem';
import ResultList from './ResultList';
import { ResultMessage, SearchInput, SearchResultWrapper } from './styled';

interface Parameter {
  query: string;
  sort: string;
  page: number;
  size: number;
}

interface ResultDummy {
  authors: string[];
  contents: string;
  datetime: string;
  isbn: string;
  price: number;
  publisher: string;
  sales_prcie: number;
  thumbnail: string;
  title: string;
  translators?: [];
  url: 'string';
}

const SearchResult = () => {
  const [query, setQuery] = useState<string>('');
  const [resultList, setResultList] = useState<ResultDummy[]>([]);
  const [noResult, setNoResult] = useState<boolean>(false);

  /** 검색 버튼 누를 때 API request */
  const requestSearching = async () => {
    const params: Parameter = {
      query,
      sort: 'accuracy',
      page: 1,
      size: 20,
    };

    const { data } = await BOOKSEARH(params);

    if (data.documents) {
      setResultList(data.documents);
    } else {
      /** 검색결과 없을 때 */
      setNoResult(true);
    }
  };

  //console.log(resultList);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && query !== '') {
      return requestSearching();
    } else {
      setResultList([]);
      setNoResult(true);
    }
  };

  return (
    <SearchResultWrapper>
      <SearchInput>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyDown}
        />
      </SearchInput>

      {resultList.length > 0 ? (
        <ResultList dummy={resultList} />
      ) : (
        noResult && (
          <ResultMessage>찾고 싶은 책 제목을 입력해주세요!</ResultMessage>
        )
      )}
      {/* {resultList.length > 0 &&
          resultList.map((item) => <ResultItem key={item.isbn} item={item} />)} */}
    </SearchResultWrapper>
  );
};

export default SearchResult;
