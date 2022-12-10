import {
  ProfileWrapper,
  ProfileImage,
  ProfileNav,
  GotoLend,
  GotoBorrow,
  GotoBooks,
  Logout,
} from './styled';
import Link from 'next/link';

const Profile = () => {
  return (
    <ProfileWrapper>
      <h1>내 계정</h1>
      <ProfileImage></ProfileImage>
      <ProfileNav>
        <GotoBorrow>
          <Link href="mypage/borrow">
            <img src="../../img/arrow_right.png" alt="" />
            빌리기
          </Link>
        </GotoBorrow>
        <GotoLend>
          <Link href="mypage/lend">
            <img src="../../img/arrow_left.png" alt="" />
            빌려주기
          </Link>
        </GotoLend>
        <GotoBooks>
          <Link href="/">내 책장</Link>
        </GotoBooks>
        <Logout>
          <span>로그아웃</span>
        </Logout>
      </ProfileNav>
    </ProfileWrapper>
  );
};
export default Profile;
