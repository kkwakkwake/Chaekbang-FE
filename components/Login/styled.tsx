import styled from '@emotion/styled';
import { Colors } from '../../styles/ColorVariable';
import { InputWrapper, Button } from '../styled';

export const LoginWrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 100px 0;
`;
export const LoginImageWrapper = styled.div`
  width: 100px;
  height: 100px;
  background-color: #ddd;
`;

export const EmailInputWrapper = styled(InputWrapper)``;
export const PasswordInputWrapper = styled(InputWrapper)``;
export const LoginButton = styled(Button)`
  margin-top: 20px;
`;
