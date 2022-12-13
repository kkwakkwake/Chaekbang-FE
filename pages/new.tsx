import React from 'react';
import NewPost from '../components/NewPost/NewPost';
import AppLayout from './../components/AppLayout';
import { useRouter } from 'next/router';
import { ParsedUrlQuery } from 'querystring';
import { isConditionalExpression } from 'typescript';

type Data = {
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
  url: string;
};

type NewData = {
  item: Data;
};

const New = () => {
  const router = useRouter();
  const { data } = router.query;
  /** Parsed Url Query 타입지정 해주기 */
  const newItem: Data = JSON.parse(data);

  return (
    <AppLayout>
      <NewPost item={newItem} />
    </AppLayout>
  );
};

export default New;
