import styled from '@emotion/styled';
import { Colors } from '../styles/ColorVariable';

export const BookListWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-auto-rows: 280px;
  gap: 40px 20px;
  justify-content: stretch;
`;

export const BookItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 200px;
  height: 280px;
  margin: 0 auto;
`;
export const UserView = styled.div`
  display: flex;
  div {
    width: 22px;
    height: 22px;
    border-radius: 50%;
    background-color: #ddd;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  p {
    font-size: 0.8rem;
    line-height: 22px;
    margin-left: 5px;
  }
`;

export const BookInfo = styled.div`
  margin-top: 10px;
  transition: all 0.3s;
  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }
`;
export const BookImage = styled.div`
  width: 200px;
  height: 200px;
  background-color: #ddd;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const BookTitle = styled.p`
  margin-top: 10px;
`;

export const DueDate = styled.p`
  margin-top: 7px;
  font-size: 0.8rem;
`;

export const Status = styled.p`
  text-align: right;
  cursor: pointer;
  font-weight: bold;
  transition: all 0.3s;
  color: #555;

  &:hover {
    color: ${Colors.green};
  }
`;

export const Button = styled.button`
  width: 100%;
  border: none;
  padding: 10px 0;
  border-radius: 10px;
  background-color: ${Colors.beige};
  opacity: 0.8;
  cursor: pointer;
  font-size: 0.9rem;
  transition: all 0.2s;
  &:hover {
    opacity: 1;
  }
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 28px;

  label {
    font-size: 1rem;
    margin-bottom: 10px;
  }
  input {
    border: 1px solid #ddd;
    border-radius: 5px;
    height: 38px;
    font-size: 1rem;
    padding-left: 10px;
    outline: none;
  }
  input:focus {
    box-shadow: 0 0 7px ${Colors.beige};
  }
`;

export const FormWrapper = styled.form`
  width: 300px;
  margin-top: 40px;
`;
