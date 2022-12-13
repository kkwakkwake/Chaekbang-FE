import {
  BookItemWrapper,
  UserView,
  BookInfo,
  BookImage,
  BookTitle,
  DueDate,
  Status,
} from './styled';
import { DummyItem } from '../src/ts/interfaces';

interface ItemProps {
  key: string;
  item: DummyItem;
}

const BookItem = ({ item }: ItemProps) => {
  return (
    <BookItemWrapper>
      {!item.lend && item.user && (
        <UserView>
          <div>
            {item.user.image && (
              <img src={item.user.image} alt="작성자 이미지" />
            )}
          </div>
          <p>{item.user.name}</p>
        </UserView>
      )}
      {item.lend &&
        (item.lend == 'waiting' ? (
          <Status>빌려주기</Status>
        ) : (
          <Status>반납됨</Status>
        ))}
      <BookInfo>
        <BookImage>
          {item.post.image && <img src={item.post.image} alt="책 이미지" />}
        </BookImage>
        <BookTitle>{item.post.title.slice(0, 15)}</BookTitle>
        {item.post.dueDate && <DueDate>~{item.post.dueDate}</DueDate>}
      </BookInfo>
    </BookItemWrapper>
  );
};

export default BookItem;
