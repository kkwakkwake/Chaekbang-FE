import React from 'react';
import ResultItem from './ResultItem';
import { ResultListWrapper } from './styled';

interface ResultDummy {
  authors: string[];
  contents: string;
  datetime: string;
  isbn: string;
  price: number;
  sales_prcie: number;
  publisher: string;
  thumbnail: string;
  title: string;
  translators?: [];
  url: 'string';
}

interface ResultListProps {
  dummy: ResultDummy[];
}

const ResultList = ({ dummy }: ResultListProps) => {
  return (
    <ResultListWrapper>
      {dummy.map((item) => (
        <ResultItem key={item.isbn} item={item} />
      ))}
    </ResultListWrapper>
  );
};

export default ResultList;
