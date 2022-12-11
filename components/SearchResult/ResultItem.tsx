import React from 'react';

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

type ItemProps = {
  item: ResultDummy;
};

const ResultItem = ({ item }: ItemProps) => {
  console.log(item);
  return (
    <div>
      <div>이미지</div>

      <p>{item.title}</p>
    </div>
  );
};

export default ResultItem;
