import {
  BorrowWrapper,
  TabWrapper,
  Approved,
  Ongoing,
  TabEffect,
} from './styled';
import BookList from '../BookList';
import { DummyItem } from '../../src/ts/interfaces';
import { useEffect, useState } from 'react';

const dummy1: DummyItem[] = [
  {
    id: '1',
    user: {
      name: 'user1',
    },
    post: {
      image: 'https://source.unsplash.com/random',
      title: '책 제목 영역입니다.책 제목 영역입니다.책 제목 영역입니다.',
      dueDate: '2022.12.25',
    },
  },
  {
    id: '2',
    user: {
      name: 'user2',
    },
    post: {
      title: '책 제목 영역입니다.',
      dueDate: '2022.12.25',
    },
  },
  {
    id: '3',
    user: {
      name: 'user3',
    },
    post: {
      title: '책 제목 영역입니다.',
      dueDate: '2022.12.25',
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
      dueDate: '2022.12.25',
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
      dueDate: '2022.12.25',
    },
  },
  {
    id: '6',
    user: {
      name: 'user6',
    },
    post: {
      title: '책 제목 영역입니다.',
      dueDate: '2022.12.25',
    },
  },
  {
    id: '7',
    user: {
      name: 'user7',
    },
    post: {
      title: '책 제목 영역입니다.',
      dueDate: '2022.12.25',
    },
  },
  {
    id: '8',
    user: {
      name: 'user8',
    },
    post: {
      title: '책 제목 영역입니다.',
      dueDate: '2022.12.25',
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
      dueDate: '2022.12.25',
    },
  },
  {
    id: '10',
    user: {
      name: 'user10',
    },
    post: {
      title: '책 제목 영역입니다.',
      dueDate: '2022.12.25',
    },
  },
];

const dummy2: DummyItem[] = [
  {
    id: '1',
    user: {
      name: 'user1',
    },
    post: {
      title: '책 제목 영역입니다.책 제목 영역입니다.책 제목 영역입니다.',
      dueDate: '2022.12.25',
    },
  },
  {
    id: '2',
    user: {
      name: 'user2',
    },
    post: {
      image: 'https://source.unsplash.com/random',
      title: '책 제목 영역입니다.',
      dueDate: '2022.12.25',
    },
  },
  {
    id: '3',
    user: {
      name: 'user3',
    },
    post: {
      title: '책 제목 영역입니다.',
      dueDate: '2022.12.25',
    },
  },
  {
    id: '4',
    user: {
      name: 'user4',
    },
    post: {
      title: '책 제목 영역입니다.',
      dueDate: '2022.12.25',
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
      dueDate: '2022.12.25',
    },
  },
  {
    id: '6',
    user: {
      name: 'user6',
    },
    post: {
      title: '책 제목 영역입니다.',
      dueDate: '2022.12.25',
    },
  },
  {
    id: '7',
    user: {
      name: 'user7',
    },
    post: {
      title: '책 제목 영역입니다.',
      dueDate: '2022.12.25',
    },
  },
  {
    id: '8',
    user: {
      name: 'user8',
    },
    post: {
      title: '책 제목 영역입니다.',
      dueDate: '2022.12.25',
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
      dueDate: '2022.12.25',
    },
  },
  {
    id: '10',
    user: {
      name: 'user10',
    },
    post: {
      title: '책 제목 영역입니다.',
      dueDate: '2022.12.25',
    },
  },
];

const Borrow = () => {
  const [tabMenu, setTabMenu] = useState<string>('approved');
  const [dummy, setDummy] = useState<null | DummyItem[]>(null);

  useEffect(() => {
    setDummy(dummy1);
  }, []);

  const handleApproved = () => {
    setTabMenu('approved');
    setDummy(dummy1);
  };

  const handleOngoing = () => {
    setTabMenu('ongoing');
    setDummy(dummy2);
  };

  return (
    <BorrowWrapper>
      <h1>빌리기</h1>
      <TabWrapper>
        <Approved onClick={handleApproved} tabMenu={tabMenu}>
          승인완료
        </Approved>
        <Ongoing onClick={handleOngoing} tabMenu={tabMenu}>
          진행중
        </Ongoing>
        <TabEffect tabMenu={tabMenu}></TabEffect>
      </TabWrapper>
      {dummy && <BookList dummy={dummy} />}
    </BorrowWrapper>
  );
};

export default Borrow;
