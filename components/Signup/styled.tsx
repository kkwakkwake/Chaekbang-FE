import styled from '@emotion/styled';
import { Colors } from '../../styles/ColorVariable';
import { InputWrapper, Button } from '../styled';

export const SignupWrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 100px 0;
`;

export const SignupImageWrapper = styled.div`
  width: 100px;
  height: 100px;
  background-color: #ddd;
`;

export const NameInputWrapper = styled(InputWrapper)`
  position: relative;
`;

export const EmailInputWrapper = styled(InputWrapper)`
  position: relative;
  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  button {
    font-size: 0.8rem;
    border: none;
    border-radius: 10px;
    margin-bottom: 10px;
    padding: 5px 10px;
    cursor: pointer;
    background-color: ${Colors.beige};
    opacity: 0.8;
    transition: all 0.2s;
    &:hover {
      opacity: 1;
    }
  }
`;
export const PasswordInputWrapper = styled(InputWrapper)`
  position: relative;
`;

export const TermsWrapper = styled.div`
  display: flex;
  flex-direction: column;

  label {
    margin-bottom: 15px;
    cursor: pointer;
    font-size: 0.9rem;
  }

  input:checked {
    accent-color: ${Colors.green};
  }
`;

export const SignupButton = styled(Button)``;

export const InvalidMessage = styled.span`
  font-size: 0.7rem;
  position: absolute;
  right: 0;
  bottom: -20px;
  color: red;
`;
