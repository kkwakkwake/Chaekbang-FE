import { PostItemWrapper, UserView, PostImage } from './styled';
import { DummyItem } from './Main';

interface ItemProps {
  key: string;
  item: DummyItem;
}

const PostItem = ({ item }: ItemProps) => {
  console.log(item);

  return (
    <PostItemWrapper>
      <UserView>
        <div></div>
        <p>{item.user.name}</p>
      </UserView>
      <PostImage>image</PostImage>
      <p>{item.post.title}</p>
    </PostItemWrapper>
  );
};

export default PostItem;
