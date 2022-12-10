import BookItem from '../BookItem';
import { MainWrapper } from './styled';
import { DummyItem } from '../../src/ts/interfaces';

const dummy: DummyItem[] = [
  {
    id: '1',
    user: {
      name: 'user1',
    },
    post: {
      image: 'https://source.unsplash.com/random',
      title: '책 제목 영역입니다.책 제목 영역입니다.책 제목 영역입니다.',
    },
  },
  {
    id: '2',
    user: {
      name: 'user2',
    },
    post: {
      title: '책 제목 영역입니다.',
    },
  },
  {
    id: '3',
    user: {
      name: 'user3',
    },
    post: {
      title: '책 제목 영역입니다.',
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
    },
  },
  {
    id: '6',
    user: {
      name: 'user6',
    },
    post: {
      title: '책 제목 영역입니다.',
    },
  },
  {
    id: '7',
    user: {
      name: 'user7',
    },
    post: {
      title: '책 제목 영역입니다.',
    },
  },
  {
    id: '8',
    user: {
      name: 'user8',
    },
    post: {
      title: '책 제목 영역입니다.',
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
    },
  },
  {
    id: '10',
    user: {
      name: 'user10',
    },
    post: {
      title: '책 제목 영역입니다.',
    },
  },
];

const Main = () => {
  return (
    <MainWrapper>
      {dummy.map((item) => (
        <BookItem key={item.id} item={item} />
      ))}
    </MainWrapper>
  );
};

export default Main;
