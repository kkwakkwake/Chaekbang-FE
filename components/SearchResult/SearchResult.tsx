import React, { useState } from 'react';
import { BOOKSEARH } from '../../src/store/api/kakao';
import ResultItem from './ResultItem';
import ResultList from './ResultList';
import { SearchInput, SearchResultWrapper } from './styled';

interface Parameter {
  query: string;
  sort: string;
  page: number;
  size: number;
}

interface ResultDummy {
  authors: [];
  contents: string;
  datetime: string;
  isbn: string;
  price: number;
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
      size: 15,
    };

    const { data } = await BOOKSEARH(params);

    if (data.documents) {
      setResultList(data.documents);
    } else {
      /** 검색결과 없을 때 */
      setNoResult(true);
    }
  };

  console.log(resultList);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      requestSearching();
    }
    return;
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
      <div>
        {/* {resultList.length > 0 &&
          <ResultList dummy={resultList}/>} */}
        {resultList.length > 0 &&
          resultList.map((item) => <ResultItem key={item.isbn} item={item} />)}
      </div>
    </SearchResultWrapper>
  );
};

export default SearchResult;
