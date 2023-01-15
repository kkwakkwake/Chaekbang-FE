import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { userActions } from '../../src/store/reducers';
import { ItemImg } from '../SearchResult/styled';
import {
  BookInfo,
  BorrowStatusWrapper,
  NewBtn,
  NewPostContent,
  NewPostTitle,
  NewPostWrapper,
  OnwerInfo,
} from './styled';

type Data = {
  authors: string[];
  contents: string;
  datetime?: string;
  isbn?: string;
  price?: number;
  publisher: string;
  sales_prcie?: number;
  thumbnail: string;
  title: string;
  translators?: [];
  url?: string;
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

type NewData = {
  item: Data;
  status: boolean;
};

const NewPost = ({ item, status }: NewData) => {
  console.log(item);
  console.log(status);
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

  const borrowNewBook = () => {
    /** 기존에 존재하는 책 빌리기 로직
     * 성공하면 /로 이동
     *
     */
  };

  return (
    <NewPostWrapper>
      {status ? (
        <BorrowStatusWrapper>
          <OnwerInfo>
            <div></div>
            <span>{item.user.name}</span>
          </OnwerInfo>
          <BookInfo>
            <ItemImg thumbnail={thumbnail}></ItemImg>
            <div>
              <NewPostTitle>{title}</NewPostTitle>
              <input type="date" />
            </div>
          </BookInfo>
        </BorrowStatusWrapper>
      ) : (
        <div>
          <NewPostTitle>{title}</NewPostTitle>
          <ItemImg thumbnail={thumbnail}></ItemImg>
        </div>
      )}

      {/* <NewPostTitle>{title}</NewPostTitle>
      <ItemImg thumbnail={thumbnail}></ItemImg> */}
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
      {status ? (
        <NewBtn onClick={borrowNewBook}>신청</NewBtn>
      ) : (
        <NewBtn onClick={addNewBook}>추가</NewBtn>
      )}
      {/* <NewBtn onClick={addNewBook}>추가</NewBtn> */}
    </NewPostWrapper>
  );
};

export default NewPost;
