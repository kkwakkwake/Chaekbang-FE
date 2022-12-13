import styled from '@emotion/styled';
import { Colors } from '../../styles/ColorVariable';

export const LendWrapper = styled.main`
  width: 100%;
  padding: 100px 0;

  h1 {
    font-size: 1.5rem;
    font-weight: bold;
    color: #8f8f8f;
    margin-left: 10px;
  }
`;

export const TabWrapper = styled.div`
  margin: 0 auto;
  height: 42px;
  line-height: 42px;
  border-radius: 15px;
  display: flex;
  margin: 40px 10px;
  background-color: #ddd;
`;

export const Waiting = styled.div<{ tabMenu: string }>`
  width: 50%;
  text-align: center;
  border-radius: 15px;
  font-size: 1rem;
  font-weight: 500;
  background-color: ${(props) =>
    props.tabMenu == 'waiting' ? Colors.green : 'none'};
  color: ${(props) => (props.tabMenu == 'waiting' ? '#fff' : '#666')};
  cursor: pointer;
`;
export const Lent = styled.div<{ tabMenu: string }>`
  width: 50%;
  text-align: center;
  border-radius: 15px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  background-color: ${(props) =>
    props.tabMenu == 'lent' ? Colors.green : 'none'};
  color: ${(props) => (props.tabMenu == 'lent' ? '#fff' : '#666')};
`;
