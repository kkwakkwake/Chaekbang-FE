import { useRouter } from 'next/router';
import React from 'react';
import AppLayout from '../../components/AppLayout';
import NewPost from '../../components/NewPost/NewPost';

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

const detail = () => {
  // const router = useRouter();
  // const { data } = router.query;
  // const detailItem = JSON.parse(data);
  // console.log(detailItem);
  const item: NewBook = {
    authors: ['구병모'],
    thumbnail:
      'https://search1.kakaocdn.net/thumb/R120x174.q85/?fname=http%3A%2F%2Ft1.daumcdn.net%2Flbook%2Fimage%2F1608523%3Ftimestamp%3D20230114145801',
    title: '파과',
    contents:
      '한국 소설에서 유례를 찾을 수 없는 60대 여성 킬러라는 독특한 캐릭터를 통해 새로운 여성…깔끔한 마무리로 방역 작업을 처리해왔다. 하지만 몸도 기억도 예전 같지 않게 삐걱거리면서',
    publisher: '위즈덤하우스',
    user: {
      name: '꽉꽉이',
      available: true,
    },
  };

  //console.log(item);
  const borrowStatus = true;
  return (
    <AppLayout>
      <NewPost item={item} status={borrowStatus} />
    </AppLayout>
  );
};

export default detail;
