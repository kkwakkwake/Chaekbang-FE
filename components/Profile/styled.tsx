import styled from '@emotion/styled';

export const ProfileWrapper = styled.main`
  /* width: 100%; */
  padding: 100px 0;

  h1 {
    font-size: 1.5rem;
    font-weight: bold;
    color: #8f8f8f;
    margin-left: 60px;
  }
`;

export const ProfileImage = styled.div`
  width: 180px;
  height: 180px;
  border-radius: 50%;
  background-color: #ddd;
  margin: 40px auto;
`;

export const ProfileNav = styled.nav`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 20em;

  a {
    font-size: 1.2rem;
    font-weight: bold;
    color: #8f8f8f;
  }
`;

export const GotoBorrow = styled.div`
  border-top: 2px solid #ddd;
  border-bottom: 2px solid #ddd;
  height: 50px;
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: all 0.3s;
  a {
    display: flex;
    align-items: center;
  }
  img {
    left: 0;
    top: 0;
    width: 30px;
    margin-right: 10px;
  }
  &:hover {
    opacity: 0.6;
  }
`;

export const GotoLend = styled.div`
  border-bottom: 2px solid #ddd;
  height: 50px;
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: all 0.3s;
  a {
    display: flex;
    align-items: center;
  }
  img {
    left: 0;
    top: 0;
    width: 30px;
    margin-right: 10px;
  }
  &:hover {
    opacity: 0.6;
  }
`;

export const GotoBooks = styled.div`
  border-bottom: 2px solid #ddd;
  height: 50px;
  padding-left: 40px;
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: all 0.3s;
  &:hover {
    opacity: 0.6;
  }
`;
export const Logout = styled.div`
  border-bottom: 2px solid #ddd;
  height: 50px;
  padding-left: 40px;
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: all 0.3s;
  span {
    font-size: 1.2rem;
    font-weight: bold;
    color: #8f8f8f;
  }
  &:hover {
    opacity: 0.6;
  }
`;
