import BookItem from './BookItem';
import { DummyItem } from '../src/ts/interfaces';
import { BookListWrapper } from './styled';

interface DummyProps {
  dummy: DummyItem[];
}

const BookList = ({ dummy }: DummyProps) => {
  return (
    <BookListWrapper>
      {dummy.map((item) => (
        <BookItem key={item.id} item={item} />
      ))}
    </BookListWrapper>
  );
};

export default BookList;
