import { LendWrapper, TabWrapper, Waiting, Lent } from './styled';
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
    lend: 'waiting',
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
    lend: 'waiting',
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
    lend: 'waiting',
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
    lend: 'waiting',
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
    lend: 'waiting',
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
    lend: 'waiting',
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
    lend: 'waiting',
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
    lend: 'waiting',
  },
];

const dummy2: DummyItem[] = [
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
    lend: 'lent',
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
    lend: 'lent',
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
    lend: 'lent',
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
    lend: 'lent',
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
    lend: 'lent',
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
    lend: 'lent',
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
    lend: 'lent',
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
    lend: 'lent',
  },
];

const Lend = () => {
  const [tabMenu, setTabMenu] = useState<string>('waiting');
  const [dummy, setDummy] = useState<null | DummyItem[]>(null);

  useEffect(() => {
    setDummy(dummy1);
  }, []);

  const handleWaiting = () => {
    setTabMenu('waiting');
    setDummy(dummy1);
  };

  const handleLent = () => {
    setTabMenu('lent');
    setDummy(dummy2);
  };

  return (
    <LendWrapper>
      <h1>빌려주기</h1>
      <TabWrapper>
        <Waiting onClick={handleWaiting} tabMenu={tabMenu}>
          대기 중
        </Waiting>
        <Lent onClick={handleLent} tabMenu={tabMenu}>
          대여 중
        </Lent>
      </TabWrapper>
      {dummy && <BookList dummy={dummy} />}
    </LendWrapper>
  );
};

export default Lend;
