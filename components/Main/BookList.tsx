import { BookItemWrapper, UserView, BookImage, BookTitle } from '../styled';
import { DummyItem } from '../../src/ts/interfaces';

interface ItemProps {
  key: string;
  item: DummyItem;
}

const BookList = ({ item }: ItemProps) => {
  return (
    <BookItemWrapper>
      <UserView>
        <div>
          {item.user.image && <img src={item.user.image} alt="작성자 이미지" />}
        </div>
        <p>{item.user.name}</p>
      </UserView>
      <BookImage>
        {item.post.image && <img src={item.post.image} alt="책 이미지" />}
      </BookImage>
      <BookTitle>{item.post.title}</BookTitle>
    </BookItemWrapper>
  );
};

export default BookList;
