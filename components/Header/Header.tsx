import { HeaderWrapper, HeaderContainer, GoBack } from './styled';
import { useRouter } from 'next/router';

const Header = () => {
  const router = useRouter();
  const goback = () => {
    router.back();
  };

  return (
    <HeaderWrapper>
      <HeaderContainer>
        <GoBack onClick={goback}>
          <img src="../../img/back.png" alt="뒤로가기" />
        </GoBack>
        <div>책방</div>
      </HeaderContainer>
    </HeaderWrapper>
  );
};

export default Header;
