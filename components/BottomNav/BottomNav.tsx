import Link from 'next/link';
import {
  BottomNavWrapper,
  BottomNavContainer,
  GoToMainpage,
  New,
  GoToMypage,
} from './styled';

const BottomNav = () => {
  return (
    <BottomNavWrapper>
      <BottomNavContainer>
        <GoToMainpage>
          <Link href="/">
            <img src="../../img/home.png" alt="메인페이지" />
          </Link>
        </GoToMainpage>
        <New>
          <Link href="/search">
            <img src="../../img/plus_circle.png" alt="추가하기" />
          </Link>
        </New>
        <GoToMypage>
          <Link href="/mypage">
            <img src="../../img/account.png" alt="내계정" />
          </Link>
        </GoToMypage>
      </BottomNavContainer>
    </BottomNavWrapper>
  );
};

export default BottomNav;
