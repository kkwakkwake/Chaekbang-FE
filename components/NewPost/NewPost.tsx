import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { ItemImg } from '../SearchResult/styled';
import { NewBtn, NewPostContent, NewPostTitle, NewPostWrapper } from './styled';

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

interface NewBook {
  authors: string[];
  thumbnail: string;
  title: string;
  contents: string;
  publisher: string;
  user: {
    name: string;
    available?: boolean;
  };
}

const NewPost = ({ item }: NewData) => {
  console.log(item);
  const { authors, contents, title, thumbnail, publisher } = item;
  const [newBook, setNewBook] = useState<NewBook>();

  useEffect(() => {
    setNewBook({
      authors,
      contents,
      title,
      thumbnail,
      publisher,
      user: {
        name: 'ys',
        available: true,
      },
    });
  }, []);

  const addNewBook = () => {
    /** 서버로 객체 전달한 뒤 성공하면
     *  /로 이동시키기
     *  /로 이동하면 객체가 추가된 리스트가 보여야함
     */
  };

  return (
    <NewPostWrapper>
      <NewPostTitle>{title}</NewPostTitle>
      <ItemImg thumbnail={thumbnail}></ItemImg>
      <NewPostContent>
        <p>책 소개</p>
        {contents.length > 180 ? (
          <p>{contents.slice(0, 180)} ...</p>
        ) : (
          <p>{contents}</p>
        )}
      </NewPostContent>
      <NewPostContent>
        <p>저자</p>
        <div>
          {authors.map((v, i) => (
            <span key={i}>{v} & </span>
          ))}
        </div>
      </NewPostContent>
      <NewPostContent>
        <p>출판사</p>
        <p>{publisher}</p>
      </NewPostContent>

      <NewBtn onClick={addNewBook}>추가</NewBtn>
    </NewPostWrapper>
  );
};

export default NewPost;
