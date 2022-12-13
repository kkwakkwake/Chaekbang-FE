import Link from 'next/link';
import React from 'react';
import { ItemImg, ItemInfo, ListItem } from './styled';

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

type ItemProps = {
  item: ResultDummy;
};

const ResultItem = ({ item }: ItemProps) => {
  const { authors, contents, title, thumbnail } = item;
  //console.log(item);

  return (
    <Link
      href={{
        pathname: '/new',
        query: { data: JSON.stringify(item) },
      }}
      as="/new"
    >
      <ListItem>
        {/* <div>
        <img src={thumbnail} alt={title} />
      </div> */}
        <ItemImg thumbnail={thumbnail}></ItemImg>
        <ItemInfo>
          <p>{title}</p>
          <div>
            {authors.map((v, i) => (
              <span key={i}>{v} | </span>
            ))}
          </div>
          {contents.length > 120 ? (
            <p>{contents.slice(0, 120)} ...</p>
          ) : (
            <p>{contents}</p>
          )}
          {/* <p>{contents.slice(0, 120)} ...</p> */}
        </ItemInfo>
      </ListItem>
    </Link>
  );
};

export default ResultItem;
